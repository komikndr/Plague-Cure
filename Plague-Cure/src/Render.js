import Game from "./Game.js";
import { Application, Container, Sprite } from "pixi.js";

import { canvasConfig } from "./Config.js";

export default class Render {
  constructor() {
    this.game = new Game();
    this.canvas = this.game.canvas;
    this.renderCanvas = new Application({
      view: this.canvas,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      background: canvasConfig.BGColor,
      width: canvasConfig.width,
      height: canvasConfig.height,
    });
  }
}
