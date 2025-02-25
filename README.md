# view-model-explore

实现 UI 层和业务逻辑分离层架构分离，为了测试重度前端项目
采用 Functional Core, Imperative Shell 模式实现逻辑分层
技术栈：vue3+TS+vitest+custom render+pixi.js
pixi.js:基于 canvas 的游戏引擎框架
custom render：vue 提供的高阶自定义渲染 API

任务

1.基于 custom render api 实现把视图渲染到 canvas
1.1 引入并 init pixi.js
1.2 重写 renderer{({}) 渲染接口
