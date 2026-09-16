// ===== MENU HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Buka tutup menu
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Tutup menu saat klik link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFEK =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(236, 72, 153, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        navbar.style.boxShadow = '0 2px 15px rgba(236, 72, 153, 0.1)';
    }
});

// ===== LINK AKTIF SAAT SCROLL =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let currentId = '';
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
});

// ===== FORM KONTAK =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Jangan muat ulang halaman

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Cek kolom kosong
    if (!name || !email || !message) {
        formStatus.textContent = '⚠️ Semua kolom wajib diisi!';
        formStatus.style.color = '#e11d48';
        return;
    }

    // Cek format email
    if (!email.includes('@') || !email.includes('.')) {
        formStatus.textContent = '⚠️ Email tidak valid!';
        formStatus.style.color = '#e11d48';
        return;
    }

    // Berhasil
    formStatus.textContent = '✅ Pesan terkirim! Terima kasih 💖';
    formStatus.style.color = '#ec4899';

    // Kosongkan form setelah 4 detik
    setTimeout(function() {
        contactForm.reset();
        formStatus.textContent = '';
    }, 4000);
});
