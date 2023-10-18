import Game from "./Game.js";
import { Application } from "pixi.js";
import Country from "./GameObject/Countries";
import Severity from "./GameObject/Severity";

import { canvasConfig } from "./Config.js";

export default class MainContainer {
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
    this.screen = this.mainCanvas.screen;
    this.mainStage = this.mainCanvas.stage
  }

  makeSprites() {
    this.country = new Country();
    this.mainStage.addChild(this.country)
    this.severity = new Severity();
    this.mainStage.addChild(this.severity)
  }

  update() {
    this.country.update();
    // this.severity.update();
  }
}
