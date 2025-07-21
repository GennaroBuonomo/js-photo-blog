// Array di oggetti: ogni oggetto rappresenta una foto con titolo, data e URL
const PolaridPhoto = [
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

//Recupero gli elementi del dom che mi servono 
const Polaroidcontainer = document.getElementById('Polaroidcontainer');

// Creo una variabile stringa vuota
let polaroids = '';

// Ciclo gli oggetti nell'array PolaridPhoto
for (let i = 0; i < PolaridPhoto.length; i++) {
  // Salvo l'oggetto corrente in una variabile
  const member = PolaridPhoto[i];

  const { id, title, date, url } = member;
  // mi creo una variabile che conterrà l'html e le informazioni sulle photo
  polaroids += `<div class="col-12 col-md-4">
        <!--photo 1-->
        <div class="polaroid rounded-0">
          <div>
            <img class="foto-grande" src="${url}" alt="">
            <img class="pin-img" src="./img/pin.svg" alt="pin-img">
            <div class="">
            <p class="id">${id}</p>
            <p class="title">${title}</p>
            <p class="date">${date}</p>
            </div>
          </div>
        </div>
      </div>`
}
// Fine del ciclo
Polaroidcontainer.innerHTML = polaroids;
  


