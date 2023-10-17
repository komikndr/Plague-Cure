// This is global game object as singleton to control the main game cycle
import MainContainer from "./MainContainer";

import TestObject from "./GameObject/moving";


export default class Game {
  static instance;
  constructor(canvas) {
    if (Game.instance) {
      return Game.instance;
    }
    Game.instance = this;  
    this.canvas = canvas
    this.mainContainer = new MainContainer()
    this.testobj = new TestObject(0,0)
  }
}
