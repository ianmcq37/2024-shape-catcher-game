//@ts-check

import { GoodCollectable } from "./collectables/collectable-good.js";
import { canvas } from "./common/canvas.js";
import { Player } from "./player.js";

export class GameManager {
    constructor() {
        this.players = [];
        this.collectables = [];
        this.enemies = [];

        this.isGameOver = false;

        this.goodSpawn = {
            lastSpawn: 0,
            nextSpawn: 0,
            next: function() {
                this.lastSpawn = 0;
                this.nextSpawn = random(5 * 1000, 7 * 1000);
            }
        }

        this.spawner(0);
    }

    initialize() {
        this.players = [];
        let p1 = new Player(canvas.width / 2, canvas.height / 2);
        p1.x -= p1.width / 2;
        p1.y -= p1.height / 2;
        
        this.players.push(p1);
    }

    update(elapsedTime) {
        this.spawner(elapsedTime);
        this.players.forEach(p => {
            p.update();
        })

        this.collectables.forEach(c => {
            c.update(elapsedTime);
        })
    }

    spawner(elapsedTime) {
        this.goodSpawn.lastSpawn += elapsedTime;

        if(this.goodSpawn.lastSpawn > this.goodSpawn.nextSpawn) {
            //spawn a good collectable
            const buffer = 50;
            const sx = random(buffer, canvas.width - buffer);
            const sy = random(buffer, canvas.height - buffer);
            const item = new GoodCollectable(sx, sy);
            this.collectables.push(item);
            //reset the spawn timer and get a new spawn time
            this.goodSpawn.next();
        }
    }

    draw() {
        this.players.forEach(p => {
            p.draw();
        })
    
        this.collectables.forEach(c => {
            c.draw();
        })
    }
}

function random(min, max) {
    let upper = max - min
    let r = Math.floor(Math.random() * upper);
    return r;
}
