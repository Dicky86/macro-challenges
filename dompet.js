// dompet.js
// Fungsi untuk membuka form pop-up
function bukaFormDompet(walletName) {
    const formContainer = document.getElementById('wadah-form');
    const walletInput = document.getElementById('nama-dompet');
    const amountInput = document.getElementById('jumlah-dompet');

    // Reset input form
    walletInput.value = walletName ? walletName : '';
    amountInput.value = '';

    // Tampilkan wadah form
    formContainer.style.display = 'block';
}

// Fungsi untuk menutup form pop-up
function tutupForm() {
    const formContainer = document.getElementById('wadah-form');
    
    // Sembunyikan wadah form
    formContainer.style.display = 'none';
}

// Fungsi untuk memformat angka menjadi format mata uang Indonesia
function formatCurrency(value) {
    // Ubah menjadi string dan pisahkan menjadi bagian integer dan desimal
    const parts = value.toFixed(2).split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Tambahkan pemisah ribuan
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    // ini untuk rp,00
    return formattedInteger + ',' + decimalPart;
}

// Fungsi untuk memperbarui dompet
function perbaruiDompet() {
    const walletInput = document.getElementById('nama-dompet').value;
    const amountInput = document.getElementById('jumlah-dompet').value;
    const totalBalanceElement = document.getElementById('saldo-total');
    const walletBalanceElement = document.getElementById(`saldo-${walletInput}`);

    // Validasi input
    if (walletInput.trim() === '' || isNaN(amountInput) || amountInput.trim() === '') {
        alert('Mohon masukkan nama dompet yang valid dan nominal yang benar.');
        return;
    }

    // Memperbarui saldo dompet
    const amount = parseFloat(amountInput);

    // Mengambil total saldo dan menghapus format untuk konversi ke angka
    let totalBalance = parseFloat(totalBalanceElement.textContent.replace(/[Rp. ]/g, '').replace(',', '.')) || 0;
    totalBalance += amount;
    totalBalanceElement.textContent = `Rp. ${formatCurrency(totalBalance)}`;

    // Memperbarui saldo dompet individu
    if (walletBalanceElement) {
        // Mengambil saldo dompet yang ada dan menghapus format untuk konversi ke angka
        let currentWalletBalance = parseFloat(walletBalanceElement.textContent.replace(/[Rp. ]/g, '').replace(',', '.')) || 0;
        currentWalletBalance += amount;
        walletBalanceElement.textContent = `Rp. ${formatCurrency(currentWalletBalance)}`;
    } else {
        // Buat elemen saldo dompet baru jika belum ada
        const newItem = document.createElement('div');
        newItem.className = 'item-dompet';
        newItem.onclick = () => bukaFormDompet(walletInput);
        newItem.innerHTML = `<span>${walletInput}</span> <span id="saldo-${walletInput}">Rp. ${formatCurrency(amount)} </span> <i class="fas fa-chevron-right"></i>`;
        document.getElementById('daftar-dompet').appendChild(newItem);
    }

    // Tutup form setelah memperbarui
    tutupForm();
}
