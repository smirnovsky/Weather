import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>Moscow</p>
                    <p className='weather-description'>Sunny</p>
                </div>
                <img alt='weather' src='./icons/sun-day.png' />
            </div>
            <div className='bottom'>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details:</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>22°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>4 m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>20%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>20 hPa</span>
                    </div>
                </div>
                <p className='temperature'>18°C</p>
            </div>
        </div>
    );
};

export default CurrentWeather;