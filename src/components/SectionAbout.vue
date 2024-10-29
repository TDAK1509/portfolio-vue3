<template>
  <section class="section">
    <img class="avatar" src="@/assets/avatar.png" />
    <h1 class="h1">Khuong Tran</h1>
    <p class="p">TDD Web Developer</p>

    <div class="footer">
      <a
        class="social-media"
        href="mailto:dbcgdhh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/email.svg" />
      </a>

      <a
        class="social-media social-media--github"
        href="https://github.com/TDAK1509"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/github2.svg" />
      </a>

      <a
        class="social-media"
        href="https://www.instagram.com/tdak1509/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/instagram.svg" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 20%;
  margin-bottom: 2em;
}
.h1 {
  margin-bottom: 0;
}
.footer {
  margin-top: 1em;
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
}
.social-media {
  width: 35px;
}
.social-media--github {
  width: 30px;
  margin-left: 5px;
}

.social-media:hover {
  transform: scale(1.05);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
@media only screen and (max-width: 600px) {
  .p {
    font-size: 0.9rem;
  }
  .avatar {
    margin-top: 33%;
  }
  .social-media {
    width: 30px;
  }
  .social-media--github {
    width: 25px;
  }
}
</style>
