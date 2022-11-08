import * as PIXI from "pixi.js";
import { Assets, loadDDS } from "pixi.js";
import { settings } from "./settings";

const canvasWidth = 960;
const canvasHeight = 600;

function createBackground(texture: PIXI.Texture) {
	const background = new PIXI.Sprite(texture)
	background.width = settings.canvasWidth;
	background.height = settings.canvasHeight;

	return background;
}

async function init() {
	console.log('DDS loader enabled', Assets.loader.parsers.includes(loadDDS));

	Assets.add('ddsAsset', '/assets/sample.dds')

	const assets = await Assets.load(['ddsAsset']);

	console.log('assets', assets)
	console.log('parsers', Assets.loader.parsers)


	const app = initializeApp();
	const background = createBackground(assets.ddsAsset);

	app.stage.addChild(background);
}

function initializeApp() {
	const app = new PIXI.Application({
		width: canvasWidth,
		height: canvasHeight,
	});
	const view = app.view as any;
	document.body.appendChild(view);
	view.classList.add("main-canvas");
	return app;
}

init();
