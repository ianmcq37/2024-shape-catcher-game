//@ts-check
import { canvas, ctx } from "./common/canvas.js";
import { Player } from "./player.js";
import { GoodCollectable } from "./collectables/collectable-good.js";

let player = new Player();

let item1 = new GoodCollectable(canvas.width / 2, canvas.height / 2);

let lastTimestamp = 0;

function gameLoop(timestamp) {
	let elapsedTime = timestamp - lastTimestamp;
	lastTimestamp = timestamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	player.update();
	player.draw();

	item1.update(elapsedTime);
	item1.draw();

	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);