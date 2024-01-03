const burger = document.querySelector(".humberger-menu");
const navigasi = document.querySelector(".navigasi");

burger.addEventListener("click", function () {
  if (navigasi.classList.contains("hide-navigasi")) {
    navigasi.classList.replace("hide-navigasi", "show-navigasi");
    document.querySelectorAll(".burger").forEach((element) => {
      element.classList.replace("bg-black", "bg-light");
    });
  } else if (navigasi.classList.contains("show-navigasi")) {
    tutup_nav();
  }
});
document.querySelector(".main-home").addEventListener("click", function () {
  tutup_nav();
});
document.querySelector(".cars").addEventListener("click", function () {
  tutup_nav();
});
document.querySelectorAll(".nav-section").forEach((element) => {
  element.addEventListener("click", function () {
    tutup_nav();
  });
});

const rangkaian1_img = document.querySelector(".rangkaian-1 > div > div > img");
document.querySelector(".tombol-rangkaian-1").addEventListener("click", function () {
  if (rangkaian1_img.classList.contains("off")) {
    rangkaian1_img.classList.replace("off", "on");
    rangkaian1_img.src = "IMG/lamp-on.png";
  } else if (rangkaian1_img.classList.contains("on")) {
    rangkaian1_img.src = "IMG/lamp-off.png";
    rangkaian1_img.classList.replace("on", "off");
  }
});

document.querySelector(".home").addEventListener("touchstart", function () {
  document.querySelector(".button-up").classList.add("visually-hidden");
});

document.querySelector(".tentang").addEventListener("touchstart", function () {
  show_button_up();
});
document.querySelector(".mentor").addEventListener("touchstart", function () {
  show_button_up();
});
document.querySelector(".daftar").addEventListener("touchstart", function () {
  show_button_up();
});
document.querySelector(".blog").addEventListener("touchstart", function () {
  show_button_up();
});
document.querySelector(".footer").addEventListener("touchstart", function () {
  show_button_up();
});

document.querySelector(".home").addEventListener("mouseover", function () {
  document.querySelector(".button-up").classList.add("visually-hidden");
});

document.querySelector(".tentang").addEventListener("mouseover", function () {
  show_button_up();
});
document.querySelector(".mentor").addEventListener("mouseover", function () {
  show_button_up();
});
document.querySelector(".daftar").addEventListener("mouseover", function () {
  show_button_up();
});
document.querySelector(".blog").addEventListener("mouseover", function () {
  show_button_up();
});
document.querySelector(".footer").addEventListener("mouseover", function () {
  show_button_up();
});

function tutup_nav() {
  if (navigasi.classList.contains("show-navigasi")) {
    navigasi.classList.replace("show-navigasi", "hide-navigasi");
    document.querySelectorAll(".burger").forEach((element) => {
      element.classList.replace("bg-light", "bg-black");
    });
  }
}
function show_button_up() {
  const button = document.querySelector(".button-up");
  if (button.classList.contains("visually-hidden")) button.classList.remove("visually-hidden");
}
