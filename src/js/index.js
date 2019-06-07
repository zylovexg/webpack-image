import '../css/index.css';

import img1 from '../images/liuyifei-pic1.jpeg';
import img2 from '../images/liuyifei-pic2.png';

const loadImg = img => {
    const newImg = new Image();
    newImg.onload = () => document.body.appendChild(newImg);
    newImg.src = img;
}

loadImg(img1);
loadImg(img2);