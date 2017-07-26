/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Head Tracker Controls component for A-Frame.
 */
AFRAME.registerComponent('head-tracker-controls', {
  schema: {},

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () { },

  handleHeadMovement: function(event) {
    var camera = document.querySelector('a-camera')

    camera.setAttribute('position', 'x', -0.1*event.x)
    camera.setAttribute('position', 'y', 1.6 + 0.1*event.y)
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
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () {
    document.removeEventListener('headtrackingEvent', this.handleHeadMovement)
  },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () {
    document.addEventListener('headtrackingEvent', this.handleHeadMovement)
  }
});
