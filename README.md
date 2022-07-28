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
          여;
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

# functional Programing

## currying

- 주어진 매개변수보다 적은 수의 매개변수를 넘겨주어 매개변수가 완전히 채워지지 않은 함수가 실행은 되지 않고 넘겨져 마지막 매개변수가 채워지면 그 때 함수를 실행하는 기법
- 커링이 가능한 이유 : 외부함수의 컨텍스트가 소멸되어도 내부함수가 외부함수의 실행환경을 참조할 수 있는 클로저

### Ramda를 이용한 커링

```bash
npm install ramda
```

```js
const R = require("ramda");
const addFourNumber = (a, b, c, d) => a + b + c + d;
const curriedAdd = R.curry(addFourNumber);
const f = curriedAdd(1, 2);
const newF = f(3);
console.log(newF(4)); // 10
```
