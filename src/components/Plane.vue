<script setup lang="ts">
import { reactive } from "vue";
import planeImg from "../assets/img/myPlane.png";
import { setupPlane } from "../game/Plane";

// 优化代码小技巧：飞机按下开火键需要发射子弹，所以子弹的初始化位置等与飞机有关。既然耦合，所以plane变量优化到外部
const plane = setupPlane(reactive({}));
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      plane.moveDown();
      break;
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowLeft":
      plane.moveLeft();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    default:
      break;
  }
});
</script>

<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>
