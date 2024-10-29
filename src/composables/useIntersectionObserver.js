import { onMounted, onBeforeUnmount } from "vue";

export function useIntersectionObserver(targetClassName) {
  let observer;

  onMounted(() => {
    const sections = document.querySelectorAll("." + targetClassName);
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
          else entry.target.classList.remove("show");
        });
      },
      {
        threshold: 0.1,
      }
    );
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
}
