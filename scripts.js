//Header
const menu = document.getElementById('menu')
const nav_desk = document.getElementById('navDesk')
const nav_mob = document.getElementById('navMob')
//Mostrar/ocultar
menu.addEventListener('click', ()=>{
    menu.classList.toggle('close');
    nav_mob.classList.toggle('show');
});

//Dinamic characters 
const url = `https://rickandmortyapi.com/api/character`
const contenedor = document.querySelector('main')

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        printData(data.results)
    })
    .catch(error => console.log(error))

function printData(data) {
    data.forEach(character => {
        const { name, gender, species, status, location, image } = character
        console.log(character)
        const elementContain = document.createElement('div')
        elementContain.classList.add('card')
        elementContain.innerHTML = `<div class="card">
                                        <img src="${image}" alt="">
                                        <div class="card-bottom">
                                            <div class="contain">
                                                <h4 class="tittle">${name}</h4>
                                            </div>
                                            <div class="tags">
                                                <p class="tag">SPECIES: ${species}</p>
                                                <p class="tag">STATUS: ${status}</p>
                                                <p class="tag">LOCATION: ${location.name}</p>
                                            </div>
                                        </div>
                                    </div>`

        contenedor.appendChild(elementContain)
    })
}
