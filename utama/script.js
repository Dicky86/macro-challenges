// Fungsi untuk menyembunyikan semua section dan menampilkan hanya section yang sesuai
function showSection(sectionId) {
  const sections = document.querySelectorAll("main > section"); // Pilih semua section di dalam main
  sections.forEach((section) => {
    section.style.display = "none"; // Sembunyikan semua section
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block"; // Tampilkan section yang sesuai dengan id
  }
}
function showTab(tabId) {
  // Sembunyikan semua tab
  document.querySelectorAll('section[id^="tab"]').forEach((tab) => {
    tab.style.display = "none";
  });

  // Tampilkan tab yang dipilih
  document.getElementById(tabId).style.display = "block";
}

//Login
document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.querySelector(".register-btn");
  const loginButton = document.querySelector(".login-btn");
  const registerSection = document.getElementById("register");
  const loginSection = document.getElementById("login");
  const heroSection = document.querySelector(".hero");

  // Event handler untuk tombol "Daftar"
  registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    heroSection.style.display = "none";
    loginSection.style.display = "none";
    registerSection.style.display = "block";
  });

  // Event handler untuk tombol "Masuk"
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    heroSection.style.display = "none";
    registerSection.style.display = "none";
    loginSection.style.display = "block";
  });

  // Event handler untuk tombol Daftar (setelah mengisi form)
  const registerForm = document.querySelector("#register form");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    window.location.href = "index.html";
  });

  const loginForm = document.querySelector("#login form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    window.location.href = "index.html";
  });
});

function goToHome() {
  showSection("tab");
}

document.getElementById("navTab1").addEventListener("click", function () {
  showSection("tab1");
});
document.getElementById("navTab2").addEventListener("click", function () {
  showSection("tab2");
});
document.getElementById("navTab3").addEventListener("click", function () {
  showSection("tab3");
});
document.getElementById("navTab4").addEventListener("click", function () {
  showSection("tab4");
});
document.getElementById("authButtonProfile").addEventListener("click", function () {
  showSection("profil");
});

document.querySelector(".logo-image").addEventListener("click", goToHome);
document.addEventListener("DOMContentLoaded", function () {
  showSection("tab");
});

// dompet.js
function bukaFormDompet(walletName) {
  const formContainer = document.getElementById("wadah-form");
  const walletInput = document.getElementById("nama-dompet");
  const amountInput = document.getElementById("jumlah-dompet");
  walletInput.value = walletName ? walletName : "";
  amountInput.value = "";

  // Tampilkan wadah form
  formContainer.style.display = "block";
}
function tutupForm() {
  const formContainer = document.getElementById("wadah-form");
  formContainer.style.display = "none";
}
function formatCurrency(value) {
  const parts = value.toFixed(2).split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedInteger + "," + decimalPart;
}

// perbarui dompet
function perbaruiDompet() {
  const walletInput = document.getElementById("nama-dompet").value;
  const amountInput = document.getElementById("jumlah-dompet").value;
  const totalBalanceElement = document.getElementById("saldo-total");
  const walletBalanceElement = document.getElementById(`saldo-${walletInput}`);

  // Validasi input
  if (walletInput.trim() === "" || isNaN(amountInput) || amountInput.trim() === "") {
    alert("Mohon masukkan nama dompet yang valid dan nominal yang benar.");
    return;
  }
  const amount = parseFloat(amountInput);

  let totalBalance = parseFloat(totalBalanceElement.textContent.replace(/[Rp. ]/g, "").replace(",", ".")) || 0;
  totalBalance += amount;
  totalBalanceElement.textContent = `Rp. ${formatCurrency(totalBalance)}`;

  if (walletBalanceElement) {
    let currentWalletBalance = parseFloat(walletBalanceElement.textContent.replace(/[Rp. ]/g, "").replace(",", ".")) || 0;
    currentWalletBalance += amount;
    walletBalanceElement.textContent = `Rp. ${formatCurrency(currentWalletBalance)}`;
  } else {
    //nambahin dompet baru
    const newItem = document.createElement("div");
    newItem.className = "item-dompet";
    newItem.onclick = () => bukaFormDompet(walletInput);
    newItem.innerHTML = `<span>${walletInput}</span> <span id="saldo-${walletInput}">Rp. ${formatCurrency(amount)} </span> <i class="fas fa-chevron-right"></i>`;
    document.getElementById("daftar-dompet").appendChild(newItem);
  }
  tutupForm();
}
//fitur kelola keuangan//

//FOOTER//
document.getElementById("home").addEventListener("click", function () {
  showSection("tab");
});
document.getElementById("about").addEventListener("click", function () {
  showSection("tentangKami");
});
document.getElementById("quest").addEventListener("click", function () {
  showSection("faq");
});
document.getElementById("contact").addEventListener("click", function () {
  showSection("hubungiKami");
});
//faq js//
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling;
    if (content && content.classList.contains("faq-content")) {
      item.classList.toggle("active");
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  });
});
//hubungi kami//
function showPopup(event) {
  event.preventDefault();
  document.getElementById("popupOverlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}
//edit profil
function togglePassword() {
  const passwordField = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordField.type = "password";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
}
//rekap//
document.getElementById("harini").addEventListener("click", function () {
  showSection("rekap1");
});
document.getElementById("bulanan").addEventListener("click", function () {
  showSection("rekap2");
});
document.getElementById("tahunan").addEventListener("click", function () {
  showSection("rekap3");
});
//RIWAYAT//
// Riwayat
document.getElementById("pemasukanTab").addEventListener("click", function () {
  toggleSection("pemasukan");
});

document.getElementById("pengeluaranTab").addEventListener("click", function () {
  toggleSection("pengeluaran");
});

function toggleSection(id) {
  document.getElementById("pemasukanContainer").style.display = id === "pemasukan" ? "block" : "none";
  document.getElementById("pengeluaranContainer").style.display = id === "pengeluaran" ? "block" : "none";
  document.getElementById("pemasukanTab").classList.toggle("active-riwayat", id === "pemasukan");
  document.getElementById("pengeluaranTab").classList.toggle("active-riwayat", id === "pengeluaran");
}
//kelola//
// Step 1: Save Monthly Budget and Show Graph
document.getElementById('kelolaSimpanBtn').addEventListener('click', function() {
  const budgetValue = document.getElementById('nominal').value;

  // Save the budget (for now just displaying it in the console or updating the summary)
  if (budgetValue) {
      const totalBudget = parseFloat(budgetValue.replace('Rp. ', '').replace(',', ''));
      document.querySelector('.kelola-summary p:nth-child(2)').textContent = `Rp. ${totalBudget.toLocaleString()}`;

      // Store the total budget value to use for calculations
      localStorage.setItem('totalBudget', totalBudget);

      // Show the next tab (kelolaGrafik)
      document.getElementById('tab2').style.display = 'none';
      document.getElementById('kelolaGrafik').style.display = 'block';
  } else {
      alert('Please enter a valid budget');
  }
});

// Show Popup on 'Tambah Catatan Baru' button click
document.getElementById('kelola-addRecordBtn').addEventListener('click', function() {
  document.getElementById('kelola-popupForm2').style.display = 'flex';
});

// Event listener for Pemasukan button
document.getElementById('kelola-pemasukanBtn').addEventListener('click', function() {
  document.getElementById('kelola-popupForm2').style.display = 'none'; 
  document.getElementById('formIn').style.display = 'block'; 
  document.getElementById('formOut').style.display = 'none'; 
  document.getElementById('kelolaGrafik').style.display = 'none'; 
});

// Event listener for Pengeluaran button
document.getElementById('kelola-pengeluaranBtn').addEventListener('click', function() {
  document.getElementById('kelola-popupForm2').style.display = 'none'; 
  document.getElementById('formOut').style.display = 'block';
  document.getElementById('formIn').style.display = 'none'; 
  document.getElementById('kelolaGrafik').style.display = 'none'; 
});

document.addEventListener("DOMContentLoaded", function () {
  const kelolaAddRecordBtn = document.getElementById("kelola-addRecordBtn");
  const pemasukanBtn = document.getElementById("kelola-pemasukanBtn");
  const pengeluaranBtn = document.getElementById("kelola-pengeluaranBtn");
  const popupForm = document.getElementById("kelola-popupForm2");
  const formInSection = document.getElementById("formIn");
  const formOutSection = document.getElementById("formOut");
  const kelolaGrafikSection = document.getElementById("kelolaGrafik");

  // Menampilkan pop-up saat tombol "Tambah Catatan Baru" diklik
  kelolaAddRecordBtn.addEventListener("click", function () {
    popupForm.style.display = "block";
  });

  // Navigasi ke section "formIn" saat tombol "Pemasukan" diklik
  pemasukanBtn.addEventListener("click", function () {
    popupForm.style.display = "none"; 
    formInSection.style.display = "block"; 
    formInSection.scrollIntoView({ behavior: "smooth" }); 
  });

  // Navigasi ke section "formOut" saat tombol "Pengeluaran" diklik
  pengeluaranBtn.addEventListener("click", function () {
    popupForm.style.display = "none"; 
    formOutSection.style.display = "block"; 
    formOutSection.scrollIntoView({ behavior: "smooth" }); 
  });

  // Navigasi ke "kelolaGrafik" saat tombol "Simpan" di formIn atau formOut diklik
  const simpanButtons = document.querySelectorAll("#formIn button, #formOut button");
  simpanButtons.forEach((button) => {
    button.addEventListener("click", function () {
      formInSection.style.display = "none"; 
      formOutSection.style.display = "none"; 
      kelolaGrafikSection.style.display = "block"; 
      kelolaGrafikSection.scrollIntoView({ behavior: "smooth" }); 
    });
  });
});


document.querySelector('.kelola-rekap-button').addEventListener('click', function () {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });

  // Tampilkan section dengan ID "tab3"
  const tab3Section = document.getElementById('tab3');
  if (tab3Section) {
    tab3Section.style.display = 'block'; 
    tab3Section.scrollIntoView({ behavior: 'smooth' }); 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const selengkapnyaLink = document.querySelector('.footerfaq a');

  if (selengkapnyaLink) {
      selengkapnyaLink.addEventListener('click', function (event) {
          event.preventDefault(); // Mencegah perilaku default link

          // Sembunyikan semua section kecuali "hubungiKami"
          const allSections = document.querySelectorAll('section');
          const hubungiKamiSection = document.getElementById('hubungiKami');

          if (hubungiKamiSection) {
              allSections.forEach(section => {
                  section.style.display = 'none'; // Sembunyikan semua section
              });

              hubungiKamiSection.style.display = 'block'; // Tampilkan "Hubungi Kami"
              hubungiKamiSection.scrollIntoView({ behavior: 'smooth' }); // Scroll ke "Hubungi Kami"
          }
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const closePopupButton = document.querySelector('.close-popup');
  const tabSection = document.getElementById('tab');

  if (closePopupButton && tabSection) {
      closePopupButton.addEventListener('click', function () {
          // Sembunyikan popup
          const popup = document.getElementById('popup');
          const overlay = document.getElementById('popupOverlay');
          if (popup) popup.style.display = 'none';
          if (overlay) overlay.style.display = 'none';

          // Tampilkan "tab" dan scroll ke sana
          tabSection.style.display = 'block';
          tabSection.scrollIntoView({ behavior: 'smooth' });
      });
  }
});

