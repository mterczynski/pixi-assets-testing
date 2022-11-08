import * as PIXI from "pixi.js";
import { settings } from "./settings";

const canvasWidth = 960;
const canvasHeight = 600;

function createBackground() {
	const background = PIXI.Sprite.from("/assets/metal-texture.webp");
	background.width = settings.canvasWidth;
	background.height = settings.canvasHeight;

	return background;
}

async function init() {
	const app = initializeApp();
	const background = createBackground();

	app.stage.addChild(background);
}

function initializeApp() {
	const app = new PIXI.Application({
		width: canvasWidth,
		height: canvasHeight,
	});
	document.body.appendChild(app.view);
	app.view.classList.add("main-canvas");
	return app;
}

init();
