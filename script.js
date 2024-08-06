document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const service = this.getAttribute("data-service");
      const phoneNumber = "yourwhatsappnumber"; // Ganti dengan nomor WhatsApp Anda
      const message = `Halo, saya tertarik untuk memesan layanan ${service}. Bagaimana cara pemesanannya?`;

      // URL encode message and phoneNumber
      const encodedMessage = encodeURIComponent(message);
      const encodedPhoneNumber = encodeURIComponent(phoneNumber);

      // Open WhatsApp
      window.open(
        `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`,
        "_blank"
      );
    });
  });
});

function showPrices() {
  const category = document.getElementById("category").value;
  const priceListContainer = document.getElementById("price-lists");
  priceListContainer.innerHTML = ""; // Clear current content

  prices[category].forEach((plan) => {
    const priceCard = document.createElement("div");
    priceCard.className = "price-card";

    priceCard.innerHTML = `
        <h2>${plan.plan}</h2>
        <p class="price">${plan.price}<span>/Per Month</span></p>
        <ul>${plan.features
          .map((feature) => `<li>${feature}</li>`)
          .join("")}</ul>
        <a href="#" class="btn">BUY NOW</a>
      `;

    priceListContainer.appendChild(priceCard);
  });
}

// Load default category on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set default category selection
  document.getElementById("category").value = "youtube"; // Set to default category
  showPrices(); // Show prices for the default category
});

let isChatboxVisible = false;
const chatbox = document.querySelector(".WA_Chat_Widget .WA_ChatBox");
function hideChatbox() {
  isChatboxVisible = false;
  chatbox.style.display = "none";
}
function toggleChatbox() {
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";
}
// Fungsi untuk menampilkan gambar sebelumnya pada carousel
function prevSlide(carouselId) {
  $(carouselId).carousel("prev");
}

// Fungsi untuk menampilkan gambar berikutnya pada carousel
function nextSlide(carouselId) {
  $(carouselId).carousel("next");
}

// Fungsi untuk mengecek apakah elemen ada dalam viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menambahkan kelas 'visible' pada elemen yang terlihat
function onVisibilityChange() {
  const cards = document.querySelectorAll(".subscription-card");
  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("visible");
    }
  });
}

// Cek visibilitas saat scroll dan saat halaman pertama kali dimuat
window.addEventListener("scroll", onVisibilityChange);
window.addEventListener("load", onVisibilityChange);

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".subscription-card");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    cards.forEach(function (card) {
      if (isInViewport(card)) {
        card.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  checkVisibility(); // Check visibility on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector("#navbarResponsive");
  const navbarTogglerIcon = document.querySelector("#navbar-toggler-icon");
  const navbarTogglerClose = document.querySelector("#navbar-toggler-close");

  navbarToggler.addEventListener("click", function () {
    const isMenuOpen = navbarMenu.classList.contains("show");

    if (isMenuOpen) {
      navbarTogglerIcon.style.display = "inline";
      navbarTogglerClose.style.display = "none";
    } else {
      navbarTogglerIcon.style.display = "none";
      navbarTogglerClose.style.display = "inline";
    }
  });
});
