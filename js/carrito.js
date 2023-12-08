document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón del carrito en el navbar
    const cartButton = document.getElementById("Button");

    // Obtener referencia a todos los controles del carrito
    const cartControls = document.querySelectorAll(".div3");

    // Agregar evento a todos los controles del carrito
    cartControls.forEach((controls) => {
        const subtractButton = controls.querySelector(".div3-menos");
        const addButton = controls.querySelector(".div3-mas");

        let quantity = 0;

        subtractButton.addEventListener("click", subtractFromCart);
        addButton.addEventListener("click", addToCart);

        function subtractFromCart() {
            if (quantity > 0) {
                quantity--;
            }
            updateCart();
        }

        function addToCart() {
            quantity++;
            updateCart();
        }

        function updateCart() {
            cartButton.textContent = "Carrito (" + quantity + ")";
        }
    });
});