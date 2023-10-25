import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import { useState } from 'react';


const Weather = () => {
    const weather_API= "bacc6a393a107870b74934df52d7636d";

    const [weather, setWeather] = useState(cloud_icon);

    const search_weather = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${weather_API}`;
        let response = await fetch(weatherUrl);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");
        const temperature = document.getElementsByClassName("temperature");
        const location = document.getElementsByClassName("location");

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML =Math.floor(data.wind.speed)+"km/h";
        temperature[0].innerHTML =Math.floor(data.main.temp)+"°C";
        location[0].innerHTML = data.name;




        if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n')
        {
            setWeather(clear_icon)
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n')
        {
            setWeather(cloud_icon)
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n')
        {
            setWeather(drizzle_icon)
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n')
        {
            setWeather(drizzle_icon)
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n')
        {
            setWeather(rain_icon)
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n')
        {
            setWeather(rain_icon)
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n')
        {
            setWeather(snow_icon)
        }
        else{
            setWeather(clear_icon)
        }
    }



  return (
    <div>
       <div className="w-[510px] h-[525px] m-auto mt-6 rounded-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div className='flex justify-center gap-3 pt-16'>
            <input type="text" id='cityInput' placeholder='Search Your City Weather' className="flex w-[360px] h-[40px] bg-[#ebfffc] border-none outline-none rounded-full pl-10 text-[#626262] cityInput"/>
            <div onClick={(e)=>{search_weather(e.target.value)}} className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white cursor-pointer"
             >
                    <img src={search_icon} className=''/>
            </div>
        </div>
        <div className='flex mt-7 justify-center'>
            <img src={weather} className='w-[120px]'/>
        </div>
        <div className='flex justify-center text-white text-6xl font-normal temperature mt-8' id='temperature'>24°C</div>
        <div className='flex justify-center text-white text-3xl font-normal location' id='location'>London</div>
        <div className='flex justify-center text-white mt-7 items-start'>
            <div className='flex m-auto items-start gap-3'>
                <img src={humidity_icon} alt='' className='mt-2'/>
                <div className='text-xl font-normal'>
                    <div id='humidity-percent' className='humidity-percent'>64%</div>
                    <div className='text-sm font-normal' >Humidity</div>
                </div>
            </div>

            <div className='flex m-auto items-start gap-3'>
                <img src={wind_icon} alt='' className='mt-2'/>
                <div className='text-xl font-normal'>
                    <div id='wind-speed' className='wind-speed'>18 km/h</div>
                    <div className='text-sm font-normal' >Wind Speed</div>
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Weather;