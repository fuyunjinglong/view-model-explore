import { Application } from "pixi.js";
import { setupPlane } from "./Plane";
export * from "./Plane";

// 绘制游戏的属性
export const game = new Application({
  width: 1500,
  height: 650,
});

// 将pixi应用添加到body-dom上
document.body.appendChild(game.view);

// 这里类似一个胶水层：粘合UI层和业务逻辑层，但并没有提供单测
export function initGame(_plane, bullets) {
  const plane = setupPlane(_plane, {}, bullets);
  return { plane, bullets };
}
