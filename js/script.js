function showPassword(){
    const input = document.getElementById("Password");
    const repeat_input = document.getElementById("repeatPassword");
    const icons = document.getElementById("Icons")
    if (input.type == "password"){
        input.type = "text";
        repeat_input.type = "text"
        icons.className = "bi bi-eye-fill"
    } else {
        input.type = "password";
        repeat_input.type = "password"
        icons.className = "bi bi-eye-slash-fill"
    }
}

function changeMode(){
    const mode_icons = document.getElementById('mode_icons');
    const htmlElement = document.body;
    const current_theme = htmlElement.getAttribute('data-bs-theme');
    if (current_theme == "dark"){
        htmlElement.setAttribute('data-bs-theme', 'light');
        mode_icons.className = 'bi bi-moon-fill text-white'
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        mode_icons.className = 'bi bi-sun-fill'
    }
}

const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit')
checkbox.addEventListener('change', function(){
    if (this.checked){
        submit.classList.remove('disabled');
    } else {
        submit.classList.add('disabled')
    }
    
});

function muatHalaman(namaFile) {
    fetch(namaFile)
        .then(response => {
            if (!response.ok) throw new Error("Gagal memuat halaman");
            return response.text();
        })
        .then(html => {
            // Mengganti jeroan id="isi-konten" tanpa merusak layout luar
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error(error));
}
