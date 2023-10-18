import Game from "../Game";

import { Container, Sprite, Ticker } from "pixi.js";

export default class TestObject extends Container {
  constructor(x, y) {
    super();
    this.game = new Game()
    this.renderC = this.game.render
    this.screenWidth = this.renderC.screen.width
    this.screenHeight = this.renderC.screen.height
    this.renderC.renderCanvas.stage.addChild(this)


    this.clampy = Sprite.from("vite.svg");

    this.clampy.x = x;
    this.clampy.y = y;
    this.addChild(this.clampy);

    Ticker.shared.add(this.update, this);
  }

  update(deltaTime) {
    this.clampy.x = this.clampy.x + this.clampyVelocity * deltaTime;

    if (this.clampy.x > this.screenWidth) {
      this.clampy.x = 0;
    }
  }
}
