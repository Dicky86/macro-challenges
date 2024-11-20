import React, { useState } from 'react';

function Profil() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [editProfileVisible, setEditProfileVisible] = useState(false);

  const handleClick = (section) => {
    if (section === 'Edit Profil Pengguna') {
      setProfileVisible(false);
      setEditProfileVisible(true);
    } else {
      alert(`Menu ${section} dipilih`);
    }
  };

  const togglePassword = () => {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  };

  return (
    <>
      {profileVisible && (
        <section id="profil">
          <div className="profil-container">
            <div className="containerprofil">
              <div className="profile">
                <div className="avatar">
                  <div className="profile-pic"></div>
                  <div className="edit-iconprofil">✏️</div>
                </div>
                <h2>Sigma Coders</h2>
                <p>sigmacoders@gmail.com | +62 812345678</p>
              </div>
              <div className="menu">
                <div className="menu-item" onClick={() => handleClick('Edit Profil Pengguna')}>
                  <span>✏️ Edit profil pengguna</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Notifikasi')}>
                  <span>🔔 Notifikasi</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Bahasa')}>
                  <span>🌐 Bahasa</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Hubungi Kami')}>
                  <span>📞 Hubungi kami</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Privasi & Keamanan')}>
                  <span>🔒 Privasi & keamanan</span>
                  <span className="arrow">❯</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {editProfileVisible && (
  <section id="editProfile">
    <div className="kontainerProfil">
      <div className="headerProfil">
        <div className="fotoProfil"></div>
        <h1 className="namaGrup">kelompok6b</h1>
      </div>

      <form className="formProfil">
        <div className="formGrupProfil">
          <label htmlFor="account-name">Nama Akun</label>
          <div className="inputWrapper">
            <input type="text" id="account-name" placeholder="Masukkan Nama Akun" />
            <span className="ikonEdit">✎</span>
          </div>
        </div>
        <div className="formGrupProfil">
          <label htmlFor="email">Email</label>
          <div className="inputWrapper">
            <input type="email" id="email" placeholder="Masukkan Email" />
            <span className="ikonEdit">✎</span>
          </div>
        </div>
        <div className="formGrupProfil">
          <label htmlFor="phone">No Telepon</label>
          <div className="inputWrapper">
            <input type="tel" id="phone" placeholder="Masukkan No Telepon" />
            <span className="ikonEdit">✎</span>
          </div>
        </div>
        <div className="formGrupProfil">
          <label htmlFor="password">Kata Sandi</label>
          <div className="inputWrapper">
            <input type="password" id="password" placeholder="Masukkan Kata Sandi" />
            <i className="fa-solid fa-eye-slash togglePassword" onClick={togglePassword}></i>
            <span className="ikonEdit">✎</span>
          </div>
        </div>

        <div className="tombolFormProfil">
          <button type="button" className="tombolBatal" onClick={() => setEditProfileVisible(false)}>Batal</button>
          <button type="submit" className="tombolSimpan">Simpan</button>
        </div>
      </form>
    </div>
  </section>
)}
    </>
  );
}

export default Profil;