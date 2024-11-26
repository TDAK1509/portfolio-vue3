<template>
  <div class="app">
    <MenuBar class="app__menu-bar" />

    <main class="main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import MenuBar from "@/components/MenuBar.vue";
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
  text-align: center;
  width: 100%;
  flex: 1;
}

@media only screen and (max-width: 600px) {
  .app {
    padding-bottom: 2em;
    padding-top: 5em;
    font-size: 11pt;
  }
  .app__menu-bar {
    left: auto;
    right: 0;
    transform: translateX(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
