let pokeball = document.getElementById("pokeball");

function getRandomPokemonId() {
    return Math.floor(Math.random() * 150) + 1;
}

function loadRandomPokemon() {
    const randomPokemonId = getRandomPokemonId();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemon-image').src = data.sprites.front_default;
            document.getElementById('pokemon-name').textContent = `${data.name}`;
            document.getElementById('pokemon-id').textContent = `#${data.id}`;

            
            setTimeout(() => {
                pokeball.classList.toggle("hide");
            }, 500);
        })
        .catch(error => console.error('Error fetching data:', error));
}

window.addEventListener('load', loadRandomPokemon);
