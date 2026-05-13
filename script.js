const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Funzioni apertura/chiusura carrello
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});

// Aggiunta prodotti
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        
        cart.push({ name, price });
        updateCartDisplay();
        
        // Apre la sidebar solo dopo il click su acquista
        cartSidebar.classList.add('active');
    });
});

function updateCartDisplay() {
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.innerText = cart.length;
    cartItemsContainer.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; padding-bottom:5px; border-bottom:1px solid #f9f9f9;">
                <div>
                    <div style="font-weight:600; font-size:0.9rem;">${item.name}</div>
                    <div style="color:#D80050; font-size:0.85rem;">€${item.price.toFixed(2)}</div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ccc; cursor:pointer; font-size:1.2rem;">&times;</button>
            </div>`;
    });
    cartTotal.innerText = `€${total.toFixed(2)}`;
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartDisplay();
};

// Carica il carrello all'inizio senza forzare l'apertura della sidebar
updateCartDisplay();