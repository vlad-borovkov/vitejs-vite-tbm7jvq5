<script setup lang="ts">
import { MICard, MITag } from 'mechtaui';

// Что выведется в консоль при вызове этой функции?

eventLoopQueryLog()

function eventLoopQueryLog() {
console.log('Start'); 

setTimeout(() => {
  console.log('setTimeout');

  Promise.resolve().then(() => {
    console.log('Promise 1'); 
  }); //3
}, 0);  //6

Promise.resolve().then(() => {
  console.log('Promise 2');
}); //4

setTimeout(() => {
  console.log('setTimeout 2');
}, 0); //7

Promise.resolve().then(() => {
  console.log('Promise 3');
}); //5

console.log('End');
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <MITag tag-value="/tasks/EventLoop.vue" type="positive" />
    <MICard>
      <h3 class="font-semibold">Event Loop task</h3>

      <p class="mb-2">
        Что и в каком порядке выведется в консоль при вызове функции
      </p>
      <MITag tag-value="eventLoopQueryLog()"  type="info"/>
    </MICard>
  </div>
</template>
