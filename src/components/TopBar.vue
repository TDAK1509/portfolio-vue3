<template>
  <header class="header">
    <button v-if="shouldShowMenu" class="menu" @click="hideMenu">
      <img class="menu-img" src="@/assets/close.svg" />
    </button>

    <button v-else class="menu" @click="showMenu">
      <img class="menu-img" src="@/assets/burger.svg" />
    </button>

    <nav id="menu" class="nav">
      <ul class="ul">
        <li class="li"><a class="a" href="#about">About</a></li>
        <li class="li"><a class="a" href="#skills">Skills</a></li>
        <li class="li"><a class="a" href="#projects">Projects</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const shouldShowMenu = ref(false);

function showMenu() {
  shouldShowMenu.value = true;
  const menu = document.getElementById("menu");
  if (menu) menu.classList.add("show");
}

function hideMenu() {
  shouldShowMenu.value = false;
  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("show");
}
</script>

<style scoped>
.header {
  padding: 0.5em;
}
.ul {
  display: flex;
  justify-content: center;
  gap: 2em;
}
.li:hover > .a {
  border-bottom: 1px solid black;
  transition: border 0.1s ease-in;
}

.menu {
  display: none;
}

@media only screen and (max-width: 600px) {
  .header {
    padding: 0;
  }
  .menu {
    display: block;
    position: fixed;
    top: 1em;
    right: 2em;
    background: none;
    border: none;
    z-index: 1;
  }
  .menu-img {
    width: 40px;
    height: 40px;
  }
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(-150px);
  }
  .nav.show {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.25s;
    transition-timing-function: ease-in;
  }
  .nav.show > .ul {
    display: flex;
    flex-direction: column;
    background-color: #92400e;
    padding: 1em;
    color: var(--color-white);
  }
}
</style>
