document.addEventListener("DOMContentLoaded", function () {
    const familyList = document.getElementById("familyList");
    const dernekList = document.getElementById("dernekList");

    // Aileleri yükle
    fetch("/families.json")  // ← DÜZELTİLDİ
        .then(response => response.json())
        .then(data => {
            familyList.innerHTML = "";
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - ${item.address} - ${item.phone}`;
                familyList.appendChild(li);
            });
        })
        .catch(error => console.error("Aile veri hatası:", error));

    // Dernekleri yükle
    fetch("/dernekler.json")  // ← DÜZELTİLDİ
        .then(response => response.json())
        .then(data => {
            dernekList.innerHTML = "";
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - ${item.contact}`;
                dernekList.appendChild(li);
            });
        })
        .catch(error => console.error("Dernek veri hatası:", error));
});
