const menuRight = document.querySelectorAll('.pokemon');
const pokemonCards = document.querySelectorAll('.pokemonCards');

menuRight.forEach((pokemon) => {
  pokemon.addEventListener('click', () => {
    const openedCard = document.querySelector('.open');
    openedCard.classList.remove('open');
    const idSelectedPokemon = pokemon.attributes.id.value;

    const cardToOpen = document.getElementById('card-' + idSelectedPokemon);
    cardToOpen.classList.add('open');

    const menuOpened = document.querySelector('.selected');
    menuOpened.classList.remove('selected');
    pokemon.classList.add('selected');
  });
});
