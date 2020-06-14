import str from "./pikachuCSS";
import CSSPlayer from './CSSPlayer'
//面向对象的优化

const player = new CSSPlayer('.codeShow', '.drawStyle', str)

player.init()

// 眼睛跟随鼠标移动
const pikachu = document.querySelectorAll(".draw")[0];
pikachu.addEventListener("mousemove", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + 32;
    let y = eye.getBoundingClientRect().top + 32;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    // console.log(radian)
    let rot = radian * (180 / Math.PI) * -1 + 270;

    if (eye.getAttribute("class").indexOf("left") !== -1) {
      eye.style.transform = "translateX(-195%) rotate(" + rot + "deg)";
    } else if (eye.getAttribute("class").indexOf("right")) {
      eye.style.transform = "translateX(195%) rotate(" + rot + "deg)";
    }
  });
}
