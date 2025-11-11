function deriveFinalPrice(inputPrice) {
    var finalPrice = inputPrice + inputPrice * 0.19;
    var outputEl = document.getElementById('final-price');
    if (outputEl) {
        outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
    }
}
var formEl = document.querySelector('form');
if (formEl) {
    formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        var fd = new FormData(event.currentTarget);
        var inputPrice = fd.get('price');
        if (inputPrice) {
            deriveFinalPrice(+inputPrice);
        }
    });
}
