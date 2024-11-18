<template>
  <div class="app">
    <MenuBar class="app__menu-bar" />

    <main class="main">
      <RouterView v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>

      <PreviousPageButton
        v-if="previousPage"
        class="app__previous-page-button"
        :to="previousPage"
      />
      <NextPageButton
        v-if="nextPage"
        class="app__next-page-button"
        :to="nextPage"
      />
    </main>
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
import NextPageButton from "@/components/NextPageButton.vue";
import PreviousPageButton from "@/components/PreviousPageButton.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const nextPage = computed(() => {
  if (route.name === "home") return "/skills";
  return null;
});

const previousPage = computed(() => {
  if (route.name === "skills") return "/";
  return null;
});
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.app__menu-bar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.main {
  background-color: var(--color-white);
  width: 90%;
  max-width: 1000px;
  height: 500px;
  padding: 2em;
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}
.app__next-page-button {
  position: absolute;
  bottom: 0.5em;
  right: 1em;
}
.previous-page-button {
  position: absolute;
  bottom: 0.5em;
  left: 1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
