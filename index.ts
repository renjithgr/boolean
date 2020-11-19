import Konva from 'konva';
import Box from './Box';
import BooleanInput from "./core/BooleanInput";

const stage = new Konva.Stage({
    container: 'container',
    height: window.innerHeight,
    width: window.innerWidth
});

const layer = new Konva.Layer();
const booleanInput = new BooleanInput(500, 500, false);

layer.add(Box);
layer.add(booleanInput.render());

stage.add(layer);
layer.draw();


