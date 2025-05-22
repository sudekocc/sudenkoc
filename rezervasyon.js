
function tarihGecerliMi(tarih) {
    return !isNaN(Date.parse(tarih));
  }
  
  function tarihDuzgunMu(giris, cikis) {
    const girisTarihi = new Date(giris);
    const cikisTarihi = new Date(cikis);
    return girisTarihi < cikisTarihi;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
  
    const form = document.getElementById('reservation-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const tamAd = form.tamAd.value.trim();
      const email = form.email.value.trim();
    
      const checkin = form.checkin.value;
      const checkout = form.checkout.value;
      const accommodationType = form.accommodationType.value;
      const misafirSayisi = Number(form.misafirSayisi.value);
  
      
      if (!tamAd || !email || !checkin || !checkout || !accommodationType) {
        alert('Lütfen zorunlu tüm alanları doldurunuz.');
        return;
      }
    
      if (!tarihGecerliMi(checkin) || !tarihGecerliMi(checkout)) {
        alert('Lütfen geçerli giriş ve çıkış tarihleri giriniz.');
        return;
      }
    
      if (!tarihDuzgunMu(checkin, checkout)) {
        alert('Çıkış tarihi, giriş tarihinden sonra olmalıdır.');
        return;
      }
    
    
      if (misafirSayisi < 1 || misafirSayisi > 20) {
        alert('Kişi sayısı 1 ile 20 arasında olmalıdır.');
        return;
      }
    
     
    
    
    
    
      alert(`Sayın ${tamAd}, rezervasyon talebiniz alınmıştır. En kısa sürede sizinle iletişime geçilecektir.`);
    
      
      form.reset();
    });
    
    });
    