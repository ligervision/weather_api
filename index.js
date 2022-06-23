// import { myKey } from './api.js';

console.log('Hello this is working.')


// const weatherAPIKey = myKey;
const cityName = 'Chicago'

let myKey = 'ce88ed3ff653b765662f21cfe6eafcef';


// Function to request API data.
async function getCurrentWeather(cityName){
    let request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}`);
    let result = await fetch(request);
    let response = await result.json();
    console.log(response);
}

async function handleSubmit(e){ // <-- e for 'event'
    e.preventDefault();
    let cityName = e.target.cityName.value;
    // let weatherData = await getCurrentWeather(cityName);
    buildWeatherCard(cityName)
    e.target.cityName.value = ''
}


async function buildWeatherCard(){
    // Create card div
    const card = document.createElement('div')
    card.className = 'card'

    // Create a card header div
    const cardHeader = document.createElement('div')
    cardHeader.className = 'card-header' 

    // Create an h5 for card title
    const cityTitle = document.createElement('h5');
    cityTitle.className = 'card-title'
    cityTitle.innerHTML = cityName

    // Create a card body div
    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    // Create card body p tags (High, Low, Current, Feels Like)
    const high = document.createElement('p');
    high.className = 'card-text'
    // high.innerHTML = `High: ${... .toLocaleString('en-US')}` // <--------
  
    const low = document.createElement('p');
    low.className = 'card-text'
    // low.innerHTML = `Low: ${... .toLocaleString('en-US')}` // <--------
 
    const feels_like = document.createElement('p');
    feels_like.className = 'card-text'
    // feels_like.innerHTML = `Feels Like: ${... .toLocaleString('en-US')}` // <--------
        
    const current = document.createElement('p');
    current.className = 'card-text'
    // current.innerHTML = `Current Weather: ${... .toLocaleString('en-US')}` // <--------
    
    // Append to card body
    cardBody.append(high)
    cardBody.append(low)
    cardBody.append(feels_like)
    cardBody.append(current)
    
    // Add card header & body to card
    card.append(cardHeader);
    card.append(cardBody);

    // Create column div
    const col = document.createElement('div')
    col.className = 'col-12 col-md-6 col-lg-3'

    // Add card to column
    col.append(card)

    // Get the div for display Weather cards
    const display = document.getElementById('...'); // <-------- 
    // Add new column to the display
    display.append(col)
}

const myForm = document.getElementsByTagName('form')[0];
myForm.addEventListener('submit', handleSubmit);
