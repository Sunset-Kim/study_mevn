document.addEventListener("DOMContentLoaded", () => {
  let imgArray = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  lazyLoad();
  document.addEventListener("scroll", lazyLoad);

  function lazyLoad() {
    if (!active) {
      active = true;

      setTimeout(() => {
        imgArray = imgArray
          .map((img) => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
              const IMG = new Image();
              IMG.onload = (e) => {
                img.src = e.path[0].currentSrc;
                img.classList.remove("lazy");
              };
              IMG.src = img.dataset.src;

              return null;
            } else {
              return img;
            }
          })
          .filter((img) => img);

        if (imgArray.length) {
          active = false;
        } else {
          document.removeEventListener("scroll", lazyLoad);
        }
      }, 200);
    }
  }
});
