// Get the modal
let modalSF = document.getElementById('modal-spotFinder');
let modalCello = document.getElementById('modal-Cello');
let modalSession = document.getElementById('modal-Session');
let modalPlanner = document.getElementById('modal-Planner');
let modalSporkify = document.getElementById('modal-Sporkify');
let modalBlog = document.getElementById('modal-Blog');

// let modalBtn = document.getElementById('modalBtn');
let btnSF = document.getElementById('btnSF');
let btnCello = document.getElementById('btnCello');
let btnSession = document.getElementById('btnSession');
let btnPlanner = document.getElementById('btnPlanner');
let btnSporkify = document.getElementById('btnSporkify');
let btnBlog = document.getElementById('btnBlog');

// Get the <span> element that closes the modal
let spanSF = document.getElementsByClassName('closeSF')[0];
let spanCello = document.getElementsByClassName('closeCello')[0];
let spanSession = document.getElementsByClassName('closeSession')[0];
let spanPlanner = document.getElementsByClassName('closePlanner')[0];
let spanSporkify = document.getElementsByClassName('closeSporkify')[0];
let spanBlog = document.getElementsByClassName('closeBlog')[0];

// When the user clicks the button, open the modal

btnSF.onclick = function () {
  modalSF.style.display = 'block';
};
btnCello.onclick = function () {
  modalCello.style.display = 'block';
};
btnSession.onclick = function () {
  modalSession.style.display = 'block';
};
btnPlanner.onclick = function () {
  modalPlanner.style.display = 'block';
};
btnSporkify.onclick = function () {
  modalSporkify.style.display = 'block';
};
btnBlog.onclick = function () {
  modalBlog.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
spanSF.onclick = function () {
  modalSF.style.display = 'none';
};
spanCello.onclick = function () {
  modalCello.style.display = 'none';
};
spanSession.onclick = function () {
  modalSession.style.display = 'none';
};
spanPlanner.onclick = function () {
  modalPlanner.style.display = 'none';
};
spanSporkify.onclick = function () {
  modalSporkify.style.display = 'none';
};
spanBlog.onclick = function () {
  modalBlog.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (e) {
  if (e.target === modalCello) {
    modalCello.style.display = 'none';
  } else if (e.target === modalSession) {
    modalSession.style.display = 'none';
  } else if (e.target === modalPlanner) {
    modalPlanner.style.display = 'none';
  } else if (e.target === modalSporkify) {
    modalSporkify.style.display = 'none';
  } else if (e.target === modalSF) {
    modalSF.style.display = 'none';
  } else if (e.target === modalBlog) {
    modalBlog.style.display = 'none';
  }
};
