<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted, ref } from 'vue';
import { MICard, MITag, MIButton } from "mechtaui";

// что выведется в консоли при первом рендеринге?
// что выведется в консоли после нажатия на кнопку "Нажми меня"?

// onUpdated(() => console.log(6))

// onMounted(() => console.log(2))

// onBeforeMount(() => console.log(3))

// onBeforeUnmount(() => console.log(1))

// onBeforeUpdate(() => console.log(5))

// onUnmounted(() => console.log(4))

// console.log('test')

const count = ref(1)

</script>

<template>

    <div class="flex flex-col gap-4">
        <MITag tag-value="./tasks/VueLifeCycle.vue" type="info"></MITag>
        <MICard class="flex flex-col gap-4">
            <h2 class="font-semibold mb-2">Vue Lifecycle Hooks</h2>
            <code>
             // что выведется в консоли при первом рендеринге? <br/>
             // что выведется в консоли после нажатия на кнопку "Нажми меня"? <br/>
        <br/>

      </code>
        </MICard>
        <div>
            {{ count }}
            <MIButton variant="primary" @click="count += 1">Нажми меня</MIButton>
        </div>
    </div>

</template>
