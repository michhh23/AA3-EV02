
function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}


function cerrarAlerta() {
    const alertBox = document.getElementById('error-alert');
    alertBox.classList.add('hidden');
}

function toggleRegPassword() {
    const passwordInput = document.getElementById('regPassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}


const formRegistro = document.getElementById('form-registro');
if (formRegistro) {
    formRegistro.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("¡Código de verificación enviado al teléfono registrado!");
        
        window.location.href = "roles.html";
    });
}

const formAlerta = document.getElementById('form-crear-alerta');
if (formAlerta) {
    formAlerta.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("¡Alerta emitida exitosamente a los productores!");
        window.location.href = "alerta-detalle.html";
    });
}