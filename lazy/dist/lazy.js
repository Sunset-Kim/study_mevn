document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  console.log(lazyImages);

  const lazyLoad = function () {
    if (active === false) {
      active = true;
      setTimeout(() => {
        lazyImages = lazyImages
          .map((img) => {
            if (
              img.getBoundingClientRect().top >= window.innerHeight &&
              window.getComputedStyle(img).display !== "none"
            ) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              return null;
            } else return img;
          })
          .filter((img) => img);

        console.log(lazyImages);

        if (!lazyImages.length) {
          document.removeEventListener("scroll", lazyLoad);
        } else active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
});
