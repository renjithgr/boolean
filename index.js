import Konva from 'konva';

var stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

// add canvas element
var layer = new Konva.Layer();
stage.add(layer);

// create shape
var box = new Konva.Rect({
    x: 50,
    y: 50,
    width: 70,
    height: 50,
    fill: 'green',
    stroke: 'green',
    strokeWidth: 1,
    draggable: false
});

var text = new Konva.Text({
  x: 50,
  y: 50,
  text: 'AND',
  fontSize: 15,
  fontFamily: 'Calibri',
  fill: 'black'
});

let group = new Konva.Group({
  draggable: true
});
group.add(box, text);

layer.add(group);

layer.draw();

// add cursor styling
group.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
group.on('mouseout', function() {
    document.body.style.cursor = 'default';
});
