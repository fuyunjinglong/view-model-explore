import { Application } from "pixi.js";

// 绘制游戏的属性
export const game = new Application({
  width: 1500,
  height: 650,
});

// 将pixi应用添加到body-dom上
document.body.appendChild(game.view);
