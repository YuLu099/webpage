
'use strict';
let playPointerImg = document.getElementById('playPointerImg');
let playVideo = document.getElementById('playVideo');
let RUN = document.getElementById('RUN');
let RUNFlag = true;
console.log(RUN)
playPointerImg.onclick = function () {
  playPointerImg.style.display = 'none';
  playVideo.style.opacity = '1';
  playVideo.play();
}
RUN.onclick = function () {
  if (RUNFlag == true) {
    RUN.style.color = '#Fff';
    RUN.style.background = 'red';
    RUN.innerHTML = 'RUN!';
    RUNFlag = false;
  }
}

  let diao = document.getElementById('diao');
  let diaoDiv = document.getElementById('diaoDiv');
  console.log(diaoDiv)
  setInterval(function () {
    let Img = document.createElement('img');
    let Img2 = document.createElement('img');
    let Img3 = document.createElement('img');
    let arry2 = [Img,Img2,Img3];
    for (var i = 0; i < arry2.length; i ++) {
      arry2[i].className = 'diaoImg';
      let leftA = Math.ceil(Math.random()*110) + '%';
      let time = Math.ceil(Math.random()*20) + 's';
      arry2[i].src = 'images/e.png';
      arry2[i].style.animationDuration = time;
      arry2[i].style.marginLeft = leftA;
      diaoDiv.appendChild(arry2[i])
    }
  },2000)