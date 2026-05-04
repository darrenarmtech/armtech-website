const products = [
    { id: 1, brand: 'fluke', name: 'Fluke 87V Digital Multimeter', sku: '87V', price: 'Request Quote', category: 'Electronics & RF', image: 'https://via.placeholder.com/150/f0f0f0/333?text=87V' },
    { id: 2, brand: 'fluke', name: 'Fluke 376 FC True RMS Clamp Meter', sku: '376FC', price: 'Request Quote', category: 'Electronics & RF', image: 'https://via.placeholder.com/150/f0f0f0/333?text=376FC' },
    { id: 3, brand: 'fluke', name: 'Fluke 179 True RMS Multimeter', sku: '179', price: 'Request Quote', category: 'Electronics & RF', image: 'https://via.placeholder.com/150/f0f0f0/333?text=179' },
    { id: 4, brand: 'fluke', name: 'Fluke 117 Electrician Multimeter', sku: '117', price: 'Request Quote', category: 'Electronics & RF', image: 'https://via.placeholder.com/150/f0f0f0/333?text=117' },
    { id: 5, brand: 'fluke', name: 'Fluke 233 Remote Display DMM', sku: '233', price: 'Request Quote', category: 'Electronics & RF', image: 'https://via.placeholder.com/150/f0f0f0/333?text=233' },
    { id: 6, brand: 'lutron', name: 'Lutron LM-8010 HVAC Multi-Function Meter', sku: 'LM-8010', price: 'Request Quote', category: 'Environment', image: 'https://via.placeholder.com/150/f0f0f0/333?text=LM8010' },
    { id: 7, brand: 'lutron', name: 'Lutron SP-7000 Sound Level Meter', sku: 'SP-7000', price: 'Request Quote', category: 'Light & Sound', image: 'https://via.placeholder.com/150/f0f0f0/333?text=SP7000' },
    { id: 8, brand: 'lutron', name: 'Lutron PH-208 pH Meter', sku: 'PH-208', price: 'Request Quote', category: 'Water Quality', image: 'https://via.placeholder.com/150/f0f0f0/333?text=PH208' },
    { id: 9, brand: 'lutron', name: 'Lutron YK-200PCO2 CO2 Meter', sku: 'YK-200PCO2', price: 'Request Quote', category: 'Safety & Gas', image: 'https://via.placeholder.com/150/f0f0f0/333?text=YK200' },
    { id: 10, brand: 'lutron', name: 'Lutron TM-917 Thermometer', sku: 'TM-917', price: 'Request Quote', category: 'Temperature', image: 'https://via.placeholder.com/150/f0f0f0/333?text=TM917' },
    { id: 11, brand: 'hanna', name: 'Hanna HI98130 pH Meter', sku: 'HI98130', price: 'Request Quote', category: 'Water Quality', image: 'https://via.placeholder.com/150/f0f0f0/333?text=HI98130' },
    { id: 12, brand: 'hanna', name: 'Hanna HI98319 EC Meter', sku: 'HI98319', price: 'Request Quote', category: 'Water Quality', image: 'https://via.placeholder.com/150/f0f0f0/333?text=HI98319' },
    { id: 13, brand: 'hanna', name: 'Hanna HI2211 Benchtop pH Meter', sku: 'HI2211', price: 'Request Quote', category: 'Water Quality', image: 'https://via.placeholder.com/150/f0f0f0/333?text=HI2211' },
    { id: 14, brand: 'hanna', name: 'Hanna HI9813-6 pH/EC/TDS Meter', sku: 'HI9813-6', price: 'Request Quote', category: 'Water Quality', image: 'https://via.placeholder.com/150/f0f0f0/333?text=HI9813' },
    { id: 15, brand: 'testo', name: 'Testo 605i Thermohygrometer', sku: '0560 1605', price: 'Request Quote', category: 'Environment', image: 'https://via.placeholder.com/150/f0f0f0/333?text=605i' },
    { id: 16, brand: 'testo', name: 'Testo 270 Cooking Oil Tester', sku: '0563 2750', price: 'Request Quote', category: 'Food & Safety', image: 'https://via.placeholder.com/150/f0f0f0/333?text=270' },
    { id: 17, brand: 'testo', name: 'Testo 440 Air Flow Combo Kit', sku: '0563 4405', price: 'Request Quote', category: 'Environment', image: 'https://via.placeholder.com/150/f0f0f0/333?text=440' },
    { id: 18, brand: 'testo', name: 'Testo 835-H1 IR Thermometer', sku: '0560 8351', price: 'Request Quote', category: 'Temperature', image: 'https://via.placeholder.com/150/f0f0f0/333?text=835H1' },
    ];

const brandLogos = {
        fluke: 'https://drive.google.com/thumbnail?id=15LJElHulkON-boZhHGeODjhN3KtPh9FW&sz=w200',
        lutron: 'https://drive.google.com/thumbnail?id=1Jn8pjeAW-nxmokxkVQacservccj_BLQf&sz=w200',
        hanna: 'https://drive.google.com/thumbnail?id=1V7ssFoJwY6tsOm5y-p4rl000GJ7Xapfu&sz=w200',
        testo: ''
};

let quoteCart = [];

document.addEventListener('DOMContentLoaded', () => { renderProducts('all'); setupFilters(); loadQuoteCart(); });

function renderProducts(brandFilter) {
        const grid = document.getElementById('productsGrid');
        const filtered = brandFilter === 'all' ? products : products.filter(p => p.brand === brandFilter);
        grid.innerHTML = filtered.map(product => `
                <div class="product-card ${quoteCart.includes(product.id) ? 'in-quote' : ''}" onclick="toggleQuote(${product.id})">
                            ${brandLogos[product.brand] ? `<img src="${brandLogos[product.brand]}" alt="${product.brand}" class="brand-logo">` : '<div style="height:20px;"></div>'}
                                        <img src="${product.image}" alt="${product.name}" class="product-image">
                                                    <div class="product-info">
                                                                    <div class="product-name">${product.name}</div>
                                                                                    <div class="product-sku">${product.sku}</div>
                                                                                                    <div class="product-price">${product.price}</div>
                                                                                                                    <span class="product-category">${product.category}</span>
                                                                                                                                </div>
                                                                                                                                        </div>`).join('');
}

function setupFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                                    btn.classList.add('active');
                                    renderProducts(btn.dataset.brand);
                    });
        });
}

function toggleQuote(productId) {
        const index = quoteCart.indexOf(productId);
        if (index > -1) quoteCart.splice(index, 1); else quoteCart.push(productId);
        saveQuoteCart(); updateQuoteUI(); renderProducts(getActiveBrand());
}

function getActiveBrand() { const b = document.querySelector('.filter-btn.active'); return b ? b.dataset.brand : 'all'; }

function updateQuoteUI() {
        const countEl = document.getElementById('quoteCount');
        const quoteBtn = document.getElementById('quoteBtn');
        if (quoteCart.length > 0) {
                    countEl.textContent = quoteCart.length; countEl.style.display = 'flex';
                    const sel = products.filter(p => quoteCart.includes(p.id));
                    const msg = 'Hi, quote request:\n' + sel.map(p => p.name + ' (' + p.sku + ')').join('\n');
                    quoteBtn.href = 'https://wa.me/6591234567?text=' + encodeURIComponent(msg);
        } else { countEl.style.display = 'none'; quoteBtn.href = 'https://wa.me/6591234567'; }
}

function saveQuoteCart() { localStorage.setItem('armtechCart', JSON.stringify(quoteCart)); }
function loadQuoteCart() { const s = localStorage.getItem('armtechCart'); if (s) { quoteCart = JSON.parse(s); updateQuoteUI(); } }
