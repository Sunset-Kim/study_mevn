document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 새로운 이미지 객체를 만든다
          const img = new Image();
          img.src = entry.target.dataset.src;
          img.onload = () => {
            entry.target.src = img.src;
            entry.target.classList.remove("lazy");
            observer.unobserve(entry.target);
          };
        }
      });
    },
    { threshold: 0.5 }
  );

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
