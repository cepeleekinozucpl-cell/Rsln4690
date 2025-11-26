document.getElementById("helpBtn").onclick = () => {
    document.getElementById("formArea").innerHTML = `
        <h2>Yardım Et</h2>
        <input placeholder="Ad Soyad" />
        <input placeholder="Telefon" />
        <input placeholder="Nasıl yardımcı olacaksınız?" />
        <button>Gönder</button>
    `;
};

document.getElementById("needBtn").onclick = () => {
    document.getElementById("formArea").innerHTML = `
        <h2>Yardım İste</h2>
        <input placeholder="Ad Soyad" />
        <input placeholder="Adres" />
        <input placeholder="İhtiyacınız nedir?" />
        <button>Gönder</button>
    `;
};
