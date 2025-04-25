// Función para cambiar la imagen, el fondo de la sección y el color del botón según el color
function changeColor(color) {
    const shoeImage = document.getElementById('shoeImage');
    const productDetails = document.getElementById('product-details');
    const orderButton = document.querySelector('.order-button');
    
    // Cambiar imagen de la zapatilla y fondo de la sección de descripción
    switch(color) {
        case 'negra':
            shoeImage.src = 'zapatillas/jordan_nike_negras.png';
            productDetails.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Fondo negro semi-transparente
            orderButton.style.backgroundColor = '#ffff'; // Complementario:blanco
            break;
        case 'roja':
            shoeImage.src = 'zapatillas/jordan_nike_rojas.png';
            productDetails.style.backgroundColor = 'rgb(224, 25, 25, 0.4)'; // Fondo rojo semi-transparente
            orderButton.style.backgroundColor = '#008000'; // Complementario: verde
            break;
        case 'violeta':
            shoeImage.src = 'zapatillas/jordan_nike_violetas.png';
            productDetails.style.backgroundColor = 'rgba(96, 47, 203, 0.7)'; // Fondo violeta semi-transparente
            orderButton.style.backgroundColor = '#FFFF00'; // Complementario: amarillo
            break;
        case 'azul':
            shoeImage.src = 'zapatillas/jordan_nike_azules.png';
            productDetails.style.backgroundColor = 'rgba(34, 66, 174, 0.4)'; // Fondo azul semi-transparente
            orderButton.style.backgroundColor = '#FF7F00'; // Complementario: naranja
            break;
        case 'dorada':
            shoeImage.src = 'zapatillas/jordan_nike_doradas.png';
            productDetails.style.backgroundColor = 'rgba(215, 180, 73, 0.4)'; // Fondo dorado semi-transparente
            orderButton.style.backgroundColor = '#0000FF'; // Complementario: azul
            break;
        default:
            shoeImage.src = 'zapatillas/jordan_nike_negras.png'; // Imagen por defecto
            productDetails.style.backgroundColor = 'rgba(29, 29, 29, 0.4)'; // Fondo negro semi-transparente
            orderButton.style.backgroundColor = '#00FF00'; // Complementario: verde
    }
}




let cart = []; // Array para almacenar los productos del carrito

// Función para agregar productos al carrito
function addToCart(productName, productPrice) {
    // Verificar si el producto ya está en el carrito
    const productIndex = cart.findIndex(item => item.name === productName);
    
    if (productIndex !== -1) {
        // Si ya existe, incrementar la cantidad
        cart[productIndex].quantity++;
    } else {
        // Si no existe, agregarlo al carrito
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart(); // Actualizar el carrito
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Limpiar el carrito
    cartItemsList.innerHTML = '';
    
    let total = 0;
    
    // Agregar los productos al carrito visualmente
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
        total += item.price * item.quantity;
    });
    
    // Mostrar el total
    cartTotal.textContent = total;
}

// Función para realizar el checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Realizando la compra...');
    cart = []; // Vaciar el carrito después de la compra
    updateCart(); // Actualizar el carrito visualmente
});

