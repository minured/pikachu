const pikachuCSS = `.draw * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
.draw *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.draw {
    background: rgb(255, 230, 0);
}
.nose {
    position: relative;
    width: 0px;
    height: 0px;
    transform: translateX(-50%);
    z-index: 5;
    left: 50%;
    top: 110px;  
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 250ms linear infinite; 
}
.nose .yuan {
    border:1px solid black;
    background: #000;
    width: 20px;
    height: 6px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -10px;
    border-top-left-radius: 20px 10px; 
    border-top-right-radius: 20px 10px;
}
.nose .san {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left:50%;
    margin-left: -10px;  
    bottom: 0;
    
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.eye {
    border: 3px solid black;
    background: rgb(46, 46, 46);
    width: 63px;
    height: 63px;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -30px;
    border-radius: 50%;
}
.eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
}
.eye.left {
    transform: translateX(-195%);

}
.eye.right {
    transform: translateX(195%)
}
.face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -45px;
    border-radius: 50%;
    background: rgb(255, 0, 0);
}
.face.left {
    transform: translateX(190%);
}
.face.right {
    transform: translateX(-190%);
}
.face img {
    /* border: 1px solid black; */
    position: absolute;
    left: 50%;
    top: 50%;
}
.face.right img {
    transform: rotateY(180deg);
    transform-origin: 0;
}

.mouth {
    /* border: 1px solid black; */
    width: 200px;
    height: 190px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 125px;
}
.mouth .up .lip {
    border: 3px solid black;
    background:rgb(255, 230, 0);
    width: 100px;
    height: 28px;
    border-color: transparent transparent black transparent;
    position: absolute;
    z-index: 2;
}
.mouth .up .lip.left {
  /* border-radius: 0 0 0 30px; */
  border-bottom-left-radius: 50px 28px;
  transform: rotate(-20deg);
  left: -1px;

}
.mouth .up .lip.right {
    border-bottom-right-radius: 50px 28px;
    right: 0px;
    transform: rotate(20deg);
}

/* 嘴唇遮罩 */
.mouth .up .lip::before {
    content: "";
    display: block;
    /* border: 1px solid red; */
    background: rgb(255, 230, 0);
    width: 5px;
    height: 23px;
    position: absolute;
    top: -1px;
}
.mouth .up .lip.left::before {  
    right: 0;
    margin-right: -4px;
}
.mouth .up .lip.right::before {  
    margin-left: -4px;
}

.mouth .down {
    /* border: 1px solid green; */
    width: 100%;
    height: 160px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    top: 8px;
}
.mouth .down .yuan1 {
    border: 3px solid black;
    background-color: rgb(155, 0, 10);
    width: 100%;
    height: 1300px;
    position: absolute;
    bottom: 0;
    left:0;
    border-radius: 100px/490px;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    /* border: 1px solid black; */
    width: 150px;
    height: 150px;
    background: rgb(255, 72, 95);
    position: absolute;
    bottom: -25px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);  
}
`

export default pikachuCSS