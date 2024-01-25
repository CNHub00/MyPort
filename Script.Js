let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-80px"; // ปรับตามความสูงของ header ของคุณ
  }
  prevScrollPos = currentScrollPos;
};
