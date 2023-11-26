function openModal() {
  document.getElementById("myModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// offcanvas popup mobile
function togglePopup() {
  var overlay = document.getElementById('overlay');
  overlay.classList.toggle('show-overlay');
}

function closePopup() {
  var overlay = document.getElementById('overlay');
  overlay.classList.remove('show-overlay');
}
