<script setup lang="ts">
import { MICard, MITag } from "mechtaui";
const items = [
  "apple", "banana", "apple", "orange", "grape", "banana", "melon",
  "cherry", "peach", "apple", "grape", "pear", "cherry", "mango",
  "plum", "peach", "mango", "kiwi", "watermelon", "grape"
];

// Должен отобразиться массив с уникальными элементами

</script>

<template>
  <div class="flex flex-col gap-4">
    <MITag tag-value="./tasks/UniqueElements.vue" type="info"></MITag>
    <MICard class="flex flex-col gap-4">
      <h2 class="font-semibold mb-2">Unique Elements</h2>
      <code>
        // Напиши функцию, которая будет возвращать массив с уникальными элементами <br/>
        // переданного массива<br/>
        <br/>
      // Должен отобразиться массив с уникальными элементами<br/>
          console.log(getUniqueElements(items));<br/>
      </code>
    </MICard>
  </div>
</template>