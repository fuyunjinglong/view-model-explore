// import { createApp } from 'vue'
// import './style.css'
import App from "./App.vue";

// createApp(App).mount('#app')
import { Application, Container, Text } from "pixi.js";

const app = new Application();
await app.init({
  width: 1700,
  height: 650,
});
document.body.appendChild(app.canvas);

import { createRenderer } from "vue";

const render = createRenderer<Container, Container>({
  createElement(type) {
    // 创建容器
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      default:
        throw new Error(`type不存在${type}`);
        break;
    }
    return element;
  },
  patchProp() {
    // 更新属性
  },
  insert(el, parent) {
    // 插入节点
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    // 移除节点
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    // 创建文本
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    // 返回兄弟节点
    return null;
  },
});

render.createApp(App).mount(game.stage);
