function showPrice(productName, price) {
    const priceContainer = document.getElementById('price');
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);

    priceContainer.textContent = `Price for ${productName}: ${formattedPrice}`;
}
