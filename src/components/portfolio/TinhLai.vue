<template>
  <div class="portfolio-item">
    <div class="portfolio__link">
      <div>Website:</div>
      <a
        href="https://www.tinhlai.com/en"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://www.tinhlai.com/en
      </a>

      <div>Github repository:</div>
      <a
        href="https://github.com/TDAK1509/tinhlai"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://github.com/TDAK1509/tinhlai
      </a>
    </div>

    <div class="portfolio__description">
      <p>A multilingual tool for calculating compound interest.</p>
      <p>Technologies used: NuxtJS, VueJS, Tailwind, Netlify.</p>
    </div>

    <div class="portfolio__images">
      <div class="images__mobile">
        <figure class="portfolio_figure">
          <img
            class="portfolio_img"
            src="@/assets/portfolio/tinh-lai-mobile.png"
            alt="mobile"
          />
          <figcaption>Form</figcaption>
        </figure>

        <figure class="portfolio_figure">
          <img
            class="portfolio_img"
            src="@/assets/portfolio/tinh-lai-result-mobile.png"
            alt="mobile"
          />
          <figcaption>Result</figcaption>
        </figure>
      </div>

      <div class="images__desktop">
        <figure class="portfolio_figure">
          <img
            class="portfolio_img"
            src="@/assets/portfolio/tinh-lai-desktop.png"
            alt="desktop"
          />
          <figcaption>Form</figcaption>
        </figure>

        <figure class="portfolio_figure">
          <img
            class="portfolio_img"
            src="@/assets/portfolio/tinh-lai-desktop.png"
            alt="desktop"
          />
          <figcaption>Result</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio_figure {
  display: inline-block;
  width: 100%;
  height: 100px;
}

.portfolio_img {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
