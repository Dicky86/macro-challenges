import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation

function Daftar() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigation hook

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Registration successful");

    navigate('/index'); 
  };

  return (
    <section id="register">
      <div className="container-daftar">
        <div className="form-section-daftar">
          <h2>Daftar Sekarang</h2>
          <p>Halo! Selamat datang di website Control Money 👋</p>
          <form onSubmit={handleSubmit}>
            <div className="input-row-daftar">
              <div className="input-group-daftar">
                <label>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan Nama Lengkap" required />
              </div>
              <div className="input-group-daftar">
                <label>Nama Pengguna</label>
                <input type="text" placeholder="Buat Nama Pengguna" required />
              </div>
            </div>
            <div className="input-row-daftar">
              <div className="input-group-daftar">
                <label>Email</label>
                <input type="email" placeholder="Masukkan Email" required />
              </div>
              <div className="input-group-daftar">
                <label>Kata Sandi</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password-daftar"
                  placeholder="Buat Kata Sandi"
                  required
                />
                <i
                  className={`fa-solid fa-eye${showPassword ? '' : '-slash'} toggle-password-daftar`}
                  onClick={togglePassword}
                ></i>
                <p className="password-hint-daftar">
                  Kata sandi minimal terdiri dari 6 digit angka atau huruf
                </p>
              </div>
            </div>
            <button type="submit" className="btn-daftar">
              Daftar
            </button>
            <p className="login-link-daftar">
              Sudah memiliki akun?{' '}
              <a href="/masuk" className="link-daftar">
                Masuk
              </a>
            </p>
          </form>
        </div>
        <div className="image-section-daftar">
          <img src="/assets/images/Logo fix.png" alt="Logo fix" className="logo-daftar" />
          <img src="/assets/images/computer.png" alt="Computer" className="computer-daftar" />
        </div>
      </div>
    </section>
  );
}

export default Daftar;
