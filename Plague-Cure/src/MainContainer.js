import Game from "./Game.js";
import { Application, Container, Sprite } from "pixi.js";

import { canvasConfig } from "./Config.js";

export default class MainContainer{
  constructor() {
    this.game = new Game();
    this.canvas = this.game.canvas;
    this.mainCanvas = new Application({
      view: this.canvas,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      background: canvasConfig.BGColor,
      width: canvasConfig.width,
      height: canvasConfig.height,
    });
    this.screen = this.mainCanvas.screen
  }
}


