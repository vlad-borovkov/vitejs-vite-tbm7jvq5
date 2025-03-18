<template>
  <div class="h-[100vh] w-full grid grid-template-area">
    <MISidebar v-model:expanded="isExpanded" title="Mechta Live" :translations="{}" :nav-list />
    <main class="grid-area-main flex h-full w-full items-start">
      <section class="w-[98%] h-full overflow-y-none" :style="{ margin: '20px' }">
        <RouterView v-slot="{ Component }" class="h-full">
          <Transition mode="out-in" name="fade">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { PhScales, PhClockClockwise, PhFile, PhFileVue, PhFunction, PhCarSimple, PhDotsThree, PhPuzzlePiece, PhLink } from "@phosphor-icons/vue";
import { INavMenuItem, MISidebar } from "mechtaui";
import { ref } from "vue";

const isExpanded = ref(false);

const navList = [
  {
    label: "Compare Task",
    route: {
      name: "Compare",
    },
    iconSrc: PhScales,
  },
  {
    label: "Vue Lifecycle",
    route: {
      name: "VueLifeCycle",
    },
    iconSrc: PhFileVue,
  },
  {
    label: "Rest and Spread",
    route: {
      name: "RestSpread",
    },
    iconSrc: PhDotsThree,
  },
  {
    label: "Functions",
    route: {
      name: "Fns",
    },
    iconSrc: PhFunction,
  },
  {
    label: "Mapping",
    route: {
      name: "Mapping",
    },
    iconSrc: PhCarSimple,
  },
  {
    label: "Event Loop",
    route: {
      name: "EventLoop",
    },
    iconSrc: PhClockClockwise,
  },
  {
    label: "Unique elements",
    route: {
      name: "Unique",
    },
    iconSrc: PhPuzzlePiece,
  },
  {
    label: "Scoped Slots",
    route: {
      name: "ScopedSlots",
    },
    iconSrc: PhFile,
  },
  {
    label: "Chains",
    route: {
      name: "FunctionalChain",
    },
    iconSrc: PhLink,
  },

] as INavMenuItem[];
</script>

<style>
.grid-template-area {
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: min-content auto;
  grid-template-rows: 62px 1fr;
}

.grid-area-header {
  grid-area: header;
}

.grid-area-sidebar {
  grid-area: sidebar;
}

.grid-area-main {
  grid-area: main;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
