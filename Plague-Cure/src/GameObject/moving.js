import Game from "../Game";

import { Container, Sprite, Ticker } from "pixi.js";

export default class TestObject extends Container {
  constructor(x, y) {
    super();
    this.game = new Game()
    this.mainContainer = this.game.mainContainer
    this.screenWidth = this.mainContainer.screen.width
    this.screenHeight = this.mainContainer.screen.height

    this.mainCanvas = this.mainContainer.mainCanvas
    this.mainCanvas.stage.addChild(this)
    this.clampy = Sprite.from("vite.svg");
    this.clampyVelocity = 5

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
