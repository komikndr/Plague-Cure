import {Application, Graphics} from 'pixi.js'

const app = new Application();
document.body.appendChild(app.view);

const graphics = new Graphics();

// Rectangle
graphics.lineStyle(2, 0xFEEB77, 1);
graphics.beginFill(0x650A5A);
graphics.drawRect(200, 50, 100, 100);
graphics.endFill();

graphics.interactive = true
graphics.cursor = 'pointer'
graphics.on('pointerdown', onClick)

app.stage.addChild(graphics);

function onClick(){
    graphics.beginFill(0xFF0000); // ChangeF)
}