//@ts-check
import { CollectableItem } from "./collectable-base.js";

export class GoodCollectable extends CollectableItem {
    constructor(x = 0, y = 0) {
        super(x, y);
        
        this.width = 20;
        this.height = 20;

        this.despawnTime = 10 * 1000;
        this.spawnTime = 5 * 1000;

        this.lastAlphaTime = 0;
        this.alpha = 0;

        this.lifetime = 0;

        this.color "hsla(150, 100%, 50%, 0)";
    };

    update(elapsedTime) {
        this.lifetime += elapsedTime;

        if(this.lifetime < this.spawnTime) {
            this.alpha = Math.floor ((this.lifetime / this.spawnTime) * 100);
            this.color = `hsla(150, 100%, 50%, ${this.alpha}%`;
        };
    };
};