<p align="center">
  <a href="https://palkerecsenyi.github.io/magic/docs/">
    <img src="https://palkerecsenyi.github.io/magic/documentation/media/icon.svg" width="80">
  </a>
  <h1 align="center" style="margin-top:0;">Magic.CSS</h1>
</p>
<p align="center">Magic.CSS is a <strong>simple and responsive CSS library</strong>, made with SASS. It's inspired by (though not directly derived from) Bootstrap and Materialize. Each component is made with minimal markup to increase neatness, and they come with extensive, user-friendly <a href="https://palkerecsenyi.github.io/magic/docs/">documentation</a>.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/magical-css"><img src="https://img.shields.io/npm/v/magical-css.svg" alt="npm version"></a>
  <a href="https://gitter.im/magic-css/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link"><img src="http://badges.gitter.im/magic-css.png"></a>
  <a href="https://travis-ci.org/palkerecsenyi/magic"><img src="https://travis-ci.org/palkerecsenyi/magic.svg?branch=master"></a>
  <a href="https://www.jsdelivr.com/package/npm/magical-css"><img src="https://data.jsdelivr.com/v1/package/npm/magical-css/badge"></a>
  <a href="https://github.com/palkerecsenyi/magic/"><img src="https://img.shields.io/github/downloads/palkerecsenyi/magic/total.svg"></a>
</p>

### Setup
#### Simple
Simply add this to the `<head>` of your page:
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://unpkg.com/magical-css">
```
#### More information
To get Magic, do one of the following:
* Use NPM:
```bash
npm install magical-css
```
* Use Yarn:
```bash
yarn add magical-css
```
* Download https://github.com/palkerecsenyi/magic

To set up Magical Library, place `magic.css` (or `magic.min.css` for a minified file) and the `fonts` folder into the same directory on your website, and link it using
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="path/to/magic.css">
```

### Usage
Magical Library tries to avoid default styles (globally referencing elements rather than classes) wherever possible, to make it as non-destructive in complex projects as possible. Class names are designed to be very evident. For a full usage guide, see the Wiki of this repository.

### Attributions
Two fonts are used: `Noto Sans` by Google and `Roboto` by Christian Robertson.

### Documentation
To use Magic, you'll need to read the official documentation. It's currently available through Github pages at https://palkerecsenyi.github.io/magic/docs/. The documentation is, in fact, made with Magic!

That's it. Enjoy!
