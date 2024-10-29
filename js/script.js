function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });
}
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var scrollTop = window.scrollY;

  if (scrollTop > 0) {
      navbar.classList.add("blurred");
  } else {
      navbar.classList.remove("blurred");
  }
});
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function incrementStats() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}
//Send Mail Function created 

function sendMail(){
  var params= {

      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,


  };

  const serviceID = "service_o15abc2";
  const templateID = "template_yywa99l";
  emailjs
      .send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("name").value = "",
          document.getElementById("email").value = "",
          document.getElementById("phone").value = "",
          document.getElementById("message").value = "",
          console.log(res);
          alert("Message send sucessfully!!!");
      })
  .catch((err) => console.log(err));
}


// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('#to-top').addEventListener('click', scrollToTop);
