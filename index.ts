import Konva from 'konva';
import Box from './Box';

const stage = new Konva.Stage({
    container: 'container',
    height: window.innerHeight,
    width: window.innerWidth
});

const layer = new Konva.Layer();

layer.add(Box);

stage.add(layer);
layer.draw();


