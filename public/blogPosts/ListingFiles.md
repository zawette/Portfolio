---
title: "Keeping track of my music using NodeJS"
date: "10/3/2021"
excerpt: "I have a very large collection of music stored locally on my computer, to keep track of it in case my pc dies, i decided to write a  node script."
tags: [node, js]
---

# Keeping track of my music using NodeJS

I have a very large collection of music stored locally on my computer, to keep track of it in case my pc dies, i decided to write a node script.

## filtering audio files

I only have mp3 and wav files, so those are the only extensions i am interested in.

```js
const fs = require("fs")

fs.readdir("..", async (err, files) => {
  const filesTypes = ["mp3", "wav"]
  const audioFiles = files.filter((file) =>
    filesTypes.some((ft) => file.includes(ft))
  );
}
```

## getting the metadata

Next we want to get the title, album, artist name and other metadata, for that purpose, i am using music-metadata npm package.
You can get it by running this command :

> npm i music-metadata

```js
for (const [index, af] of audioFiles.entries()) {
  const metadata = await mm.parseFile("../" + af);
  const buffer = metadata.common.title
    ? `${metadata.common.artist} - ${metadata.common.title} - ${metadata.common.album}`
    : af;
}
```

## Final code

finally we write the result into a text file,I personally keep the file on my onedrive. and optionally log the progress into the console.
here's the final code. you can also find it on my [github](https://github.com/zawette/useful-scripts/blob/main/list-music/getMusicZaw.js)

```js
const fs = require("fs");
const mm = require("music-metadata");

fs.readdir("..", async (err, files) => {
  const filesTypes = ["mp3", "wav"];
  const audioFiles = files.filter((file) =>
    filesTypes.some((ft) => file.includes(ft))
  );
  var outputFile = fs.createWriteStream("musicList.txt");
  outputFile.write("My Music List \n");

  const afLength = audioFiles.length;
  for (const [index, af] of audioFiles.entries()) {
    const metadata = await mm.parseFile("../" + af);
    const buffer = metadata.common.title
      ? `${metadata.common.artist} - ${metadata.common.title} - ${metadata.common.album}`
      : af;
    console.log(`${index} of ${afLength} -  ${buffer}`);
    outputFile.write(buffer + "\n");
  }
  outputFile.end();
});
```
