var images = {
  hero: "imgs/hero.jpg",
  product01: "imgs/product01.jpg",
  product02: "imgs/product02.jpg",
  product03: "imgs/product03.jpg",
  product04: "imgs/product04.jpg",
  product05: "imgs/product05.jpg",
  product06: "imgs/product06.jpg",
  product07: "imgs/product07.jpg",
  product08: "imgs/product08.jpg",
  product09: "imgs/product09.jpg",
  product10: "imgs/product10.jpg",
  product11: "imgs/product11.jpg",
  product12: "imgs/product12.jpg",
  product13: "imgs/product13.jpg",
  product14: "imgs/product14.jpg",
  product15: "imgs/product15.jpg",
  product16: "imgs/product16.jpg",
  product17: "imgs/product17.jpg",
  product18: "imgs/product18.jpg",
  product19: "imgs/product19.jpg",
  product20: "imgs/product20.jpg",
  product21: "imgs/product21.jpg",
  product22: "imgs/product22.jpg",
  product23: "imgs/product23.jpg",
  product24: "imgs/product24.jpg",
  product25: "imgs/product25.jpg",
  product26: "imgs/product26.jpg",
  product27: "imgs/product27.jpg",
  product28: "imgs/product28.jpg",
  product29: "imgs/product29.jpg",
  product30: "imgs/product30.jpg",
  product31: "imgs/product31.jpg",
  product32: "imgs/product32.jpg",
  product33: "imgs/product33.jpg",
  product34: "imgs/product34.jpg",
  product35: "imgs/product35.jpg",
  product36: "imgs/product36.jpg",
  product37: "imgs/product37.jpg",
  product38: "imgs/product38.jpg",
  product39: "imgs/product39.jpg",
  product40: "imgs/product40.jpg",
  product41: "imgs/product41.jpg",
  product42: "imgs/product42.jpg",
  product43: "imgs/product43.jpg",
  product44: "imgs/product44.jpg",
  product45: "imgs/product45.jpg",
  product46: "imgs/product46.jpg",
  product47: "imgs/product47.jpg",
  product48: "imgs/product48.jpg",
  product49: "imgs/product49.jpg",
  product50: "imgs/product50.jpg",
  product51: "imgs/product51.jpg",
  product52: "imgs/product52.jpg",
  product53: "imgs/product53.jpg",
  product54: "imgs/product54.jpg",
  product55: "imgs/product55.jpg",
  product56: "imgs/product56.jpg",
  product57: "imgs/product57.jpg",
  product58: "imgs/product58.jpg",
  product59: "imgs/product59.jpg",
  product60: "imgs/product60.jpg",
  product61: "imgs/product61.jpg",
  product62: "imgs/product62.jpg",
  product63: "imgs/product63.jpg",
  product64: "imgs/product64.jpg",
  product65: "imgs/product65.jpg",
  product66: "imgs/product66.jpg",
  product67: "imgs/product67.jpg",
  product68: "imgs/product68.jpg",
  product69: "imgs/product69.jpg",
  product70: "imgs/product70.jpg",
  timeline1: "imgs/timeline1.jpg",
  timeline2: "imgs/timeline2.jpg",
  timeline3: "imgs/timeline3.jpg",
  timeline4: "imgs/timeline4.jpg",
  timeline5: "imgs/timeline5.jpg",
  step01: "imgs/step01.jpg",
  step02: "imgs/step02.jpg",
  step03: "imgs/step03.jpg",
  step04: "imgs/step04.jpg",
  step05: "imgs/step05.jpg",
  step06: "imgs/step06.jpg",
  step07: "imgs/step07.jpg",
  step08: "imgs/step08.jpg",
  step09: "imgs/step09.jpg",
  step10: "imgs/step10.jpg",
  delivery: "imgs/delivery.jpg",
  why: "imgs/why.jpg",
  footer: "imgs/footer.jpg",
  avatar01: "imgs/avatar01.jpg",
  avatar02: "imgs/avatar02.jpg",
  avatar03: "imgs/avatar03.jpg",
  avatar04: "imgs/avatar04.jpg",
  avatar05: "imgs/avatar05.jpg",
  avatar06: "imgs/avatar06.jpg",
  avatar07: "imgs/avatar07.jpg",
  avatar08: "imgs/avatar08.jpg",
  avatar09: "imgs/avatar09.jpg",
  avatar10: "imgs/avatar10.jpg"
};

var colorList = ["Qaymoq", "Oq", "Lavanda", "Pushti", "Ko'k", "Kulrang", "Shaftoli", "Yashil", "Qum rang", "Atirgul", "Havorang", "Siren", "Sariq", "Zaytun"];

var productNames = [
  "Shabnam", "Bulut", "Osmon", "Tong", "Kuy", "Ertak", "Fasl", "Gul", "Dengiz", "Shabada", "Yulduz", "Oy", "Nur", "Tiniq",
  "Samo", "Bahor", "Quyosh", "Zefir", "Oqqush", "Sokin", "Meros", "Orzu", "Uxla", "Nafis", "Marjon", "Uchar", "Sir", "Sehr",
  "Pushti bulut", "Kumush", "Oltin", "Zumrad", "Feruza", "Lola", "Sunbul", "Sohil", "Poytaxt", "Nigoh", "Tabassum", "Orzuim", "Xayol", "Sirli tun",
  "Yog'du", "Sayro", "Nihol", "Asal", "Shirin", "Musaffo", "Humo", "Afsona", "Parpi", "Jilva", "Zar", "Shohi", "Ipak", "Kumush tun",
  "Beshik", "Mitti", "Erkatoy", "Chaqaloq", "Malika", "Shahzoda", "Alplik", "Tabiat", "Shifo", "Anatomik", "Erkin", "Xotirjam", "Sog'lom", "Bog'"
];

var products = [];
var typesArray = ["Patli yostiq", "Memory foam yostiq", "Ortopedik yostiq", "Mikrofibra yostiq", "Bolalar va bo'yin yostig'i"];
var materialsArray = ["Tabiiy pat va paxta", "Viskoelastik xotira ko'pik", "Ortopedik lateks", "Silikonlashgan mikrofibra", "Gipoallergen ekologik tola"];

for (var i = 1; i <= 20; i++) {
  var tIndex = Math.floor((i - 1) / 4);
  var typeName = typesArray[tIndex % typesArray.length];
  var jIndex = (i - 1) % 14;
  var colorVal = colorList[jIndex % colorList.length];
  var priceVal = 150000 + (i * 15000) % 450000;
  var ratingVal = (i % 2 === 0) ? 5 : 4;
  var popVal = 100 - i;
  products.push({
    id: i,
    name: productNames[i - 1],
    type: typeName,
    material: materialsArray[tIndex % materialsArray.length],
    color: colorVal,
    price: priceVal,
    rating: ratingVal,
    popularity: popVal
  });
}

var cart = JSON.parse(localStorage.getItem("meros_cart")) || [];
var displayedCount = 10;
var currentFilterType = "all";
var currentFilterColor = "all";
var currentFilterSort = "popular";

var timelineData = [
  { year: "Mil.Avv 2000", title: "Qadimgi Mesopotamiya", desc: "Dastlabki yostiqlar toshdan yasalgan bo'lib, badavlat kishilar uchun hashamat belgisi hisoblangan.", imageKey: "timeline1" },
  { year: "Qadimgi Misr", title: "Uhlayotgan ruhlar", desc: "Misrliklar boshni muqaddas saqlash uchun yog'ochdan yasalgan maxsus kichik tayanchlardan foydalanishgan.", imageKey: "timeline2" },
  { year: "Qadimgi Xitoy", title: "Qattiq chinni yostiqlar", desc: "Xitoyda sovuq va qattiq chinni yostiqlar salomatlikni saqlaydi deb ishonilgan, ular ichiga xushbo'y o'tlar solingan.", imageKey: "timeline3" },
  { year: "XVI Asr", title: "Yevropa uyg'onish davri", desc: "Buyuk Britaniya va Yevropada patlar va qush junlari bilan to'ldirilgan yumshoq yostiqlar ommalasha boshladi.", imageKey: "timeline4" },
  { year: "Zamonaviy Davr", title: "Anatomik inqilob", desc: "XX asr oxiridan boshlab xotira ko'pikli va ortopedik ilg'or texnologiyali yostiqlar hayotimizga kirdi.", imageKey: "timeline5" }
];

var stepsData = [
  { num: "01 / 10", title: "Xom ashyo tanlash", desc: "Faqat eng yuqori sifatli va ekologik toza xom ashyolar sinchkovlik bilan saralanadi.", imageKey: "step01" },
  { num: "02 / 10", title: "Tozalash va yuvish", desc: "Tabiiy materiallar maxsus sharoitda sterilizatsiya qilinib, chuqur tozalanadi.", imageKey: "step02" },
  { num: "03 / 10", title: "Mato tayyorlash", desc: "Gipoallergen va nafas oluvchi matolar kesish stoliga uzatiladi.", imageKey: "step03" },
  { num: "04 / 10", title: "Mato kesish", desc: "Zamonaviy lazer uskunalari yordamida aniq o'lchamlarda matolar qirqib olinadi.", imageKey: "step04" },
  { num: "05 / 10", title: "Tikish", desc: "Mustahkam va nozik iplar bilan ikki qavatli himoya tikuvlari hosil qilinadi.", imageKey: "step05" },
  { num: "06 / 10", title: "Ishlab chiqarish", desc: "Ichki anatomiya tuzilmasi maxsus texnologiya asosida shakllantiriladi.", imageKey: "step06" },
  { num: "07 / 10", title: "To'ldirish", desc: "Yostiqlar optimal yumshoqlik darajasida to'ldiruvchi moddalar bilan ta'minlanadi.", imageKey: "step07" },
  { num: "08 / 10", title: "Sifat nazorati", desc: "Har bir tayyor mahsulot laboratoriya sinovlari va nazoratdan o'tkaziladi.", imageKey: "step08" },
  { num: "09 / 10", title: "Qadoqlash", desc: "Gigienik va havo o'tkazmaydigan maxsus vakuumli qoplarga joylanadi.", imageKey: "step09" },
  { num: "10 / 10", title: "Yetkazishga tayyor", desc: "Ombordan mijozlar tomon yo'l olish uchun saralanib tayyor holatga keltiriladi.", imageKey: "step10" }
];

var reviewsData = [
  { name: "Malika Umarova", city: "Toshkent", text: "Bo'yin og'rig'im butunlay yo'qoldi. Bu yostiq haqiqiy mo'jiza!", avatar: "avatar01" },
  { name: "Jasurbek Karimov", city: "Samarqand", text: "Yetkazib berish juda tez va qadoqlanishi yuqori darajada ekan.", avatar: "avatar02" },
  { name: "Zilola Rahimova", city: "Buxoro", text: "Bulutdek yumshoq, har kecha shirin tushlar bilan uxlayapman.", avatar: "avatar03" },
  { name: "Anvar Toshmatov", city: "Andijon", text: "Oilamiz uchun bir nechta oldik, hammamiz juda mamnunmiz.", avatar: "avatar04" },
  { name: "Nilufar Saidova", city: "Namangan", text: "Sifati kutilganidan ham ancha yuqori chiqdi. Tavsiya qilaman!", avatar: "avatar05" },
  { name: "Bobur Mirzayev", city: "Farg'ona", text: "Memory foam modeli mukammal qo'llab-quvvatlaydi.", avatar: "avatar06" },
  { name: "Sevara Nazarova", city: "Qarshi", text: "Dizayni juda chiroyli va xonamizga ko'rk bag'ishladi.", avatar: "avatar07" },
  { name: "Sherzodbek Fayziyev", city: "Nukus", text: "Xarid qilish jarayoni oson va kuryer juda xushmuomala bo'ldi.", avatar: "avatar08" },
  { name: "Gulchehra Hakimova", city: "Xiva", text: "Bolalarim uchun olgan yostiqlar juda qulay va yumshoq.", avatar: "avatar09" },
  { name: "Umidjon Soliyev", city: "Jizzax", text: "Narxiga nisbatan sifati ajoyib, rahmat Meros Uyqu jamoasiga!", avatar: "avatar10" }
];

function makeKey(id) {
  var str = id.toString();
  if (str.length < 2) {
    return "product0" + str;
  }
  return "product" + str;
}

function isEmptyImage(val) {
  return !val || val === "rasmni_qoy";
}

function makeImage(key, customClass) {
  var url = images[key];
  var cls = customClass || "";
  if (isEmptyImage(url)) {
    return '<div class="placeholder-box ' + cls + '"><i class="fa-solid fa-image"></i><span>rasmni_qoy</span></div>';
  }
  return '<img src="' + url + '" alt="rasm" class="' + cls + '" loading="lazy">';
}

function makeAvatar(key) {
  var url = images[key];
  if (isEmptyImage(url)) {
    return '<div class="placeholder-box" style="width:100%;height:100%;border-radius:50%;"><i class="fa-solid fa-user" style="font-size:1.2rem;"></i></div>';
  }
  return '<img src="' + url + '" alt="rasm" loading="lazy">';
}

function setStaticImages() {
  var heroWrap = document.getElementById("hero-img-wrapper");
  if (heroWrap) {
    heroWrap.innerHTML = isEmptyImage(images.hero) ? '<div class="placeholder-box"><i class="fa-solid fa-image"></i><span>rasmni_qoy</span></div>' : '<img src="' + images.hero + '" alt="rasm">';
  }
  var deliveryWrap = document.getElementById("delivery-img-wrapper");
  if (deliveryWrap) {
    deliveryWrap.innerHTML = isEmptyImage(images.delivery) ? '<div class="placeholder-box"><i class="fa-solid fa-image"></i><span>rasmni_qoy</span></div>' : '<img src="' + images.delivery + '" alt="rasm">';
  }
  var footerEl = document.getElementById("site-footer");
  if (footerEl && !isEmptyImage(images.footer)) {
    footerEl.style.backgroundImage = "linear-gradient(rgba(22,25,51,0.85), rgba(22,25,51,0.85)), url('" + images.footer + "')";
  }
}

document.addEventListener("error", function(e) {
  if (e.target && e.target.tagName === "IMG") {
    var parent = e.target.parentElement;
    if (parent && !parent.classList.contains("placeholder-box")) {
      parent.innerHTML = '<div class="placeholder-box"><i class="fa-solid fa-image"></i><span>rasmni_qoy</span></div>';
    }
  }
}, true);

window.addEventListener("DOMContentLoaded", function() {
  var randomTime = 5000 + Math.floor(Math.random() * 3001);
  var progressEl = document.getElementById("loading-progress");
  if (progressEl) {
    progressEl.style.animationDuration = randomTime + "ms";
  }
  var percentEl = document.getElementById("loading-percent");
  var startTime = Date.now();
  var intervalTimer = setInterval(function() {
    var elapsed = Date.now() - startTime;
    var pct = Math.min(100, Math.floor((elapsed / randomTime) * 100));
    if (percentEl) {
      percentEl.textContent = pct + "%";
    }
    if (elapsed >= randomTime) {
      clearInterval(intervalTimer);
      var screen = document.getElementById("loading-screen");
      if (screen) {
        screen.classList.add("fade-out");
        setTimeout(function() {
          screen.style.display = "none";
        }, 500);
      }
    }
  }, 50);

  setStaticImages();
  renderProducts();
  renderPopularProducts();
  renderTimeline();
  renderProcess(0);
  startProcessTimer();
  renderReviews();
  updateCartBadge();
  startCountdownTimer();

  var burgerBtn = document.getElementById("burger-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  if (burgerBtn && mobileMenu) {
    burgerBtn.onclick = function() {
      mobileMenu.classList.toggle("active");
    };
  }

  var mobileLinks = document.querySelectorAll(".mobile-link");
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].onclick = function() {
      mobileMenu.classList.remove("active");
    };
  }

  var cartToggleBtn = document.getElementById("cart-toggle-btn");
  var cartSidebar = document.getElementById("cart-sidebar");
  if (cartToggleBtn && cartSidebar) {
    cartToggleBtn.onclick = function() {
      cartSidebar.classList.add("active");
      renderCartItems();
    };
  }

  var cartCloseBtn = document.getElementById("cart-close-btn");
  if (cartCloseBtn && cartSidebar) {
    cartCloseBtn.onclick = function() {
      cartSidebar.classList.remove("active");
    };
  }

  var searchToggleBtn = document.getElementById("search-toggle-btn");
  var searchModal = document.getElementById("search-modal");
  if (searchToggleBtn && searchModal) {
    searchToggleBtn.onclick = function() {
      searchModal.classList.add("active");
      document.getElementById("live-search-input").focus();
    };
  }

  var searchCloseBtn = document.getElementById("search-close-btn");
  if (searchCloseBtn && searchModal) {
    searchCloseBtn.onclick = function() {
      searchModal.classList.remove("active");
    };
  }

  var liveSearchInput = document.getElementById("live-search-input");
  if (liveSearchInput) {
    liveSearchInput.oninput = function(e) {
      handleLiveSearch(e.target.value);
    };
  }

  var filterTypeSelect = document.getElementById("filter-type");
  var filterColorSelect = document.getElementById("filter-color");
  var filterSortSelect = document.getElementById("filter-sort");

  if (filterTypeSelect) {
    filterTypeSelect.onchange = function(e) {
      currentFilterType = e.target.value;
      displayedCount = 10;
      renderProducts();
    };
  }
  if (filterColorSelect) {
    filterColorSelect.onchange = function(e) {
      currentFilterColor = e.target.value;
      displayedCount = 10;
      renderProducts();
    };
  }
  if (filterSortSelect) {
    filterSortSelect.onchange = function(e) {
      currentFilterSort = e.target.value;
      displayedCount = 10;
      renderProducts();
    };
  }

  var loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.onclick = function() {
      displayedCount += 10;
      renderProducts();
    };
  }

  var detailCloseBtn = document.getElementById("detail-close-btn");
  var detailModal = document.getElementById("detail-modal");
  if (detailCloseBtn && detailModal) {
    detailCloseBtn.onclick = function() {
      detailModal.classList.remove("active");
    };
  }

  var promoRulesCloseBtn = document.getElementById("promo-rules-close-btn");
  var promoRulesModal = document.getElementById("promo-rules-modal");
  if (promoRulesCloseBtn && promoRulesModal) {
    promoRulesCloseBtn.onclick = function() {
      promoRulesModal.classList.remove("active");
    };
  }

  var checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = function() {
      if (cart.length === 0) {
        showMessage("Savatchangiz bo'sh!", "error");
        return;
      }
      var textSpan = checkoutBtn.querySelector(".btn-text");
      var spinnerSpan = checkoutBtn.querySelector(".btn-spinner");
      textSpan.style.display = "none";
      spinnerSpan.style.display = "inline-block";
      setTimeout(function() {
        textSpan.style.display = "inline-block";
        spinnerSpan.style.display = "none";
        cart = [];
        localStorage.removeItem("meros_cart");
        renderCartItems();
        updateCartBadge();
        cartSidebar.classList.remove("active");
        showMessage("Buyurtmangiz muvaffaqiyatli qabul qilindi!", "success");
      }, 1500);
    };
  }
});

function getFilteredProducts() {
  var filtered = [];
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    var matchType = (currentFilterType === "all" || p.type === currentFilterType);
    var matchColor = (currentFilterColor === "all" || p.color === currentFilterColor);
    if (matchType && matchColor) {
      filtered.push(p);
    }
  }

  filtered.sort(function(a, b) {
    if (currentFilterSort === "popular") {
      return b.popularity - a.popularity;
    } else if (currentFilterSort === "cheap") {
      return a.price - b.price;
    } else if (currentFilterSort === "expensive") {
      return b.price - a.price;
    }
    return 0;
  });

  return filtered;
}

function renderProducts() {
  var grid = document.getElementById("products-grid");
  if (!grid) return;
  var filtered = getFilteredProducts();
  var limit = Math.min(displayedCount, filtered.length);
  var html = "";

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Hech qanday mahsulot topilmadi.</div>';
    var loadMoreBtn = document.getElementById("load-more-btn");
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  for (var i = 0; i < limit; i++) {
    var p = filtered[i];
    var key = makeKey(p.id);
    var starsStr = "";
    for (var s = 0; s < p.rating; s++) {
      starsStr += '<i class="fa-solid fa-star"></i>';
    }
    html += '<div class="product-card">';
    html += '<div class="product-img-box" onclick="openDetailModal(' + p.id + ')">';
    html += makeImage(key);
    html += '</div>';
    html += '<div class="product-info-wrap">';
    html += '<h3 class="product-name" onclick="openDetailModal(' + p.id + ')">' + p.name + '</h3>';
    html += '<span class="product-meta-sub">' + p.type + ' · ' + p.material + '</span>';
    html += '<span class="product-meta-sub">Rang: ' + p.color + '</span>';
    html += '</div>';
    html += '<div class="product-footer-row">';
    html += '<span class="product-price">' + p.price.toLocaleString() + " so'm" + '</span>';
    html += '<div class="product-rating">' + starsStr + '</div>';
    html += '</div>';
    html += '<button class="gradient-btn w-100" onclick="addToCart(' + p.id + ')">Savatchaga qo\'shish</button>';
    html += '</div>';
  }

  grid.innerHTML = html;

  var loadMoreContainer = document.getElementById("load-more-container");
  if (loadMoreContainer) {
    if (displayedCount >= filtered.length) {
      loadMoreContainer.style.display = "none";
    } else {
      loadMoreContainer.style.display = "block";
    }
  }
}

function renderPopularProducts() {
  var grid = document.getElementById("popular-grid");
  if (!grid) return;
  var sorted = products.slice().sort(function(a, b) {
    return b.popularity - a.popularity;
  });
  var html = "";
  var limit = Math.min(6, sorted.length);
  for (var i = 0; i < limit; i++) {
    var p = sorted[i];
    var key = makeKey(p.id);
    var starsStr = "";
    for (var s = 0; s < p.rating; s++) {
      starsStr += '<i class="fa-solid fa-star"></i>';
    }
    html += '<div class="product-card">';
    html += '<div class="product-img-box" onclick="openDetailModal(' + p.id + ')">';
    html += makeImage(key);
    html += '</div>';
    html += '<div class="product-info-wrap">';
    html += '<h3 class="product-name" onclick="openDetailModal(' + p.id + ')">' + p.name + '</h3>';
    html += '<span class="product-meta-sub">' + p.type + ' · ' + p.material + '</span>';
    html += '<span class="product-meta-sub">Rang: ' + p.color + '</span>';
    html += '</div>';
    html += '<div class="product-footer-row">';
    html += '<span class="product-price">' + p.price.toLocaleString() + " so'm" + '</span>';
    html += '<div class="product-rating">' + starsStr + '</div>';
    html += '</div>';
    html += '<button class="glass-btn w-100" onclick="openDetailModal(' + p.id + ')">Batafsil</button>';
    html += '</div>';
  }
  grid.innerHTML = html;
}

function openDetailModal(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      p = products[i];
      break;
    }
  }
  if (!p) return;
  var key = makeKey(p.id);
  var modal = document.getElementById("detail-modal");
  document.getElementById("detail-image-box").innerHTML = makeImage(key);
  document.getElementById("detail-type").textContent = p.type;
  document.getElementById("detail-name").textContent = p.name;
  document.getElementById("detail-desc").textContent = "Ushbu " + p.name.toLowerCase() + " yostig'i eng sara " + p.material.toLowerCase() + " asosida tayyorlangan bo'lib, sizga chuqur va sokin uyquni taqdim etadi.";
  document.getElementById("detail-material").textContent = p.material;
  document.getElementById("detail-color").textContent = p.color;
  var starsStr = "";
  for (var s = 0; s < p.rating; s++) {
    starsStr += '<i class="fa-solid fa-star"></i>';
  }
  document.getElementById("detail-rating").innerHTML = starsStr;
  document.getElementById("detail-price").textContent = p.price.toLocaleString() + " so'm";
  document.getElementById("detail-add-btn").onclick = function() {
    addToCart(p.id);
    modal.classList.remove("active");
  };
  modal.classList.add("active");
}

function addToCart(id) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      p = products[i];
      break;
    }
  }
  if (!p) return;
  var found = false;
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === id) {
      cart[j].qty += 1;
      found = true;
      break;
    }
  }
  if (!found) {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      type: p.type,
      qty: 1
    });
  }
  localStorage.setItem("meros_cart", JSON.stringify(cart));
  updateCartBadge();
  showMessage(p.name + " savatchaga qo'shildi!", "success");
}

function updateCartBadge() {
  var badge = document.getElementById("cart-badge");
  if (!badge) return;
  var totalCount = 0;
  for (var i = 0; i < cart.length; i++) {
    totalCount += cart[i].qty;
  }
  badge.textContent = totalCount;
}

function renderCartItems() {
  var list = document.getElementById("cart-items-list");
  var totalPriceEl = document.getElementById("cart-total-price");
  if (!list || !totalPriceEl) return;
  if (cart.length === 0) {
    list.innerHTML = '<div style="text-align: center; color: var(--text-muted); margin-top: 40px;">Savatchangiz bo\'sh</div>';
    totalPriceEl.textContent = "0 so'm";
    return;
  }
  var html = "";
  var totalSum = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    totalSum += item.price * item.qty;
    var key = makeKey(item.id);
    html += '<div class="cart-item-card">';
    html += '<div style="width:60px;height:60px;background:#161933;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;">' + makeImage(key, "cart-item-img") + '</div>';
    html += '<div class="cart-item-info">';
    html += '<div class="cart-item-title">' + item.name + '</div>';
    html += '<div class="cart-item-price">' + item.price.toLocaleString() + " so'm" + '</div>';
    html += '<div class="cart-item-actions">';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ', -1)"><i class="fa-solid fa-minus"></i></button>';
    html += '<span>' + item.qty + '</span>';
    html += '<button class="qty-btn" onclick="changeQty(' + item.id + ', 1)"><i class="fa-solid fa-plus"></i></button>';
    html += '<button class="qty-btn" onclick="removeFromCart(' + item.id + ')" style="margin-left:auto;color:#ff4b4b;"><i class="fa-solid fa-trash"></i></button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
  }
  list.innerHTML = html;
  totalPriceEl.textContent = totalSum.toLocaleString() + " so'm";
}

function changeQty(id, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty += delta;
      if (cart[i].qty <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  localStorage.setItem("meros_cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartItems();
}

function removeFromCart(id) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("meros_cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartItems();
}

function chooseSleep(type) {
  var title = "";
  var text = "";
  var targetType = "";
  if (type === "side") {
    title = "Yonboshlab uxlaychilar uchun";
    text = "Sizning elka va bo'yin bo'shlig'ingizni mukammal to'ldirib, umurtqani tekis saqlaydigan balandroq va zichroq yostiqlarimiz mos keladi.";
    targetType = "Ortopedik yostiq";
  } else if (type === "back") {
    title = "Chalqancha uxlaychilar uchun";
    text = "Bosh va bo'yinni tabiiy holatda ushlab turuvchi, o'rtacha yumshoqlikdagi anatomik yostiqlar tavsiya etiladi.";
    targetType = "Memory foam yostiq";
  } else if (type === "stomach") {
    title = "Qorinda uxlaychilar uchun";
    text = "Nafas olishni qiyinlashtirmaydigan, past va juda yumshoq yassi yostiqlarimiz siz uchun eng maqbuli.";
    targetType = "Patli yostiq";
  }

  var resultBox = document.getElementById("quiz-result-box");
  document.getElementById("quiz-result-title").textContent = title;
  document.getElementById("quiz-result-text").textContent = text;
  resultBox.style.display = "flex";

  var btn = document.getElementById("quiz-result-btn");
  btn.onclick = function() {
    currentFilterType = targetType;
    var selectEl = document.getElementById("filter-type");
    if (selectEl) selectEl.value = targetType;
    displayedCount = 10;
    renderProducts();
    window.location.hash = "#store";
  };
}

var currentProcessIndex = 0;
var processTimer = null;

function renderProcess(index) {
  currentProcessIndex = index;
  var step = stepsData[index];
  var imgBox = document.getElementById("process-img-box");
  if (imgBox) {
    imgBox.innerHTML = makeImage(step.imageKey);
  }
  document.getElementById("process-step-num").textContent = step.num;
  document.getElementById("process-title").textContent = step.title;
  document.getElementById("process-desc").textContent = step.desc;

  var listEl = document.getElementById("process-buttons-list");
  if (!listEl) return;
  var html = "";
  for (var i = 0; i < stepsData.length; i++) {
    var st = stepsData[i];
    var activeCls = (i === index) ? "active" : "";
    html += '<button class="process-btn-item ' + activeCls + '" onclick="manualSelectProcess(' + i + ')">';
    html += '<span>0' + (i + 1) + '</span>';
    html += '<div><strong>' + st.title + '</strong></div>';
    html += '</button>';
  }
  listEl.innerHTML = html;
}

function manualSelectProcess(index) {
  if (processTimer) {
    clearInterval(processTimer);
    processTimer = null;
  }
  renderProcess(index);
}

function startProcessTimer() {
  processTimer = setInterval(function() {
    currentProcessIndex = (currentProcessIndex + 1) % stepsData.length;
    renderProcess(currentProcessIndex);
  }, 5000);
}

function renderTimeline() {
  var container = document.getElementById("timeline-container");
  if (!container) return;
  var html = "";
  for (var i = 0; i < timelineData.length; i++) {
    var item = timelineData[i];
    html += '<div class="timeline-item">';
    html += '<div class="timeline-content-card glass-panel">';
    html += '<div class="timeline-img-box">' + makeImage(item.imageKey) + '</div>';
    html += '<div class="timeline-year">' + item.year + '</div>';
    html += '<h3>' + item.title + '</h3>';
    html += '<p>' + item.desc + '</p>';
    html += '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function renderReviews() {
  var track = document.getElementById("reviews-track");
  if (!track) return;
  var html = "";
  for (var k = 0; k < 2; k++) {
    for (var i = 0; i < reviewsData.length; i++) {
      var r = reviewsData[i];
      html += '<div class="review-card">';
      html += '<div class="review-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>';
      html += '<p class="review-text">"' + r.text + '"</p>';
      html += '<div class="review-user-row">';
      html += '<div class="review-avatar-box"><div class="review-avatar-inner">' + makeAvatar(r.avatar) + '</div></div>';
      html += '<div class="review-user-info">';
      html += '<h5>' + r.name + '</h5>';
      html += '<span>' + r.city + '</span>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    }
  }
  track.innerHTML = html;
}

function toggleFaq(btn) {
  var item = btn.parentElement;
  var allItems = document.querySelectorAll(".faq-item");
  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i] !== item) {
      allItems[i].classList.remove("active");
    }
  }
  item.classList.toggle("active");
}

function subscribeNewsletter(e) {
  e.preventDefault();
  var input = document.getElementById("newsletter-email");
  var val = input.value.trim();
  if (val.indexOf("@") === -1 || val.indexOf(".") === -1) {
    showMessage("Iltimos, haqiqiy elektron pochta kiriting!", "error");
    return;
  }
  showMessage("Obuna bo'lganingiz uchun rahmat!", "success");
  input.value = "";
}

function showMessage(text, type) {
  var container = document.getElementById("notifications-container");
  if (!container) return;
  var toast = document.createElement("div");
  toast.className = "notification-toast " + type;
  var icon = type === "success" ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';
  toast.innerHTML = icon + '<span>' + text + '</span><button class="notification-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>';
  container.appendChild(toast);
  setTimeout(function() {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 3500);
}

function handleLiveSearch(query) {
  var container = document.getElementById("search-results-container");
  if (!container) return;
  var q = query.trim().toLowerCase();
  if (!q) {
    container.innerHTML = "";
    return;
  }
  var matches = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().indexOf(q) !== -1 || products[i].type.toLowerCase().indexOf(q) !== -1) {
      matches.push(products[i]);
    }
  }
  if (matches.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:20px;">Hech narsa topilmadi</div>';
    return;
  }
  var html = "";
  for (var j = 0; j < matches.length; j++) {
    var p = matches[j];
    var key = makeKey(p.id);
    html += '<div class="search-result-item" onclick="openDetailModal(' + p.id + '); document.getElementById(\'search-modal\').classList.remove(\'active\');">';
    html += '<div style="display:flex;align-items:center;gap:12px;">';
    html += '<div style="width:40px;height:40px;background:#161933;border-radius:8px;overflow:hidden;display:flex;align-items:center;justify-content:center;">' + makeImage(key) + '</div>';
    html += '<div><strong>' + p.name + '</strong><br><span style="font-size:0.8rem;color:var(--text-muted);">' + p.type + '</span></div>';
    html += '</div>';
    html += '<span style="color:var(--peach);font-weight:700;">' + p.price.toLocaleString() + " so'm" + '</span>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function clickPromoAction() {
  window.location.hash = "#store";
  showMessage("Aksiya 11-noyabr kuni boshlanadi!", "success");
}

function openPromoRules() {
  var modal = document.getElementById("promo-rules-modal");
  if (modal) modal.classList.add("active");
}

function startCountdownTimer() {
  function updateTimer() {
    var now = new Date();
    var year = now.getFullYear();
    var promoDate = new Date(year, 10, 11, 0, 0, 0);
    if (now > promoDate) {
      promoDate = new Date(year + 1, 10, 11, 0, 0, 0);
    }
    var diff = promoDate - now;
    if (diff < 0) diff = 0;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    var dEl = document.getElementById("cd-days");
    var hEl = document.getElementById("cd-hours");
    var mEl = document.getElementById("cd-mins");
    var sEl = document.getElementById("cd-secs");

    if (dEl) dEl.textContent = days < 10 ? "0" + days : days;
    if (hEl) hEl.textContent = hours < 10 ? "0" + hours : hours;
    if (mEl) mEl.textContent = mins < 10 ? "0" + mins : mins;
    if (sEl) sEl.textContent = secs < 10 ? "0" + secs : secs;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}