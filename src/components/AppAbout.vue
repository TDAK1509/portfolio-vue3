<template>
  <section class="section">
    <p class="hey">Hey 👋 I'm</p>
    <img class="avatar" src="@/assets/avatar.png" />
    <h1 class="h1">Khuong Tran</h1>
    <p>TDD Web Developer</p>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
</style>
