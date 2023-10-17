// This is global game object as singleton to control the main game cycle
import Render from "./Render";
export default class Game {
  static instance;
  constructor(canvas) {
    if (Game.instance) {
      return Game.instance;
    }
    Game.instance = this;  
    this.canvas = canvas
    this.render = new Render()
  }
}
