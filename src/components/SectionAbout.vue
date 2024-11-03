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
        <SvgEmail />
      </a>

      <a
        class="social-media social-media--github"
        href="https://github.com/TDAK1509"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgGithub />
      </a>

      <a
        class="social-media social-media--instagram"
        href="https://www.instagram.com/tdak1509/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SvgInstagram />
      </a>
    </div>
  </section>
</template>

<script setup>
import SvgEmail from "@/components/svgs/SvgEmail.vue";
import SvgGithub from "@/components/svgs/SvgGithub.vue";
import SvgInstagram from "@/components/svgs/SvgInstagram.vue";
</script>

<style scoped>
.section {
  text-align: center;
  height: 90vh;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  margin-top: 8em;
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
  width: 32px;
  margin-left: 5px;
}
.social-media--instagram {
  width: 33px;
}

.social-media:hover {
  transform: scale(1.05);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
@media only screen and (max-width: 600px) {
  .h1 {
    font-size: 2rem;
  }
  .p {
    font-size: 0.9rem;
  }
  .avatar {
    margin-top: 45%;
  }
  .social-media {
    width: 30px;
  }
  .social-media--github {
    width: 27px;
  }
  .social-media--instagram {
    width: 28px;
  }
}
</style>
