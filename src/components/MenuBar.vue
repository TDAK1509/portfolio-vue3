<template>
  <nav class="menu-bar">
    <ul class="menu-bar__list">
      <li>
        <RouterLink class="menu-bar__link" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="menu-bar__link" to="skills">Skills</RouterLink>
      </li>
      <li>
        <RouterLink class="menu-bar__link" to="experiences"
          >Experiences</RouterLink
        >
      </li>
      <li>
        <RouterLink class="menu-bar__link" to="portfolio">Portfolio</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-bar {
  padding: 0.5em;
  color: var(--color-black);
}
.menu-bar__list {
  display: flex;
  gap: 1.5em;
}
.menu-bar__link {
  letter-spacing: 1px;
}
.menu-bar__link:hover {
  text-decoration: underline;
}
.menu-bar__link.router-link-active {
  font-weight: 700;
  text-decoration: underline;
}
</style>
