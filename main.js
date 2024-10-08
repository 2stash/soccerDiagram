let canvas;
let ctx;
let savedImageData;
let dragging = false;
let strokeColor = 'black';
let fillColor = 'black';
let line_Width = 2;
let polygonSides = 6;
let currentTool = 'brush';
let canvasWidth = 600;
let canvasHeight = 600;

class ShapeBoundingBox {
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }
}

class MouseDownPos {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PolygonPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let shapeBoundingBox = new ShapeBoundingBox(0, 0, 0, 0);
let mouseDown = new MouseDownPos(0, 0);
let loc = new Location(0, 0);

document.addEventListener('DOMContentLoaded', setupCanvas);

function setupCanvas() {
  canvas = document.getElementById('my-canvas');
  ctx = canvas.getContext('2d');
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = line_Width;
  canvas.addEventListener('mousedown', ReactToMouseDown);
  canvas.addEventListener('mouseup', ReactToMouseUp);
}
