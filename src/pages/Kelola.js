import React from 'react';
import { useNavigate } from 'react-router-dom';

function Kelola() {
  const navigate = useNavigate(); 

  const handleSimpanClick = () => {
    navigate('/grafik');
  };

  return (
    <section id="kelola" style={{ display: 'block' }}>
      <div className="kelola-hero-section">
        <h2>Langkah awal dalam mengelola keuangan yang bijak adalah dengan menentukan anggaran secara terencana</h2>
      </div>
      <div className="kelola-image-container">
        <img src="/assets/images/card Homepage.png" alt="Card Homepage" className="kelola-card-homepage" />
      </div>
      <div className="kelola-form-container">
        <h3 className="kelola-form-title">ATUR BUDGET BULANAN</h3>
        <label htmlFor="nominal" className="kelola-label">Nominal</label>
        <div className="kelola-input-group">
          <span>Rp. </span>
          <input type="number" id="nominal" placeholder="0" />
        </div>
        <button className="kelola-button" onClick={handleSimpanClick}>Simpan</button>
      </div>
    </section>
  );
}

export default Kelola;
