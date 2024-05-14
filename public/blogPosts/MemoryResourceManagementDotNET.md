---
title: "Memory Management and Resource Management in .NET"
date: "04/3/2024"
excerpt: "Memory management and resource management are two concepts that are easy to confuse when first starting out. Knowing the difference between the two is important to write bug free, maintainable software."
tags: [.net, c#]
---

# Memory Management and Resource Management in .NET

## Introduction :

Memory management and resource management are two concepts that are easy to confuse when first starting out. Knowing the difference between the two is important to write bug free, maintainable software.

The objective of this blog post is to discuss the difference between the two and clear up any confusion.

## Memory management

Memory is a managed resource, in other words, it's under the direct control of the run time. When an object goes out of scope and is no longer referenced, the garbage collector automatically clears up the memory eventually. Thus as developers, we don't really need to worry about explicitly releasing memory.

It is important to note, although you could manually call the static method **`GC.Collect()`** to instruct the garbage collector to deallocate memory, it is generally not advised as it would mostly do more harm than good.

The exact way garbage collection happens is out of the scope of this blog post, but in short:

Objects in the heap go trough a marking phase, in which objects that are still referenced get “marked” to not get garbage collected. Then, we move on to the second phase which is the garbage collection phase in which unmarked objects get garbage collected.

# Resource management

On the other hand, resources such as file handles or open network connections are what is known as unmanaged resources, they run outside the .NET runtime.  Such resources are not automatically “managed” by the CLR, and as such, must be handled by the developer.

The main way to handle such resources in .NET is by implementing the “IDisposable” interface. This way, the consumer of the object knows that it must be explicitly disposed of when it's no longer needed. 

This is known as **deterministic resource management**, meaning it allows the user to deterministically deallocate the resource.

As a side note, it is preferable when trying to dispose of an object to use the “using” keyword, to ensure that the Dispose method is called even if an exception occurs within the block. Otherwise, wrap the object inside a “try catch” and call `Dispose()` inside the`finally` block.

```csharp
using (var disposableObject = new SomeDisposableObject())
{
// Code that uses disposableObject
}
```

Instead of:

```csharp
var disposableObject = new SomeDisposableObject();
try
{
// Code that uses disposableObject
}
catch (Exception ex)
{
}
finally
{
	disposableObject.Dispose();
}
```

The other way resources get freed up is by finalizers (destructors). Finalizers are called in the garbage collection phase when the consumer doesn’t properly dispose of an object that owns unmanaged resources.

This is known as **non-deterministic resource management**, as the user doesn’t exactly know when the resource will be deallocated.

It's important to note that finalizers introduce additional computational burden and should generally be avoided.

## Implementing IDisposable pattern

The reason I’ve left out the implementation of the IDisposable pattern until now, is that we needed to know about finalizers. 

There are generally two cases:

- You only have a class holding other managed resources, managed as in objects that implement `IDisposable` themselves (file streams, database connections…). In most situations, this is the common scenario.
- You have a class holding an unmanaged resource directly (resources that belong to the OS, like file handles, window handles...).

### First case :

For the **first case**, the implementation is straight forward:

```csharp
public class MyResource : IDisposable
{
    public void Dispose()
    {
			// Clean up managed resources, call Dispose on member variables..
    }
```

### Second case :

For the **second case**, we need to implement a finalizer. But before we get to the implementation, It's important to note that the need to explicitly implement a finalizer and directly handle unmanaged resources is relatively rare. Most of the time, we use existing types (like FileStream, HttpClient…) that already handle resource management correctly.

So, unless you are maintaining legacy code that involve dealing with older APIs or work on low-level library where direct resource management is necessary, you will probably only have to deal with the first case.

As for the code for implementing a finalizer:

```csharp
public class MyResource : IDisposable
{
    private bool _disposed = false;

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                // Clean up managed resources, dispose other IDisposable objects here
            }

            // Clean up unmanaged resources (release native resources, file handles etc)

            _disposed = true;
        }
    }

    // Finalizer
    ~MyResource()
    {
        Dispose(false);
    }
}
```

1. When **`Dispose(true)`** is called, it indicates that the object is being explicitly disposed with the **`Dispose()`**method, in this case we should release both managed and unmanaged resources.
2. As explained previously, the finalizer runs during garbage collection as a safety net in case the consumer of the class doesn’t call **`Dispose()`**explicitly. 
    
    In it, we call **`Dispose(false)`** to release only unmanaged resources, by passing **`false`**, we avoid re-entering the managed code (since the garbage collector is already cleaning up). Thus, preventing potential issues like accessing disposed managed objects.
    
3. We call **`GC.SuppressFinalize(this)`** in the **`Dispose()`** method **`GC.SuppressFinalize(this)`**, to inform the GC that the finalizer for this object should not be executed, avoiding unnecessary overhead during garbage collection.
    
    

Note: it’s crucial to follow this pattern to prevent resource leaks and ensure proper cleanup.

### For a deeper dive

[.NET garbage collection - .NET | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/)

[Implement a Dispose method - .NET | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose?redirectedfrom=MSDN)