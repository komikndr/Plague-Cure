// This is global game object as singleton to control the main game cycle
import MainContainer from "./MainContainer";
import { Ticker } from "pixi.js";
import TestObject from "./GameObject/moving";
import AssetLoader from "./AssetLoader";

export default class Game {
  static instance;
  constructor(canvas) {
    if (Game.instance) {
      return Game.instance;
    }
    Game.instance = this;
    this.canvas = canvas;
    this.mainContainer = new MainContainer();
    this.assetLoader = new AssetLoader();
    this.testobj = new TestObject(0, 0);
    this.assetLoader.on("ready", () => {
      this.asset = this.assetLoader.asset;
      //Game Cycle Started
      console.log(this.asset)
      this.ticker = Ticker.shared.add(this.update, this);
    });
  }
  update(deltaTime) {
    this.testobj.update(deltaTime);
  }
}
