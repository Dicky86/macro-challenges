import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Pengeluaran() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
   
    navigate('/grafik'); 
  };

  return (
    <section id="pengeluaran" style={{ display: 'block' }}>
      <div className="inputkelola-header-and-form">
        <h2>Pengeluaran</h2>
        <div className="inputkelola-form-and-illustration">
          <form id="expense-form" onSubmit={handleSubmit}> 
            <div className="inputkelola-form-group">
              <label className="inputkelola-date-label">Tanggal</label>
              <input type="date" placeholder="Tanggal-Bulan-Tahun" required />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-wallet-name-label">Nama Dompet</label>
              <input
                type="text"
                placeholder="Masukkan nama dompet anda"
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-needs-label">Kebutuhan</label>
              <input
                type="text"
                placeholder="Tulis kebutuhan anda"
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-amount-label">Nominal</label>
              <input type="number" placeholder="Rp." required />
            </div>
            <div className="inputkelola-form-group inputkelola-full-width">
              <label className="inputkelola-notes-label">Catatan</label>
              <textarea
                placeholder="Masukkan catatan tambahan"
                rows="4"
                required
              ></textarea>
              <button className="btn-kelola" type="submit">
                Simpan
              </button>
            </div>
          </form>
          <div className="inputkelola-illustration">
            <img src="/assets/images/computer.png" alt="Ilustrasi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pengeluaran;
