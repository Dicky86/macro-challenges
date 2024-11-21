import React from 'react';

function Hari() {
  return (
    <section id="rekap1" style={{ display: 'block' }}>
      <div className="container-rekap">
        <div className="saldo-container-rekap">
          <p className="saldo-title-rekap">Saldo saat ini</p>
          <p className="saldo-amount-rekap">Rp. 577.000</p>
        </div>
        <div className="transaction-summary-rekap">
          <div className="transaction-box-rekap">
            <div className="transaction-icon-rekap">
              <i className="fas fa-arrow-up transaction-amount-out-rekap"></i>
            </div>
            <p className="transaction-label-rekap">Pengeluaran</p>
            <p className="transaction-amount-hari transaction-amount-out-rekap">Rp. 74.000</p>
          </div>
          <div className="transaction-box-rekap">
            <div className="transaction-icon-rekap">
              <i className="fas fa-arrow-down transaction-amount-in-rekap"></i>
            </div>
            <p className="transaction-label-rekap">Pemasukan</p>
            <p className="transaction-amount-hari transaction-amount-in-rekap">Rp. 350.000</p>
          </div>
        </div>
      </div>

      <div className="image-container-rekap">
        <img src="/assets/images/tips2.png" alt="tips2" className="image-rekap" />
      </div>

      <h2>List pemasukan kamu hari ini (22/10) :</h2>
      <table className="table-hari">
        <thead>
          <tr>
            <th className="th-hari">Nama dompet</th>
            <th className="th-hari">Asal uang</th>
            <th className="th-hari">Nominal</th>
            <th className="th-hari">Catatan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-hari">
            <td className="td-hari">BRI</td>
            <td className="td-hari">Ila bayar hutang</td>
            <td className="td-hari">50.000</td>
            <td className="td-hari">Sudah lunas</td>
          </tr>
          <tr className="tr-hari">
            <td className="td-hari">Tunai</td>
            <td className="td-hari">Dikasi tante</td>
            <td className="td-hari">300.000</td>
            <td className="td-hari">-</td>
          </tr>
        </tbody>
      </table>

      <h2>List pengeluaran kamu hari ini (22/10) :</h2>
      <table className="table-hari">
        <thead>
          <tr className="tr-hari">
            <th className="th-hari">Nama dompet</th>
            <th className="th-hari">Kebutuhan</th>
            <th className="th-hari">Nominal</th>
            <th className="th-hari">Catatan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-hari">
            <td className="td-hari">Tunai</td>
            <td className="td-hari">Sarapan nasi kuning</td>
            <td className="td-hari">12.000</td>
            <td className="td-hari">-</td>
          </tr>
          <tr className="tr-hari">
            <td className="td-hari">Tunai</td>
            <td className="td-hari">Bensin</td>
            <td className="td-hari">25.000</td>
            <td className="td-hari">-</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Hari;
