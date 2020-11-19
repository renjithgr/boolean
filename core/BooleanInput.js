import Konva from "konva";

export default class BooleanInput {

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }

    render() {
        return new Konva.Circle({
            this.x, this.y,
            radius: 70,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            draggable: true
        });
    }
}
