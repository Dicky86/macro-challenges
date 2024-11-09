const form = document.getElementById('expense-form');

document.querySelector('button').addEventListener('click', function() {
    simpan();
});

function simpan() {
    alert("Data telah disimpan!");
    form.querySelectorAll('input, textarea').forEach(input => {
        input.value = '';
    });
}
