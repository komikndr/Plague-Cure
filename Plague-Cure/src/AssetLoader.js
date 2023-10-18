import { Assets } from "pixi.js";
import { manifest } from "./AssetList";
import { EventEmitter } from "events";

export default class AssetLoader extends EventEmitter {
  constructor() {
    super();
    this.initializeLoader().then(() => {
      this.emit("ready");
    });
  }
  async initializeLoader() {
    await Assets.init({ manifest: manifest });
    const bundleIds = manifest.bundles.map((bundle) => bundle.name);
    this.asset = await Assets.loadBundle(
      bundleIds,
      this.downloadProgress.bind(this)
    );
  }

  downloadProgress(progressStatus) {
    console.log("load status:", progressStatus);
  }
}
