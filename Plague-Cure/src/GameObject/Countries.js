import Game from "../Game";

import { Container, Sprite } from "pixi.js";

export default class Country extends Container {
  constructor() {
    super();
    this.game = new Game()
    this.mainContainer = this.game.mainContainer
    this.screenWidth = this.mainContainer.screen.width
    this.screenHeight = this.mainContainer.screen.height

    this.mainCanvas = this.mainContainer.mainCanvas
    this.mainCanvas.stage.addChild(this)

    this.countryContainer = new Container()
    this.countries = Object.keys(this.game.asset.CountrySprite)
    this.countries.forEach(key =>{
        let country = new Sprite(this.game.asset.CountrySprite[key])
        country.x = Math.floor(Math.random() * 640)
        country.y = Math.floor(Math.random() * 480)
        country.scale.x = 0.1
        country.scale.y = 0.1
        this.countryContainer.addChild(country)
    })

    this.addChild(this.countryContainer)
    console.log(this.countryContainer.children)
  }

  update(deltaTime) {
    this.countryContainer.x = this.countryContainer.x + 1 * deltaTime;

    if (this.countryContainer.x > this.screenWidth) {
      this.countryContainer.x = 0;
    }
  }
}
