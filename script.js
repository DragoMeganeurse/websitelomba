// Ambil semua tombol menggunakan ID atau kelas
const cerdasCermatBtn = document.getElementById('cerdasCermat');
const berceritaBtn = document.getElementById('bercerita');
const pidatoBtn = document.getElementById('pidato');

// Fungsi untuk menambah animasi menggunakan JavaScript
function animateButton(button) {
    // Tambahkan kelas 'active' saat tombol diklik
    button.addEventListener('click', () => {
        button.classList.add('clicked');

        // Mengembalikan ke keadaan awal setelah 300ms
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
}

// Panggil fungsi animasi untuk setiap tombol
animateButton(cerdasCermatBtn);
animateButton(berceritaBtn);
animateButton(pidatoBtn);
