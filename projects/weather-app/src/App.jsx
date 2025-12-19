import "./App.css";
import {
  Cloud,
  MapPin,
  Search,
  Thermometer,
  Wind,
  Sunrise,
  Droplets,
} from "lucide-react";
import StatCard from "./components/UI/StatCard";
import HourlyForecastCard from "./components/UI/HourlyForecastCards";
import { useEffect, useState, useRef } from "react";
import ChangeBackground from "./util/change-background";
import useSearchLocation from "./hooks/useSearchLocation";
import { HashLoader } from "react-spinners";
import useWeatherInfo from "./hooks/useWeatherInfo";

function App() {
  const backgroundLoaded = useRef(false);

  useEffect(() => {
    if (backgroundLoaded.current) return;
    backgroundLoaded.current = true;
    ChangeBackground();
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const { data, error, isLoading, setLocation } = useSearchLocation();
  const {
    getWeatherInfo,
    data: weatherData,
    error: weatherError,
    isLoading: weatherIsLoading,
  } = useWeatherInfo();

  return (
    <>
      <h2 className="text-3xl font-extrabold text-center mt-5 text-cyan-300 tracking-wide">
        Weather Forecast
      </h2>

      <div className="flex flex-col items-center w-full my-5 px-2 relative">
        {/* Search Box */}
        <div className="search-box flex items-center glass-card p-3 rounded-lg shadow-lg gap-3 w-full max-w-[400px] mb-5">
          <Search className="text-gray-400" />
          <input
            className="text-gray-800 font-medium placeholder-gray-500 outline-none w-full"
            type="text"
            name="city"
            id="city"
            onFocus={() => setIsFocused(true)}
            onBlur={() =>
              setTimeout(() => {
                setIsFocused(false);
              }, 400)
            }
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search for a city..."
          />
        </div>

        {isFocused && (
          <div className="search-result-box w-full max-w-[400px] glass-card p-5 absolute top-0 shadow-lg">
            {isLoading && (
              <div className="w-full h-50 flex justify-center items-center">
                <HashLoader color="#1A7595" />
              </div>
            )}
            {error && <p className="text-red-400">{error}</p>}
            {!isLoading &&
              !error &&
              data.length > 0 &&
              data.map((item) => (
                <div
                  id={item.id}
                  className="flex items-center gap-3 my-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md"
                  onClick={() => getWeatherInfo(item.name)}
                >
                  <MapPin size={35} strokeWidth={2} color="#EE6983" />
                  <div className="info">
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-blue-500 text-sm">{item.country}</p>
                  </div>
                </div>
              ))}
            {!isLoading && Array.isArray(data) && data.length === 0 && (
              <p className="text-gray-400">No result found...</p>
            )}
          </div>
        )}

        {/* Main Weather Card */}
        {!weatherIsLoading && !weatherError && weatherData && (
          <>
            <div className="temperature-card w-full max-w-[300px] glass-card rounded-xl shadow-2xl my-5 p-6 text-center bg-gradient-to-b from-cyan-500 to-cyan-700">
              <div className="main flex flex-col items-center">
                <div className="location-info flex items-center justify-center gap-2 text-lg my-3">
                  <MapPin size={18} color="red" strokeWidth={2} />
                  <strong className="text-white text-xl font-bold">
                    {weatherData?.location?.name}
                  </strong>
                </div>

                {/* weather icon */}
                <img
                  src={weatherData?.current?.condition.icon}
                  height={100}
                  width={100}
                  alt="Weather Icon"
                />

                {/* temperature */}
                <div className="temp mt-2">
                  <h3 className="text-5xl font-extrabold text-white">
                    {weatherData.current.temp_c}°C
                  </h3>
                  <p className="text-white text-lg mt-1">
                    {weatherData?.current?.condition.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Less prominent Weather widgets */}
            <div className="widget-group grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-[700px] my-5">
              <StatCard
                icon={<Thermometer size="70" />}
                title="Feels Like"
                value={weatherData?.current?.feelslike_c}
                unit="°C"
                titleColor="text-gray-400"
                valueColor="text-gray-700"
              />
              <StatCard
                icon={<Droplets size="70" />}
                title="Humidity"
                value={weatherData?.current?.humidity}
                unit="%"
                titleColor="text-gray-400"
                valueColor="text-gray-700"
              />
              <StatCard
                icon={<Wind size="70" />}
                title="Wind"
                value={weatherData?.current?.wind_kph}
                unit="km/h"
                titleColor="text-gray-400"
                valueColor="text-gray-700"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
