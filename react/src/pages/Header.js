import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <header>
      <nav>
        <div className="logo header-item">
          <img
            src="/assets/images/Logo fix.png"
            alt="Logo fix"
            className="logo-image"
          />
        </div>
        <ul className="navbar">
          <li className="header-item">
            <Link to="/dompet">Dompet</Link>
          </li>
          <li className="header-item">
            <Link to="/kelola">Kelola Keuangan</Link>
          </li>
          <li className="header-item">
            <Link to="/rekap">Rekap Keuangan</Link>
          </li>
          <li className="header-item">
            <Link to="/riwayat">Riwayat</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          {isLoggedIn ? (
            // Jika sudah login, tampilkan ikon profil yang mengarah ke halaman profil
            <Link to="/profil">
              <span
                id="authButtonProfile"
                className="material-icons profile-icon"
                title="Profil"
              >
                account_circle
              </span>
            </Link>
          ) : (
            <>
              <button className="register-btn header-item" onClick={handleLogin}>
                <Link to="/daftar" className="daftar">
                  Daftar
                </Link>
              </button>
              <button className="login-btn header-item" onClick={handleLogin}>
                <Link to="/masuk" className="masuk">
                  Masuk
                </Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
