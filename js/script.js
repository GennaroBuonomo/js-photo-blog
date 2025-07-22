[
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
]

//Recupero il contenitore dove verranno inserite le card
const polaroidcontainer = document.getElementById('polaroidcontainer');

// Faccio una richiesta GET 
axios.get('https://lanciweb.github.io/demo/api/pictures/') 
  .then(response => {
    const data = response.data;
     // Variabile per contenere tutto l'HTML generato
    let polaroids = '';

    // Ciclo su ogni oggetto dell'array
    for (let i = 0; i < data.length; i++) {
      const { title, date, url } = data[i];
       // Aggiungo un blocco HTML
      polaroids += `
        <div class="col-12 col-md-4">
          <div class="polaroid rounded-0">
            <div>
              <img class="foto-grande" src="${url}" alt="">
              <img class="pin-img" src="./img/pin.svg" alt="pin-img">
              <div>
                <p class="date">${date}</p>
                <h2 class="title">${title}</h2>
              </div>
            </div>
          </div>
        </div>`;
    }

    polaroidcontainer.innerHTML = polaroids
});

  
   
