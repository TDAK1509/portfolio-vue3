<template>
  <section class="about">
    <div class="image-container">
      <img class="avatar" src="@/assets/avatar.jpeg" alt="avatar" />
    </div>
    <div class="text-container"></div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--color-white);
  width: 90%;
  max-width: 900px;
  height: 500px;
  display: flex;
}
.image-container {
  flex: 1;
  position: relative;
}
.avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 50%;
  border: 1px solid var(--color-primary);
}
.text-container {
  flex: 1;
}
</style>
