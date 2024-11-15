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

      <a href="mailto:dbcgdhh@gmail.com" class="email">
        <span>Send me an email</span>
        <SvgEmail class="email-icon" />
      </a>

      <div class="social-media">
        <a
          class="social-link"
          href="https://github.com/TDAK1509"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgGithub class="social-icon" />
        </a>
        <a
          class="social-link"
          href="https://www.facebook.com/TDAK1509"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgFacebook class="social-icon" />
        </a>
        <a
          class="social-link"
          href="https://www.instagram.com/tdak1509/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SvgInstagram class="social-icon" />
        </a>
      </div>
    </div>
    <NextPageButton to="/skills" />
  </section>
</template>

<script setup>
import SvgEmail from "@/components/svgs/SvgEmail.vue";
import SvgGithub from "@/components/svgs/SvgGithub.vue";
import SvgFacebook from "@/components/svgs/SvgFacebook.vue";
import SvgInstagram from "@/components/svgs/SvgInstagram.vue";
import NextPageButton from "@/components/NextPageButton.vue";
</script>

<style scoped>
.about {
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.image-container {
  flex-basis: 40%;
  position: relative;
  text-align: left;
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
  border: 1px solid var(--color-grey);
}
.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
}
.text-container__greeting {
  color: var(--color-black);
}
.text-container__role {
  color: var(--color-orange);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.email {
  background-color: var(--color-orange);
  color: var(--color-white);
  padding: 0.4em 3em;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  margin-top: 2.25em;
  font-size: 0.9rem;
  font-weight: 700;
  transition: transform 0.15s linear;
}
.email:hover {
  transform: scale(1.05);
  transition: transform 0.2s linear;
}
.email-icon {
  width: 20px;
  height: 20px;
}
.social-media {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1.25em;
}
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid var(--color-grey-light);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-link:hover {
  border-color: var(--color-grey);
  transition: border 0.2s linear;
}
.social-icon {
  width: 60%;
  height: 60%;
}
</style>
