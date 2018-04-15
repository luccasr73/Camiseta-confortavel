function tocamusica() {
  document.querySelector('audio').play();
  document.querySelector('.backdrop').classList.add('hide');
}
document.querySelector('body').addEventListener('load', function () {
  tocamusica();
});
document.querySelector('body').addEventListener('click', function () {
  tocamusica();
});
document.querySelector('body').addEventListener('touchstart', function () {
  tocamusica();
});
document.querySelector('body').addEventListener('keypress', function () {
  tocamusica();
});
