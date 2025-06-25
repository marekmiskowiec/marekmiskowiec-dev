document.addEventListener("DOMContentLoaded", () => {
  const observers = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animuje tylko raz
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observers.forEach((el) => observer.observe(el));
});
