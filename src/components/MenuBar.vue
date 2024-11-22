<template>
  <nav class="menu-bar">
    <button class="menu-bar__burger" @click="toggleMenu">
      <SvgBurger v-show="!shouldShowMenu" width="25" height="25" />
      <SvgClose v-show="shouldShowMenu" width="25" height="25" />
    </button>
    <ul ref="menu" class="menu-bar__list">
      <li
        v-for="{ to, label } in menuLinks"
        :key="label"
        class="menu-bar__list-item"
      >
        <RouterLink
          class="menu-bar__link"
          :to="to"
          v-text="label"
          @click="closeMenu"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import SvgBurger from "@/components/svgs/SvgBurger.vue";
import SvgClose from "@/components/svgs/SvgClose.vue";
import { ref, watch } from "vue";

const menuLinks = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "skills",
    label: "Skills",
  },
  {
    to: "experiences",
    label: "Experiences",
  },
  {
    to: "portfolio",
    label: "Portfolio",
  },
];

const menu = ref(null);
const shouldShowMenu = ref(false);

function toggleMenu() {
  if (!menu.value) return;
  menu.value.classList.toggle("active");
  shouldShowMenu.value = !shouldShowMenu.value;
}

function closeMenu() {
  if (!menu.value) return;
  menu.value.classList.remove("active");
  shouldShowMenu.value = false;
}
</script>

<style scoped>
.menu-bar {
  padding: 0.5em;
  color: var(--color-black);
  position: relative;
}
.menu-bar__list {
  display: flex;
  gap: 1.5em;
}
.menu-bar__link {
  letter-spacing: 1px;
  color: var(--color-primary);
}
.menu-bar__link:hover {
  text-decoration: underline;
}
.menu-bar__link.router-link-active {
  font-weight: 700;
  text-decoration: underline;
}
.menu-bar__burger {
  display: none;
}
@media only screen and (max-width: 600px) {
  .menu-bar {
    padding: 0;
    z-index: var(--z-index-menu);
  }
  .menu-bar__burger {
    display: block;
    position: absolute;
    top: 1em;
    right: 1em;
    background: none;
    border: none;
    color: inherit;
  }
  .menu-bar__list {
    visibility: hidden;
    flex-direction: column;
    gap: 0;
    background-color: var(--color-black);
    border: 1px solid var(--color-black);
    color: var(--color-white);
    position: absolute;
    top: 3em;
    right: 1em;
  }
  .menu-bar__list.active {
    visibility: visible;
  }
  .menu-bar__link {
    padding: 1em 2em;
    display: block;
  }
  .menu-bar__list-item:not(:last-child) > .menu-bar__link {
    border-bottom: 1px solid var(--color-white);
  }
  .menu-bar__link:hover {
    text-decoration: none;
  }
  .menu-bar__link.router-link-active {
    font-weight: 700;
    text-decoration: none;
  }
  .menu-bar__link:hover,
  .menu-bar__link.router-link-active {
    background-color: var(--color-white);
    color: var(--color-black);
  }
}
</style>
