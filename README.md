## aframe-head-tracker-controls-component

[![Version](http://img.shields.io/npm/v/aframe-head-tracker-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-head-tracker-controls-component)
[![License](http://img.shields.io/npm/l/aframe-head-tracker-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-head-tracker-controls-component)

A Head-Coupled perspective for A-Frame that utilizes [headtrackr](https://github.com/auduno/headtrackr). By using computer vision with the user's desktop webcam, headtrackr obtains position and rotation parameters about the user's head - their perspective. The `a-camera` can be updated in response to changing perspective to give a sense of 3 dimensions using the desktop screen.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-head-tracker-controls-component/dist/aframe-head-tracker-controls-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity head-tracker-controls="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-head-tracker-controls-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-head-tracker-controls-component
```

Then require and use.

```js
require('aframe');
require('aframe-head-tracker-controls-component');
```
