const key = 'ZMsm4iotelUx9AtsY6oxaKNHETm6oKCI';

//get weather info
const getweather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];



};

// get city information
const getcity = async (city) => {
 
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;


    const response = await fetch(base + query);
    const data = await response.json();

    return(data[0]);
};


getcity('Mangalore').then(data => {
    return getweather(data.Key);
}).then(data =>{
    console.log(data);
})
.catch(err => console.log(err));

