import Konva from "konva";

export default class BooleanInput {

    x: number;
    y: number;
    state: boolean;

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }

    render() {
        const color = this.state ? 'red' : 'blue';

        const circle = new Konva.Circle({
            x: this.x,
            y: this.y,
            radius: 10,
            fill: color,
            stroke: 'black',
            strokeWidth: 2,
            draggable: true
        });

        circle.on('mouseover', () => {
            document.body.style.cursor = 'pointer';
        });

        circle.on('mouseout', () => {
            document.body.style.cursor = 'default';
        });

        return circle;
    }
}
