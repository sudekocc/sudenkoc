  
const bulten = document.getElementById('bulten');

bulten.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (email) {
    alert(`${email} adresi bültenimize başarıyla abone oldu!`);
    this.reset();
  } else {
    alert('Lütfen geçerli bir e-posta adresi giriniz.');
  }
});
