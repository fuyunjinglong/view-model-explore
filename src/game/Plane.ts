import Bullet from "./Bullet";

export interface Plane {
  x: number;
  y: number;
  moveDown: () => void;
  moveUp: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  attack: () => void;
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5, // 移动速度
};

// 这里没有封装为Class类，因为我方飞机是单例，且数据需要响应式
export function setupPlane(plane, options?, bullets: Bullet[] = []): Plane {
  plane.bullets = bullets;
  // 设置默认值，主动暴露初始化环境，可读性高，将业务逻辑与UI逻辑拆分开，方便vitest测试代码
  Object.assign(plane, defaultOptions, options);

  plane.moveDown = function moveDown() {
    plane.y += plane.speed;
  };
  plane.moveUp = function moveDown() {
    plane.y -= plane.speed;
  };
  plane.moveLeft = function moveDown() {
    plane.x -= plane.speed;
  };
  plane.moveRight = function moveDown() {
    plane.x += plane.speed;
  };

  plane.attack = () => {
    const bullet = new Bullet();
    // 子弹跟随飞机位置
    bullet.x = plane.x + 40;
    bullet.y = plane.y;
    bullets.push(bullet);
  };
  return plane;
}
