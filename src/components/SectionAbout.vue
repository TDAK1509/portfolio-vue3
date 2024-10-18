<template>
  <section class="section">
    <p class="hey">Hey 👋 I'm</p>
    <img class="avatar" src="@/assets/avatar.png" />
    <h1 class="h1">Khuong Tran</h1>
    <p>TDD Web Developer</p>

    <div class="footer">
      <a
        class="social-media"
        href="https://github.com/TDAK1509"
        target="_blank"
      >
        <SvgGithub />
      </a>

      <a
        class="social-media"
        href="https://www.instagram.com/tdak1509/"
        target="_blank"
      >
        <SvgInstagram />
      </a>
    </div>
  </section>
</template>

<script setup>
import SvgGithub from "./SvgGithub.vue";
import SvgInstagram from "./SvgInstagram.vue";
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 2em;
  margin-bottom: 2em;
}
.hey {
  font-size: 2rem;
}
.footer {
  margin-top: 2em;
  display: flex;
  gap: 0.7em;
  align-items: center;
  justify-content: center;
}
.social-media {
  width: 1.75rem;
}

.social-media:hover {
  transform: scale(1.05);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
