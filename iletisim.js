document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        status.textContent = 'Lütfen tüm alanları doldurun.';
        status.style.color = 'red';
        return;
      }
  
  
     
      status.textContent = 'Mesajınız başarıyla gönderildi, teşekkürler!';
      status.style.color = '#3caea3';
  
      form.reset();
    });
  });
  