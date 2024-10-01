//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 75;
        this.height = 25;

        this.speed = 1;

        this.keyBindings = {
            up: "ArrowUp",
            down: "ArrowDown",
            right: "ArrowRight",
            left: "ArrowLeft",
        };

        this.movement = {
            up: false,
            down: false,
            right: false,
            left: false,
        };

        this.wireUpKeyboard();
    };

    wireUpKeyboard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up:
                    this.movement.up = true;
                    break;
                case this.keyBindings.down:
                    this.movement.down = true;
                    break;
                case this.keyBindings.right:
                    this.movement.right = true;
                    break;
                case this.keyBindings.left:
                    this.movement.left = true;
                    break;
            };
        });

        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up:
                    this.movement.up = false;
                    break;
                case this.keyBindings.down:
                    this.movement.down = false;
                    break;
                case this.keyBindings.right:
                    this.movement.right = false;
                    break;
                case this.keyBindings.left:
                    this.movement.left = false;
                    break;
            };
        });
    };

    update() {
        let directionX = 0;
        let directionY = 0;
        
        if(this.movement.up) {
            directionY = -1;
        };
        if(this.movement.down) {
            directionY = 1;
        };
        if(this.movement.down && this.movement.down) {
            directionY = 0;
        };
        if(this.movement.right) {
            directionX = 1;
        };
        if(this.movement.left) {
            directionX = -1;
        };
        if(this.movement.right && this.movement.left) {
            directionX = 0;
        };

        this.x += this.speed * directionX;
        this.y += this.speed * directionY;
    };

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};