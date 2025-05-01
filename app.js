// video play on hover and paused
const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector('.hover-sign');

// sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');


const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add('active');
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove('active');
  });
});

// sidebar event
menu.addEventListener('click', function() {
  sideBar.classList.remove('close-sidebar')
  sideBar.classList.add('open-sidebar');
})

close.addEventListener('click', function() {
  sideBar.classList.remove('open-sidebar')
  sideBar.classList.add('close-sidebar');
});

// emailjs.init("axeldeev");
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault();

//   emailjs.sendForm("service_qyl58aj", "template_fpm0bi2", this)
//     .then(function() {
//       alert("Pesan berhasil dikirim!");
//     }, function(error) {
//       alert("Gagal mengirim pesan: " + JSON.stringify(error));
//     });
// });

// Using mailto link for email sending
// Note: This function will be malfunction
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:example@yahoo.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.location.href = mailtoLink;
});