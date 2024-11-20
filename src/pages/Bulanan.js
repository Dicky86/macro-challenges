import React from 'react';

function Bulanan() {
  return (
    <section id="rekap2" style={{ display: 'block' }}>
      <div className="container-rekap">
        <div className="saldo-container-rekap">
          <p className="saldo-title-rekap">Saldo saat ini</p>
          <p className="saldo-amount-rekap">Rp. 37.000.000</p>
        </div>
        <div className="transaction-summary-rekap">
          <div className="transaction-box-rekap">
            <div className="transaction-icon-rekap">
              <i className="fas fa-arrow-up transaction-amount-out-rekap"></i>
            </div>
            <p className="transaction-label-rekap">Pengeluaran</p>
            <p className="transaction-amount-hari transaction-amount-out-rekap">Rp. 8.800.000</p>
          </div>
          <div className="transaction-box-rekap">
            <div className="transaction-icon-rekap">
              <i className="fas fa-arrow-down transaction-amount-in-rekap"></i>
            </div>
            <p className="transaction-label-rekap">Pemasukan</p>
            <p className="transaction-amount-hari transaction-amount-in-rekap">Rp. 12.500.000</p>
          </div>
        </div>
      </div>

      <div className="image-container-rekap">
        <img src="/assets/images/tips2.png" alt="tips2" className="image-rekap" />
      </div>

      <div className="container-bulan">
        <div className="header-bulan">
          <i className="fas fa-chevron-left prev-bulan"></i>
          Oktober 2024
          <i className="fas fa-chevron-right next-bulan"></i>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Nama dompet</th>
              <th>Asal uang</th>
              <th>Nominal</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01 / 10 / 2024</td>
              <td>BCA</td>
              <td>Upah</td>
              <td className="amount-positive-bulan">+ 5.000.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>BCA</td>
              <td>Bonus</td>
              <td className="amount-positive-bulan">+ 7.000.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Tunai</td>
              <td>Kontrakan</td>
              <td className="amount-negative-bulan">- 900.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Tunai</td>
              <td>Sarapan nasi pecel</td>
              <td className="amount-negative-bulan">- 12.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Shopeepay</td>
              <td>Top up</td>
              <td className="amount-negative-bulan">- 250.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Tunai</td>
              <td>Nasi ayam geprek</td>
              <td className="amount-negative-bulan">- 15.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>02 / 10 / 2024</td>
              <td>Tunai</td>
              <td>Bensin</td>
              <td className="amount-negative-bulan">- 26.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>BRI</td>
              <td>Di tf mama</td>
              <td className="amount-positive-bulan">+ 200.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Gopay</td>
              <td>Sate ayam</td>
              <td className="amount-negative-bulan">- 18.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Tunai</td>
              <td>Belanja bulanan</td>
              <td className="amount-negative-bulan">- 300.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>03 / 10 / 2024</td>
              <td>Tunai</td>
              <td>Parkir</td>
              <td className="amount-negative-bulan">- 5.000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Tunai</td>
              <td>Nasi bakar + es teh</td>
              <td className="amount-negative-bulan">- 15.000</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Bulanan;
