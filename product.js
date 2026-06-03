// Quantità
let qty = 1;
document.getElementById('qty-minus').addEventListener('click', () => {
    if (qty > 1) { qty--; document.getElementById('qty-display').value = qty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
    qty++;
    document.getElementById('qty-display').value = qty;
});

// Tonalità
function selectShade(el, name) {
    document.querySelectorAll('.shade').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('shade-name').textContent = name;
}

// Galleria
function switchImg(thumbEl, src) {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
    document.getElementById('main-img').src = src;
}

// Toast
function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2800);
}

// Wishlist
document.getElementById('btn-wishlist').addEventListener('click', function () {
    const icon = this.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    const active = icon.classList.contains('fas');
    this.style.color = active ? '#D80050' : '';
    this.style.borderColor = active ? '#D80050' : '';
});

// Accordion
function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.accordion-btn').forEach(b => b.classList.remove('open'));
    if (!isOpen) { body.classList.add('open'); btn.classList.add('open'); }
}
