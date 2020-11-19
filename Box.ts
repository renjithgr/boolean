import Konva from 'konva';

const box = new Konva.Rect({
    x: 50,
    y: 50,
    width: 70,
    height: 50,
    fill: 'blue',
    stroke: 'green',
    strokeWidth: 1,
    draggable: false
});

const text = new Konva.Text({
    x: 50,
    y: 50,
    text: 'AND',
    fontSize: 15,
    fontFamily: 'Calibri',
    fill: 'black'
});

const group = new Konva.Group({
    draggable: true
});

group.add(box, text);

// add cursor styling
group.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
group.on('mouseout', function() {
    document.body.style.cursor = 'default';
});

export default group;
