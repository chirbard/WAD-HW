// Form validation and navigation functionality

document.addEventListener('DOMContentLoaded', function() {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            // Validate both fields are filled
            if (!email || !password) {
                alert('Palun täida mõlemad väljad!'); // Please fill both fields!
                return false;
            }
            
            // Redirect to index.html on successful validation
            window.location.href = 'index.html';
        });
    }
    
    // Add post form handling
    const addPostForm = document.getElementById('addPostForm');
    if (addPostForm) {
        addPostForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const postBody = document.getElementById('postBody').value.trim();
            
            if (!postBody) {
                alert('Palun lisa postituse sisu!'); // Please add post content!
                return false;
            }
            
            // TODO: Lisa siia postituse salvestamise loogika
            alert('Postitus lisatud edukalt!'); // Post added successfully!
            
            // Redirect to index.html
            window.location.href = 'index.html';
        });
    }
    
    // File input handling
    const fileInput = document.getElementById('fileInput');
    const fileLabel = document.querySelector('.file-input-label');
    
    if (fileInput && fileLabel) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name || 'Choose File';
            fileLabel.textContent = fileName;
        });
    }
    
    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // TODO: Lisa siia like'imise loogika (andmebaasi salvestamine)
            this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        });
    });
    
    // Navigation active state management
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// TODO: Lisa siia täiendavad JavaScript funktsioonid:
// - Kasutaja autentimise kontroll
// - Postituste dünaamiline laadimine
// - Pildi üleslaadimise eelvaade
// - Kommentaaride süsteem
// - Otsingu funktsioon