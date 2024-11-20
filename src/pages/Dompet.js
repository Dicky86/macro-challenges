import React, { useState } from "react";

function Dompet() {
  // Inisialisasi daftar dompet dengan saldo awal
  var [wallets, setWallets] = useState([
    { name: "BCA", balance: 0},
    { name: "BRI", balance: 0 },
    { name: "DANA", balance: 0 },
    { name: "Gopay", balance: 0 },
    { name: "ShopeePay", balance: 0 },
    { name: "Tunai", balance: 0 },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newWalletName, setNewWalletName] = useState("");

  const bukaFormDompet = (wallet) => {
    setSelectedWallet(wallet || "");
    setNewWalletName(wallet || "");
    setIsFormVisible(true);
  };

  const tutupForm = () => {
    setIsFormVisible(false);
    setNewAmount("");
    setNewWalletName("");
  };

  const perbaruiDompet = () => {
    if (!newWalletName.trim() || !newAmount || isNaN(newAmount)) {
      alert("Masukkan nama dompet dan jumlah yang valid!");
      return;
    }

    const amount = parseFloat(newAmount);
    setWallets((prevWallets) => {
      const walletIndex = prevWallets.findIndex(
        (wallet) => wallet.name === newWalletName
      );

      if (walletIndex !== -1) {
        // Jika dompet sudah ada, perbarui saldo
        const updatedWallets = [...prevWallets];
        updatedWallets[walletIndex].balance += amount;
        return updatedWallets;
      } else {
        // Jika dompet baru, tambahkan ke daftar
        return [...prevWallets, { name: newWalletName, balance: amount }];
      }
    });

    tutupForm();
  };

  return (
    <section>
      <div className="containersaldo">
        <div className="saldo">
          <h2>Saldo Anda</h2>
          <p>
            Rp.{" "}
            {wallets
              .reduce((total, wallet) => total + wallet.balance, 0)
              .toLocaleString("id-ID")}
          </p>
        </div>

        <div className="daftar-dompet">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="item-dompet"
              onClick={() => bukaFormDompet(wallet.name)}
            >
              <span>{wallet.name}</span>
              <span>Rp. {wallet.balance.toLocaleString("id-ID")}</span>
            </div>
          ))}
        </div>

        <div className="tambah-dompet" onClick={() => bukaFormDompet("")}>
          +
        </div>
      </div>

      {isFormVisible && (
        <div className="wadah-form">
          <div className="form">
            <h3>Nama Dompet</h3>
            <input
              type="text"
              placeholder="Masukkan nama dompet"
              value={newWalletName}
              onChange={(e) => setNewWalletName(e.target.value)}
            />
            <h3>Nominal</h3>
            <input
              type="number"
              placeholder="Masukkan jumlah"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
            <button onClick={perbaruiDompet}>Tambahkan</button>
            <button onClick={tutupForm}>Batal</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dompet;