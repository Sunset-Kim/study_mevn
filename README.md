# Frontend 기본기

## lazy loading

### 실행방법

```
cd lazy
node index.js
```

http://127.0.0.1:12010/ 접속

### 코드설명

1.intersection Observer
[CanIuse-intersection Observer](https://caniuse.com/?search=intersection)

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 새로운 이미지 객체를 만든다
        const img = new Image();
        img.src = entry.target.dataset.src;
        // 로딩이 완료되면 img src를 바꾸고, observer를 해제함
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
```

2. pure - scroll event

```js
function lazyLoad() {
  // 쓰로틀링 처리
  if (!active) {
    active = true;

    // 200ms가 지난후에 로직을 실행
    setTimeout(() => {
      imgArray = imgArray
        .map((img) => {
          // img가 innerHeight 보다 작을때 화면에 들어온것으로 판별
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

      // img array의 길이(lazy가 완료된)가 0이면 scroll 이벤트를 해제
      if (imgArray.length) {
        active = false;
      } else {
        document.removeEventListener("scroll", lazyLoad);
      }
    }, 200);
  }
}
```
