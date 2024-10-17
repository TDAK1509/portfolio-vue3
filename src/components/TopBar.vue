<template>
  <header class="header">
    <nav class="nav">
      <ul class="ul">
        <li class="li"><a class="a" href="#about">About</a></li>
        <li class="li"><a class="a" href="#skills">Skills</a></li>
        <li class="li"><a class="a" href="#projects">Projects</a></li>
      </ul>
    </nav>
  </header>
</template>

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
</style>
