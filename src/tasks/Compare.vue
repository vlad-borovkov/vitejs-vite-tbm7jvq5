<script setup lang="js">
import { MIButton, MICard, MIInput, MITag } from 'mechtaui';
import { computed, reactive, ref } from 'vue';
// что вернут эти сравнения?
const comparesArr = reactive([
  { compare: 'console.log(0 == "0")', value: '', execute: () => 0 == '0' },
  { compare: 'console.log(0 === "0")', value: '', execute: () => 0 === '0' },
  { compare: 'console.log("" == false)', value: '', execute: () => '' == false },
  { compare: 'console.log("" === false)', value: '', execute: () => '' === false },
  { compare: 'console.log(0 || "0")', value: '', execute: () => 0 || '0' },
  { compare: 'console.log(0 && "0")', value: '', execute: () => 0 && '0' },
  { compare: 'console.log(false || "")', value: '', execute: () => false || '' },
  { compare: 'console.log(false && "")', value: '', execute: () => false && '' },
  { compare: 'console.log(undefined == null)', value: '', execute: () => undefined == null },
  { compare: 'console.log(undefined === null)', value: '', execute: () => undefined === null },
]);

const isValidAnswer = computed(() => {
  return comparesArr.every(item => item.value.length > 0);
});
const isShowRightAnswer = ref(false);

function handleCallFunc(func, isShow) {
  if (typeof func === 'function' && isShow)
    return func();
}
// checkComparisons();
</script>

<template>
  <div class="flex flex-col gap-4">
    <MITag tag-value="/tasks/Compare.vue" type="info" />
    <MICard>
      <h2 class="font-semibold mb-2">
        Compare
      </h2>
      <p>
        Что вернут эти сравнения? Ответы оставляй напротив каждого. По завершению, запустим код.
        <MITag type="outline" tag-value="checkComparisons()" />
      </p>

      <ol class="flex flex-col gap-4 mt-4">
        <li
          v-for="(item, index) in comparesArr"
          :key="item.compare"
          class="flex gap-2 w-1/2"
        >
          <span>{{ `${index + 1})` }}</span>
          <p class="font-bold text-md">
            {{ item.compare }}
          </p>
          <MIInput
            v-model="item.value"
            placeholder="Ответ"
            size="MD"
            wrapper-class="w-[20%]"
          />;
          <p>{{ handleCallFunc(item?.execute, isShowRightAnswer) }}</p>
          <p>{{ isShowRightAnswer ? typeof handleCallFunc(item?.execute, isShowRightAnswer) : '' }}</p>
        </li>
      </ol>
      <MIButton
        :disabled="!isValidAnswer"
        @click="isShowRightAnswer = !isShowRightAnswer"
      >
        Узнать ответы
      </MIButton>
    </MICard>
  </div>
</template>
