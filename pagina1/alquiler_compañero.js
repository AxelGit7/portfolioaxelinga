document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de manera tradicional

    // Obtener los valores de los filtros
    const zona = document.getElementById("zona").value;
    const genero = document.getElementById("genero").value;
    const gustos = document.getElementById("gustos").value;
    const edad = document.getElementById("edad").value;

    // Array de datos de amigos
    const amigos = [
        { nombre: "Juan", zona: "Berazategui", genero: "masculino", gustos: "musica", edad: "25-34", imagen: "juan.PNG" },
        { nombre: "Maria", zona: "Ranelagh", genero: "femenino", gustos: "futbol", edad: "25-34", imagen: "maria.PNG" },
        { nombre: "Benja", zona: "Platanos", genero: "masculino", gustos: "Play", edad: "18-24", imagen: "benja.PNG" },
        { nombre: "Ana", zona: "Santa Rosa", genero: "femenino", gustos: "cafe", edad: "18-24", imagen: "ana.PNG" },
        { nombre: "Rebeca", zona: "Barrio Luz", genero: "femenino", gustos: "viaje", edad: "18-24", imagen: "rebeca.PNG" },
        { nombre: "Raul", zona: "Platanos", genero: "masculino", gustos: "ejercicio", edad: "25-34", imagen: "raul.PNG" },
        { nombre: "German", zona: "Berazategui", genero: "masculino", gustos: "musica", edad: "18-24", imagen: "german.PNG" },
        { nombre: "Rosario", zona: "Barrio Luz", genero: "femenino", gustos: "dibujar", edad: "18-24", imagen: "rosario.PNG" },
        { nombre: "Valeria", zona: "Berazategui", genero: "femenino", gustos: "viaje", edad: "18-24", imagen: "valeria.PNG" },
        // Agrega más amigos aquí...
    ];

    // Filtrar amigos según los criterios de búsqueda
    const resultados = amigos.filter(amigo => {
        const zonaMatch = zona === "cualquiera" || amigo.zona === zona;
        const generoMatch = genero === "Ambos" || amigo.genero === genero;
        const gustosMatch = gustos === "cualquiera" || amigo.gustos === gustos;
        const edadMatch = edad === "cualquiera" || amigo.edad === edad;

        return zonaMatch && generoMatch && gustosMatch && edadMatch;
    });

    // Mostrar resultados
    mostrarResultados(resultados);
});

function mostrarResultados(resultados) {
    const resultSection = document.getElementById("resultSection");
    const resultsContainer = document.getElementById("results");

    // Limpiar resultados anteriores
    resultsContainer.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(amigo => {
            const amigoDiv = document.createElement("div");
            amigoDiv.className = "amigo"; // Asegúrate de que tengas estilos para esta clase

            amigoDiv.innerHTML = `
                <img src="${amigo.imagen}" alt="${amigo.nombre}" class="amigo-imagen">
                <h4>${amigo.nombre}</h4>
                <h1 style="color: lightsalmon;"> ${amigo.zona}</h1>
                
            `;
            resultsContainer.appendChild(amigoDiv);
        });

        // Mostrar la sección de resultados
        resultSection.style.display = "block";
    } else {
        resultsContainer.innerHTML = "<p>No hay resultados que mostrar.</p>";
        resultSection.style.display = "block"; // Mostrar la sección de resultados aunque no haya coincidencias
    }
}



let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonials() {
    // Oculta todos los testimonios
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));

    // Muestra los 3 testimonios actuales
    for (let i = 0; i < 3; i++) {
        const index = (currentTestimonial + i) % testimonials.length;
        testimonials[index].classList.add('active');
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonials();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonials();
}

// Muestra los testimonios al cargar
showTestimonials();


// Funciones de registro
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    // Aquí puedes agregar la lógica de registro (llamada a la API, validación, etc.)
    console.log(`Registrando con email: ${email} y contraseña: ${password}`);
}

// Funciones de inicio de sesión
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Aquí puedes agregar la lógica de inicio de sesión (llamada a la API, validación, etc.)
    console.log(`Iniciando sesión con email: ${email} y contraseña: ${password}`);
}

// Alternar entre registro e inicio de sesión
function toggleAuth() {
    document.querySelector('.auth-section').classList.toggle('show-register');
}

// Mostrar/ocultar contraseña
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

// Validar requisitos de contraseña
const passwordInput = document.getElementById('register-password');
passwordInput.addEventListener('input', function() {
    const lengthRequirement = document.getElementById('length-requirement');
    const uppercaseRequirement = document.getElementById('uppercase-requirement');
    const numberRequirement = document.getElementById('number-requirement');

    lengthRequirement.classList.toggle('valid', passwordInput.value.length >= 8);
    uppercaseRequirement.classList.toggle('valid', /[A-Z]/.test(passwordInput.value));
    numberRequirement.classList.toggle('valid', /\d/.test(passwordInput.value));
});
