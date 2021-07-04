const cityform =  document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const time = document.querySelector('img.time');


const icon = document.querySelector('.icon img');



const updateui = (data) => {
  //destructure properties
    const {cityDets,weather} = data;

    //update deetails template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    
    
    `;

    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);




    //update the night and day icon
    let timesrc =  null;

    if(weather.IsDayTime){
        timesrc = 'img/day.svg';
    }
    else{
        timesrc = 'img/night.svg';
    }
    time.setAttribute('src', timesrc);






    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }


};

const updatecity = async (city) => {

const cityDets =  await getcity(city);
const weather = await getweather(cityDets.Key);

return{cityDets, weather};



};
cityform.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city =  cityform.city.value.trim();
    cityform.reset();

    //update the ui with new city
    updatecity(city)
    .then(data =>updateui(data))
    .catch(err => console.log(err));
});