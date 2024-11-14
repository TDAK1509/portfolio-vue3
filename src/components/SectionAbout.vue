<template>
  <section class="about">
    <div class="image-container">
      <img class="avatar" src="@/assets/avatar.jpeg" alt="avatar" />
    </div>
    <div class="text-container">
      <h3 class="text-container__greeting">Hi, I'm Khuong Tran</h3>
      <h4 class="text-container__role">Lead engineer and web developer</h4>
      <p>
        I am obssessed with clean codes, CIs, and automated tasks for projects.
        I love building a system where any developers can easily contribute to
        the projects knowing that they are well protected from bugs.
      </p>
    </div>
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
  flex-basis: 40%;
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
  border: 1px solid var(--color-black);
}
.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.text-container__greeting {
  color: var(--color-black);
}
.text-container__role {
  color: var(--color-orange);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
