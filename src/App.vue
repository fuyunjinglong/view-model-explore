<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import { reactive } from "vue";
import { initGame } from "./game";

// 优化代码小技巧：考虑到子弹和我方飞机有关联，所以Plane组件中的变量通过外部变量传入
const { plane, bullets } = initGame(reactive({}), reactive([]));
</script>

// 这里有个小技巧:Bullet可以不用声明x,y坐标,pixi天然支持
<template>
  <Container>
    <Plane :plane="plane"></Plane>
    <Bullet v-for="bullet in bullets" :x="bullet.x" :y="bullet.y"></Bullet>
  </Container>
</template>
