import { Container, Sprite } from "pixi.js";
import Game from "../Game";

export default class Severity extends Container {
  constructor() {
    super();
    this.game = new Game();
    this.severityContainer = new Container();
    this.severities = Object.keys(this.game.asset.SeveritySprite);
    this.severities.forEach((key) => {
      let severity= new Sprite(this.game.asset.SeveritySprite[key]);
      severity.x = Math.floor(Math.random() * 640);
      severity.y = Math.floor(Math.random() * 480);
      this.severityContainer.addChild(severity);
    });
    
    this.addChild(this.severityContainer);
  }

  update(deltaTime) {
  }
}
