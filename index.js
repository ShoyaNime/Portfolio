// Animasi Scroll change color
$(window).scroll(function () {
  let wscrol = $(this).scrollTop();

  if (wscrol >= 1) {
    $("nav").addClass("nav-black");
  } else {
    $("nav").removeClass("nav-black");
  }
});
 
// Animasi typing Header
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".typing", {
    loop: true,
  })
    .type(" Desin")
    .pause(600)
    .move(-1, { delay: 100 })
    .type("g")
    .move(10, { delay: 100 })
    .pause(3000)
    .delete(12, { delay: 200 })
    .type("Full-StackWebsite")
    .pause(100)
    .move(-7, { delay: 100 })
    .type(" ")
    .move(7,)
    .pause(3000)
    .delete(18, { delay: 200 })
    .type("Mobiles")
    .delete(1, { delay: 200 })
    .type(" Application")
    .pause(3000)
    .delete(19, { delay: 100 })
    .move(null, { to: "END" })
    .go();
});

// Animasi Aos
AOS.init({
  once: true,
});

// Animation Loading Gsap
// Navbar
gsap.from(".brand", {
  duration: 1,
  x: -100,
  opacity: 0,
});
gsap.from(".nav-link", {
  opacity: 0,
  duration: 1,
  x: -100,
  stagger: 0.3,
  delay: 1,
});

// img header
gsap.from(".header-img img", {
  duration: 1,
  x: 100,
  delay: 0.7,
  opacity: 0,
});

//  jumbotron
gsap.from(".jumbotron p:nth-child(1)", {
  opacity: 0,
  duration: 1.5,
  x: -100,
  delay: 0.6,
});
gsap.from(".jumbotron h1", {
  opacity: 0,
  duration: 1.5,
  x: 100,
  delay: 1,
});
gsap.from(".jumbotron p:nth-child(3)", {
  opacity: 0,
  duration: 1.5,
  x: -100,
  delay: 1.4,
});
gsap.from(".jumbotron p:nth-child(4)", {
  opacity: 0,
  duration: 1.5,
  x: 100,
  delay: 1.8,
});
gsap.from(".jumbotron p:nth-child(5)", {
  duration: 2,
  scale: 0.5,
  delay: 2.5,
  opacity: 0,
  ease: "elastic",
  force3D: true,
});

// Style Header
gsap.from(".herro-section span:nth-child(1)", {
  duration: 1,
  y: -100,
  delay: 0.5,
  opacity: 0,
});
gsap.from(".style-header-3", {
  duration: 1,
  scale: 0.5,
  delay: 1,
  opacity: 0,
});

// Resume
gsap.from(".resume-style p", {
  scrollTrigger: ".resume-style p",
  duration: 1,
  scale: 0.5,
  delay: 1,
  opacity: 0,
});

// filter sertife
$(".filter-button").on("click", function () {
  $(".filter-button").removeClass("filter-active");
  $(this).addClass("filter-active");

  const filter = $(this).attr("data-filter");
  console.log(filter);

  $(".certificate-title")
    .parent()
    .each(function () {
      const item = $(this);
      const match = filter === "" || item.attr("data-category") === filter;
      console.log(match);

      item.toggleClass("d-none", !match);
      if (match) {
        item.addClass("animate-custom-zoom-in");
      } else {
        item.removeClass("animate-custom-zoom-in");
      }
    });
});

// send form
const successSend = "Pesan anda berhasil dikirim ke email pemilik";
const successAlert = "alert-success";
const errorSend = "Pesan gagal dikirim, coba kirim ulang";
const errorAlert = "alert-danger";
$("#contactForm").on("submit", function (event) {
  event.preventDefault();

  $("#button-sendform").html(loader());

  emailjs.sendForm("service_dd42iwh", "template_64gnmb1", this).then(
    () => {
      $("#button-sendform").html("Kirim Pesan");
      $("#contactForm").append(alertForm(successSend, successAlert));
    },
    (error) => {
      $("#button-sendform").html("Kirim Pesan");
      $("#contactForm").append(alertForm(successSend, successAlert));
    }
  );
});
function alertForm(message, style) {
  return `
  <div id="alert-content" class="position-absolute d-flex justify-content-center col-12">
    <div
        class="alert ${style} alert-dismissible fade show"
        role="alert"
      >
        ${message}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
    </div>
  </div>
  `;
}

function loader() {
  return `
    <div class="spinner-border spinner-border-sm col-12" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
}
