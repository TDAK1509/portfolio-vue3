<template>
  <header class="header">
    <button v-if="shouldShowMenu" class="menu" @click="hideMenu">
      <img class="menu-img" src="@/assets/close.svg" />
    </button>

    <button v-else class="menu" @click="showMenu">
      <img class="menu-img" src="@/assets/burger.svg" />
    </button>

    <nav id="menu" class="nav" @click="hideMenu">
      <ul class="ul">
        <li class="li" data-menu-observer="about">
          <a class="a" href="#about">About</a>
        </li>
        <li class="li" data-menu-observer="services">
          <a class="a" href="#services">Services</a>
        </li>
        <li class="li" data-menu-observer="skills">
          <a class="a" href="#skills">Skills</a>
        </li>
        <li class="li" data-menu-observer="coding-style">
          <a class="a" href="#coding-style">Coding style</a>
        </li>
        <li class="li" data-menu-observer="experience">
          <a class="a" href="#experience">Experience</a>
        </li>
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
  z-index: var(--z-index-top-bar);
}
.nav {
  background-color: #92400e;
  color: var(--color-white);
  width: 100%;
}
@media only screen and (min-width: 601px) {
  .header {
    position: sticky;
    top: 0;
    left: 0;
  }
  .nav {
    height: 60px;
  }
  .ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    height: 100%;
  }

  .li.active {
    position: relative;
  }
  .a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .a::before {
    position: absolute;
    bottom: -3px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--color-white);
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }
  .li:hover .a::before {
    opacity: 1;
  }
  .li.active > .a::before {
    opacity: 1;
  }
}

.menu {
  display: none;
}

@media only screen and (max-width: 600px) {
  .header {
    padding: 0;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 1em;
    right: 2em;
    background: var(--color-bg-lighter);
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    padding: 0.5em;
    cursor: pointer;
    z-index: var(--z-index-floating-button);
    box-shadow: 2px 3px 5px 1px rgba(0, 0, 0, 0.3);
  }
  .menu-img {
    width: 40px;
    height: 40px;
  }
  .nav {
    position: absolute;
    top: 0;
    left: 0;
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
    gap: 0;
  }
  .nav.show .li {
    padding: 1em;
  }
  .nav.show .li.active {
    background-color: var(--color-bg-lighter);
    color: var(--color-primary);
  }
}
</style>
