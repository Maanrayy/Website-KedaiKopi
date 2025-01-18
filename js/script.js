document.addEventListener("DOMContentLoaded", () => {
  // Feather Icons
  feather.replace();

  // Toggle class active untuk hamburger menu
  const navbarNav = document.querySelector(".navbar-nav");
  const hm = document.querySelector("#hamburger-menu");
  if (hm) {
    hm.addEventListener("click", () => {
      navbarNav.classList.toggle("active");
    });
  }

  // Toggle class active untuk search form
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const sb = document.querySelector("#search-button");
  if (sb) {
    sb.addEventListener("click", (e) => {
      e.preventDefault();
      searchForm.classList.toggle("active");
      searchBox.focus();
    });
  }

  // Toggle class active untuk shopping cart
  const shoppingCart = document.querySelector(".shopping-cart");
  const sc = document.querySelector("#shopping-cart-button");
  if (sc) {
    sc.addEventListener("click", (e) => {
      e.preventDefault();
      shoppingCart.classList.toggle("active");
    });
  }

  // Klik di luar elemen
  document.addEventListener("click", (e) => {
    if (!navbarNav.contains(e.target) && !hm.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
    if (!searchForm.contains(e.target) && !sb.contains(e.target)) {
      searchForm.classList.remove("active");
    }
    if (!shoppingCart.contains(e.target) && !sc.contains(e.target)) {
      shoppingCart.classList.remove("active");
    }
  });

  // Modal Box
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");
  if (itemDetailModal) {
    itemDetailButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        itemDetailModal.style.display = "flex";
      });
    });

    // klik tombol close modal
    const closeModal = document.querySelector(".modal .close-icon");
    if (closeModal) {
      closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        itemDetailModal.style.display = "none";
      });
    }

    // klik di luar modal
    window.addEventListener("click", (e) => {
      if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
      }
    });
  }
});
