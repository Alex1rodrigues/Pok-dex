//codigo a baixo é o mesmo que o script.js, porem com algumas alterações para testes


/*




// Constantes para a URL da API e elementos do DOM
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

// Gerenciamento de estado
let searchPokemon = 1;

// Função para buscar dados do Pokémon na API
const fetchPokemon = async (pokemon) => {
  try {
    // Realiza uma requisição à API
    const response = await fetch(`${API_URL}${pokemon}`);
    if (!response.ok) {
      throw new Error('Pokemon not found');
    }
    // Retorna os dados do Pokémon como objeto JSON
    return await response.json();
  } catch (error) {
    // Captura e lida com erros de rede ou respostas não-ok da API
    throw new Error(`Error fetching Pokemon: ${error.message}`);
  }
};

// Função para renderizar informações do Pokémon
const renderPokemon = async (pokemon) => {
  try {
    // Exibe uma mensagem de carregamento
    pokemonName.textContent = 'Loading...';
    pokemonNumber.textContent = '';

    // Busca os dados do Pokémon na API
    const data = await fetchPokemon(pokemon);

    // Atualiza o DOM com informações do Pokémon
    pokemonImage.style.display = 'block';
    pokemonName.textContent = data.name;
    pokemonNumber.textContent = data.id;
    pokemonImage.src = data.sprites.other['official-artwork'].front_default;

    // Limpa o campo de pesquisa e atualiza a variável de pesquisa
    input.value = '';
    searchPokemon = data.id;
  } catch (error) {
    // Lida com erros, oculta a imagem e exibe uma mensagem de erro
    pokemonImage.style.display = 'none';
    pokemonName.textContent = `Not found: ${error.message}`;
    pokemonNumber.textContent = '';
  }
};

// Função para lidar com a navegação
const navigate = (direction) => {
  if (direction === 'prev' && searchPokemon > 1) {
    searchPokemon -= 1;
  } else if (direction === 'next') {
    searchPokemon += 1;
  }
  // Chama a função renderPokemon para exibir o Pokémon atualizado
  renderPokemon(searchPokemon);
};

// Ouvinte de eventos para o envio do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

// Ouvintes de eventos para os botões "Anterior" e "Próximo"
buttonPrev.addEventListener('click', () => navigate('prev'));
buttonNext.addEventListener('click', () => navigate('next'));

// Renderiza o primeiro Pokémon ao carregar a página
renderPokemon(searchPokemon);
*/