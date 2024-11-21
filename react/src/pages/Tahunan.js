import React from 'react';

function Tahunan() {
  return (
    <section id="rekap3" style={{ display: 'block' }}>
      <div className="container-main-rekap">
        <div className="container-rekap">
          <div className="saldo-container-rekap">
            <p className="saldo-title-rekap">Saldo saat ini</p>
            <p className="saldo-amount-rekap">Rp. 27.950.000</p>
          </div>
          <div className="transaction-summary-rekap">
            <div className="transaction-box-rekap">
              <div className="transaction-icon-rekap">
                <i className="fas fa-arrow-up transaction-amount-out-rekap"></i>
              </div>
              <p className="transaction-label-rekap">Pengeluaran</p>
              <p className="transaction-amount-hari transaction-amount-out-rekap">Rp. 94.450.000</p>
            </div>
            <div className="transaction-box-rekap">
              <div className="transaction-icon-rekap">
                <i className="fas fa-arrow-down transaction-amount-in-rekap"></i>
              </div>
              <p className="transaction-label-rekap">Pemasukan</p>
              <p className="transaction-amount-hari transaction-amount-in-rekap">Rp. 122.400.000</p>
            </div>
          </div>
        </div>

        <div className="container-side-tahun">
          <div className="card-tahun-saldo">
            <div className="card-content-tahun">
              <h1>Good Job <span style={{ color: 'red' }}>‼️</span></h1>
              <p>Sisa saldo kamu lebih besar dibandingkan tahun lalu</p>
            </div>
            <img src="/assets/images/Tahunan.png" alt="tahunan" width="130" height="130" />
          </div>

          <div className="info-tahun">
            <div><span className="red-box-tahun"></span>(card) untuk bulan dengan <span style={{ color: 'red' }}>pengeluaran tertinggi</span> dalam 1 tahun</div>
            <div><span className="green-box-tahun"></span>(card) untuk bulan dengan <span style={{ color: 'green' }}>pemasukan tertinggi</span> dalam 1 tahun</div>
            <div><span className="yellow-box-tahun"></span>(font) untuk bulan dengan <span style={{ color: 'yellow' }}>sisa saldo tertinggi</span> dalam 1 tahun</div>
            <div><span className="black-box-tahun"></span>(font) untuk bulan dengan <span style={{ color: 'blue' }}>sisa saldo terendah</span> dalam 1 tahun</div>
          </div>
        </div>
      </div>

      <div className="container-tahun">
        <div className="header-tahun">
          <i className="fas fa-chevron-left prev-tahun"></i>
          2024
          <i className="fas fa-chevron-right next-tahun"></i>
        </div>
        <div className="grid-tahun">
          {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((month, index) => (
            <div className={`card-tahun ${month.toLowerCase()}`} key={index}>
              <h2>{month}</h2>
              <span>
                <span className="total-pemasukan">Total pemasukan :</span>
                <span className="nilai-pemasukan">Rp. {Math.floor(Math.random() * 10000000) + 8000000}</span>
              </span>
              <span>
                <span className="total-pengeluaran">Total pengeluaran :</span>
                <span className="nilai-pengeluaran">Rp. {Math.floor(Math.random() * 10000000) + 7000000}</span>
              </span>
              <span>
                <span className="sisa-surplus">Sisa/Surplus :</span>
                <span className="nilai-sisa">Rp. {Math.floor(Math.random() * 5000000) + 1000000}</span>
              </span>
              <button>Lihat rincian</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tahunan;
