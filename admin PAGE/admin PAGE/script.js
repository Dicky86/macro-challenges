
window.onload = function() {
    document.getElementById('tab1').style.display = 'block'; // Tampilkan tab1 (login)
    document.getElementById('tab2').style.display = 'none'; // Sembunyikan tab2
    document.getElementById('detailAdmin').style.display = 'none'; // Sembunyikan detailAdmin

    // Add event listener for login button
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // After login, show tab2 and hide tab1
        document.getElementById('tab1').style.display = 'none';
        document.getElementById('tab2').style.display = 'block';
    });
};
