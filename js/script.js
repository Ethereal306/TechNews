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

const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit')
checkbox.addEventListener('change', function(){
    if (this.checked){
        submit.classList.remove('disabled');
    } else {
        submit.classList.add('disabled')
    }
});