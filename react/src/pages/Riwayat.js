import React, { useState } from 'react';

function Riwayat() {
  // State untuk mengatur tab yang aktif (Pemasukan atau Pengeluaran)
  const [activeTab, setActiveTab] = useState('pemasukan');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="tab4">
      <div className="container-center-riwayat">
        <div className="content-wrapper-riwayat">
          <div className="w-80">
            <div className="custom-header-riwayat">
              <span
                className={`active-riwayat ${activeTab === 'pemasukan' ? 'active' : ''}`}
                onClick={() => handleTabChange('pemasukan')}
                id="pemasukanTab"
              >
                Pemasukan
              </span>
              <span
                className={`active-riwayat ${activeTab === 'pengeluaran' ? 'active' : ''}`}
                onClick={() => handleTabChange('pengeluaran')}
                id="pengeluaranTab"
              >
                Pengeluaran
              </span>
            </div>

            {/* Kontainer Pemasukan */}
            {activeTab === 'pemasukan' && (
              <div className="custom-card-riwayat" id="pemasukanContainer">
                <div className="custom-total-riwayat">
                  <div className="fw-bold">Total Bulan Ini</div>
                  <div>Rp. 2.000.000</div>
                </div>
                <div className="custom-item-riwayat">
                  <div className="d-flex justify-content-between mb-2">
                    <span>10/10/2024</span>
                    <span>21:00</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 500.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>08:23</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 300.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>01:47</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 200.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>00:00</span>
                  </div>
                  <div className="fw-bold">Rp. 2.000.000</div>
                </div>
              </div>
            )}

            {/* Kontainer Pengeluaran */}
            {activeTab === 'pengeluaran' && (
              <div className="custom-card-riwayat" id="pengeluaranContainer">
                <div className="custom-total-riwayat">
                  <div className="fw-bold">Total Bulan Ini</div>
                  <div>Rp. 2.000.000</div>
                </div>
                <div className="custom-item-riwayat">
                  <div className="d-flex justify-content-between mb-2">
                    <span>10/10/2024</span>
                    <span>21:00</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 200.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>08:23</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 300.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>01:47</span>
                  </div>
                  <div className="fw-bold mb-4">Rp. 200.000</div>
                  <hr />
                  <div className="d-flex justify-content-between mb-2">
                    <span>12/10/2024</span>
                    <span>00:00</span>
                  </div>
                  <div className="fw-bold">Rp. 1.000.000</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Riwayat;
