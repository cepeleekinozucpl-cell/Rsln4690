/* Bu script index.html için: form açma ve gönderme */
(function(){
  /* FIREBASE CONFIG - BURAYA kendi firebaseConfig objeni yapıştır */
  const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT.firebaseapp.com",
    databaseURL: "https://PROJECT-default-rtdb.firebaseio.com",
    projectId: "PROJECT",
    storageBucket: "PROJECT.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  const helpBtn = document.getElementById('helpBtn');
  const needBtn = document.getElementById('needBtn');
  const formArea = document.getElementById('formArea');

  function makeForm(type){
    formArea.innerHTML = `
      <div class="card">
        <h3>${type==='offer' ? 'Yardım Teklifi' : 'Yardım Talebi'}</h3>
        <input id="name" placeholder="İsim (isteğe bağlı)" />
        <textarea id="text" placeholder="Kısa açıklama"></textarea>
        <button id="send" class="btn">Gönder</button>
      </div>`;
    document.getElementById('send').addEventListener('click', async ()=>{
      const name = document.getElementById('name').value.trim();
      const text = document.getElementById('text').value.trim();
      if(!text){ alert('Açıklama gerekli'); return; }
      const node = type==='offer' ? 'offers' : 'requests';
      const t = Date.now();
      await db.ref(node).push({ name, text, t });
      alert('Gönderildi'); formArea.innerHTML='';
    });
  }

  helpBtn.addEventListener('click', ()=> makeForm('offer'));
  needBtn.addEventListener('click', ()=> makeForm('request'));
})();
