/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Head Tracker Controls component for A-Frame.
 */
AFRAME.registerComponent('head-tracker-controls', {
  schema: {
    'xShift': {default: 0.0},
    'yShift': {default: 1.6},
    'zShift': {default: 0.0},
    'xScale': {default: 0.3},
    'yScale': {default: 0.3},
    'zScale': {default: 0.1},
    'width': {default: 99999},
    'height': {default: 99999},
    'depth': {default: 99999}
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    var camera = document.querySelector('a-camera');

    var xShift = this.data.xShift;
    var yShift = this.data.yShift;
    var zShift = this.data.zShift;

    var xScale = this.data.xScale;
    var yScale = this.data.yScale;
    var zScale = this.data.zScale;

    var width = this.data.width;
    var height = this.data.height;
    var depth = this.data.depth;

    handleHeadMovement = (event) => {
      if (camera.getAttribute('position', 'x') > xShift + width/2 ||
          camera.getAttribute('position', 'y') > yShift + height/2 ||
          camera.getAttribute('position', 'z') > zShift + depth/2 ||
          camera.getAttribute('position', 'x') < xShift - width/2 ||
          camera.getAttribute('position', 'y') < yShift - height/2 ||
          camera.getAttribute('position', 'z') < zShift - depth/2)

      camera.setAttribute('position', 'x',xShift + xScale*event.x);
      camera.setAttribute('position', 'y', yShift + yScale*event.y);
      camera.setAttribute('position', 'z', zShift + zScale*event.z);
    }
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    document.removeEventListener('headtrackingEvent', handleHeadMovement)
  },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () {
    document.removeEventListener('headtrackingEvent', handleHeadMovement)
  },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () {
    document.addEventListener('headtrackingEvent', handleHeadMovement)
  }
});
