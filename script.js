// Form gönderme
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("yardimForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const isim = document.getElementById("isim").value;
      const telefon = document.getElementById("telefon").value;
      const not = document.getElementById("not").value;
      const tur = document.getElementById("tur").value;

      const veri = { isim, telefon, not };

      let liste = JSON.parse(localStorage.getItem(tur)) || [];
      liste.push(veri);
      localStorage.setItem(tur, JSON.stringify(liste));

      alert("Gönderildi!");
      form.reset();
    });
  }

  // Admin listeleri doldurma
  const talepListesi = document.getElementById("talepListesi");
  const teklifListesi = document.getElementById("teklifListesi");

  if (talepListesi) {
    const talepler = JSON.parse(localStorage.getItem("talep")) || [];
    talepler.forEach((t) => {
      const li = document.createElement("li");
      li.innerText = `${t.isim} - ${t.telefon} - ${t.not}`;
      talepListesi.appendChild(li);
    });
  }

  if (teklifListesi) {
    const teklifler = JSON.parse(localStorage.getItem("teklif")) || [];
    teklifler.forEach((t) => {
      const li = document.createElement("li");
      li.innerText = `${t.isim} - ${t.telefon} - ${t.not}`;
      teklifListesi.appendChild(li);
    });
  }
});
