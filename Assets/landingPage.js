const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar-container');
const li = document.querySelector('.nav-wrapper');
const close = document.getElementById('close');

menu.onclick = () => {
  navbar.classList.add('open');
  li.classList.add('open');
  menu.style.display = 'none';
  close.style.display = 'block';
};
close.onclick = () => {
  navbar.classList.remove('open');
  li.classList.remove('open');
  menu.style.display = 'block';
  close.style.display = 'none';
};
$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css('width', per + '%');
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      stop: function () {
        $this.attr('per', Math.floor(this.animatedValue));
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
    }
  );
});
window.onscroll = function () {
  stickyFunction();
};
let nav = document.getElementById('navbar');
let sticky = nav.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
