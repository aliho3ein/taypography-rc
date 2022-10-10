const area = document.querySelector(".hero");
const text = area.querySelector("h1");
let name = area.querySelector("h2");
let walkArea = 200; // PX

area.addEventListener("mousemove", function (event) {
  let { offsetWidth: w, offsetHeight: h } = area;

  let { offsetX: x, offsetY: y } = event;
  x += event.target.offsetLeft;
  y += event.target.offsetTop;

  const xWalk = Math.round((x / w) * walkArea - walkArea / 2);
  const yWalk = Math.round((y / h) * walkArea - walkArea / 2);

  console.log(x);

  text.style.textShadow = `
  ${xWalk * -1}px ${yWalk}px 7px rgba(239, 76, 0, 0.6),
  ${yWalk}px ${xWalk * -1}px 8px rgba(8, 240, 6, 0.6),
  ${xWalk}px ${yWalk * -1}px 4px rgba(00, 00, 255, 0.6),
  ${yWalk * -1}px ${xWalk}px 5px rgba(240, 240, 08, 0.6)`;

  name.style.opacity = y / w;
});

text.addEventListener("mousemove", function (a) {
  //   console.log(a.offsetX);
});
