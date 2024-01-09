const burger = document.querySelector(".humberger-menu");
const navigasi = document.querySelector(".navigasi");

burger.addEventListener("click", function () {
  burger_menu();
});
burger.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) burger_menu();
});
let home_sections = [".main-home", ".cars"];
home_sections.forEach(function (e) {
  document.querySelector(e).addEventListener("click", function () {
    tutup_nav();
  });
});

document.querySelectorAll(".nav-section").forEach((element) => {
  element.addEventListener("click", function () {
    tutup_nav();
  });
});

const rangkaian1_img = document.querySelector(".rangkaian-1 > div > div > img");
document.querySelector(".tombol-rangkaian-1").addEventListener("click", function () {
  nyala_lampu();
});
document.querySelector(".tombol-rangkaian-1").addEventListener("keyup", function (e) {
  if (e.keyCode == 13) nyala_lampu();
});

const rangkaian11_img = document.querySelector(".rangkaian-1-1 > img");
document.querySelector(".tombol-rangkaian-1-1").addEventListener("click", function () {
  nyala_lampu2();
});
document.querySelector(".tombol-rangkaian-1-1").addEventListener("keyup", function (e) {
  if (e.keyCode == 13) nyala_lampu2();
});

const tombol_maju = document.querySelector(".tombol-maju");
const tombol_mundur = document.querySelector(".tombol-mundur");
const roda = document.querySelector(".roda");

tombol_maju.addEventListener("click", function () {
  roda_maju();
});
tombol_maju.addEventListener("keyup", function () {
  roda_maju();
});
tombol_mundur.addEventListener("click", function () {
  roda_mundur();
});
tombol_mundur.addEventListener("keyup", function () {
  roda_mundur();
});

const tombol_maju2 = document.querySelector(".tombol-maju2");
const tombol_mundur2 = document.querySelector(".tombol-mundur2");
const roda2 = document.querySelector(".roda2");

tombol_maju2.addEventListener("click", function () {
  roda_maju2();
});
tombol_maju2.addEventListener("keyup", function () {
  roda_maju2();
});
tombol_mundur2.addEventListener("click", function () {
  roda_mundur2();
});
tombol_mundur2.addEventListener("keyup", function () {
  roda_mundur2();
});

document.querySelector(".home").addEventListener("touchstart", function () {
  document.querySelector(".button-up").classList.add("visually-hidden");
});

document.querySelector(".home").addEventListener("mouseover", function () {
  document.querySelector(".button-up").classList.add("visually-hidden");
});

let section = [".biografi", ".tentang", ".mentor", ".daftar", ".blog", ".contoh-rangkaian", ".footer"];
section.forEach(function (e) {
  document.querySelector(e).addEventListener("touchstart", function () {
    show_button_up();
  });
});

section.forEach(function (e) {
  document.querySelector(e).addEventListener("mouseover", function () {
    show_button_up();
  });
});

function roda_maju() {
  if (roda.classList.contains("roda-mundur")) roda.classList.remove("roda-mundur");
  roda.classList.add("roda-maju");
}

function roda_mundur() {
  if (roda.classList.contains("roda-maju")) roda.classList.remove("roda-maju");
  roda.classList.add("roda-mundur");
}

function roda_maju2() {
  if (roda2.classList.contains("roda-mundur")) roda2.classList.remove("roda-mundur");
  roda2.classList.add("roda-maju");
}

function roda_mundur2() {
  if (roda2.classList.contains("roda-maju")) roda2.classList.remove("roda-maju");
  roda2.classList.add("roda-mundur");
}

function burger_menu() {
  if (navigasi.classList.contains("hide-navigasi")) {
    navigasi.classList.replace("hide-navigasi", "show-navigasi");
    document.querySelectorAll(".burger").forEach((element) => {
      element.classList.replace("bg-black", "bg-light");
    });
  } else if (navigasi.classList.contains("show-navigasi")) {
    tutup_nav();
  }
}

function nyala_lampu() {
  if (rangkaian1_img.classList.contains("off")) {
    rangkaian1_img.classList.replace("off", "on");
    rangkaian1_img.src = "IMG/lamp-on.webp";
  } else if (rangkaian1_img.classList.contains("on")) {
    rangkaian1_img.src = "IMG/lamp-off.webp";
    rangkaian1_img.classList.replace("on", "off");
  }
}

function nyala_lampu2() {
  if (rangkaian11_img.classList.contains("off")) {
    rangkaian11_img.classList.replace("off", "on");
    rangkaian11_img.src = "IMG/lamp-on.webp";
  } else if (rangkaian11_img.classList.contains("on")) {
    rangkaian11_img.src = "IMG/lamp-off.webp";
    rangkaian11_img.classList.replace("on", "off");
  }
}

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
