import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Grafik() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [formType, setFormType] = useState(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleFormSelection = (type) => {
    setIsPopupVisible(false);
    if (type === 'Pemasukan') {
      navigate('/pemasukan');
    } else if (type === 'Pengeluaran') {
      navigate('/pengeluaran');
    }
  };

  return (
    <section id="kelolaGrafik" style={{ display: 'block' }}>
      <div className="kelola-summary">
        <div className="kelola-month-nav">
          <button id="kelola-prevMonth" className="kelola-navButton">←</button>
          <h2 id="kelola-bulanTahun">Oktober 2024</h2>
          <button id="kelola-nextMonth" className="kelola-navButton">→</button>
        </div>
        <p>Total Pengeluaran</p>
        <p>Rp. 0</p>
        <p>Sisa Budget Terpantau Aman!</p>
      </div>

      <div className="kelola-charts">
        <div className="kelola-chart-card">
          <p>Grafik Pemasukan Mingguan</p>
          <canvas id="kelola-chart1"></canvas>
        </div>
        <div className="kelola-chart-card">
          <p>Sisa Budget</p>
          <canvas id="kelola-chart2"></canvas>
        </div>
        <div className="kelola-chart-card">
          <p>Grafik Pengeluaran Mingguan</p>
          <canvas id="kelola-chart3"></canvas>
        </div>
      </div>

      <section className="kelola-catat-transaksi">
        <hr className="kelola-line-left" />
        <p>Catat Transaksi</p>
        <hr className="kelola-line-right" />
      </section>

      <div className="container">
        <div className="item">
          <span>Upah</span>
          <span className="income">+Rp. 5.000.000</span>
        </div>
        <div className="item">
          <span>Kontrakan</span>
          <span className="expense">-Rp. 900.000</span>
        </div>
        <div className="item">
          <span>Di TF mama</span>
          <span className="income">+Rp. 200.000</span>
        </div>
        <div className="item">
          <span>Bonus</span>
          <span className="income">+Rp. 7.000.000</span>
        </div>
        <div className="item">
          <span>Biaya Makan 1bln</span>
          <span className="expense">-Rp. 1.000.000</span>
        </div>

        <div className="kelola-button-container">
          <button id="kelola-addRecordBtn" onClick={togglePopup}>+ TAMBAH CATATAN BARU</button>
        </div>
      </div>

      <div className="kelola-rekap-container">
        <Link to="/rekap" className="kelola-rekap-button">
          Cek rekap keuanganmu
        </Link>
      </div>

      {isPopupVisible && (
        <div className="grafik-popup-overlay">
          <div className="grafik-popup">
            <button onClick={togglePopup}>&times;</button>
            <p id="kelola-pemasukanBtn" onClick={() => handleFormSelection('Pemasukan')}>Pemasukan</p>
            <hr />
            <p id="kelola-pengeluaranBtn" onClick={() => handleFormSelection('Pengeluaran')}>Pengeluaran</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Grafik;
