import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Masuk() {
  // State to handle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigation hook

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Add your login logic here (e.g., validate user credentials)
    console.log("Login successful");

    // After successful login, navigate to the Index page
    navigate('/index'); // Redirect to index page after login
  };

  return (
    <section id="login">
      <div className="container-masuk">
        <div className="form-section-masuk">
          <h2>Masuk Sekarang</h2>
          <p>Halo! Selamat datang kembali di Control Money 👋</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group-masuk">
              <label>Email atau Nama Pengguna</label>
              <input
                type="text"
                placeholder="Masukkan Email atau Nama Pengguna"
                required
              />
            </div>
            <div className="input-group-masuk">
              <label>Kata Sandi</label>
              <div className="password-container-masuk">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan Kata Sandi"
                  required
                />
                <i
                  className={`fa-solid fa-eye${showPassword ? '' : '-slash'} toggle-password-masuk`}
                  onClick={togglePassword}
                ></i>
              </div>
              <p className="password-hint-masuk">
                Lupa kata sandi? <a href="#">Klik di sini</a>
              </p>
            </div>
            <button type="submit" className="btn-masuk">
              Masuk
            </button>
            <p className="register-link-masuk">
              Belum memiliki akun?{' '}
              <a href="/daftar" className="link-masuk">Daftar</a>
            </p>
          </form>
        </div>
        <div className="image-section-masuk">
          <img src="/assets/images/Logo fix.png" alt="Logo fix" className="logo-masuk" />
          <img src="/assets/images/computer.png" alt="Computer" className="computer-masuk" />
        </div>
      </div>
    </section>
  );
}

export default Masuk;
