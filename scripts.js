//Dinamic characters 
const url = `https://rickandmortyapi.com/api/character`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        printData(data.results)
    })
    .catch(error => console.log(error))

function printData(data) {
    data.forEach(character => {
        const { name, gender, species, status, location, image} = character
        console.log(character)

    })
}
