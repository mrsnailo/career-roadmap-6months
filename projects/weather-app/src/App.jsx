import "./App.css";
import { MapPin, Search, Thermometer, Wind, Droplets } from "lucide-react";
import StatCard from "./components/UI/StatCard";

import { useEffect, useState } from "react";

import useSearchLocation from "./hooks/useSearchLocation";
import { HashLoader } from "react-spinners";
import useWeatherInfo from "./hooks/useWeatherInfo";
import useBackground from "./hooks/useBackground";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const { data, error, isLoading, setLocation } = useSearchLocation();
  const [greeting, setGreeting] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const time = new Date().getHours();
    if (time < 12) {
      setGreeting("Good Morning ");
      setBackgroundImage("/images/morning.jpg");
    } else if (time < 19) {
      setGreeting("Good Afternoon ");
      setBackgroundImage("/images/afternoon.jpg");
    } else {
      setGreeting("Good Night ");
      setBackgroundImage("/images/night.jpg");
    }
  }, []);

  const {
    getWeatherInfo,
    data: weatherData,
    error: weatherError,
    isLoading: weatherIsLoading,
  } = useWeatherInfo();

  const { image, getBackground, loading: backgroundLoading } = useBackground();

  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center inset-0"
        style={{
          backgroundImage: `url("${image || backgroundImage}")`,
        }}
      >
        <div className="inset-0 bg-black/40 backdrop-blur-md w-full min-h-screen pt-5 text-center">
          <h2 className="text-3xl font-extrabold  text-[#26de81] tracking-wide">
            Weather Forecast
          </h2>
          <strong className="text-[#d1d8e0]">{greeting}</strong>

          <div className="flex flex-col items-center w-full mt-5 px-2">
            {/* Search Box Wrapper */}
            <div className="relative w-full max-w-[400px] mb-5">
              <div className="search-box flex items-center glass-card p-3 rounded-lg shadow-lg gap-3 w-full">
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
                <div className="search-result-box absolute top-full left-0 w-full mt-2 z-50 max-h-[400px] overflow-y-scroll">
                  <div className="glass-card opacity-100 p-5 shadow-lg">
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
                          key={item.id}
                          className="flex items-center gap-3 my-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md"
                          onClick={() => {
                            getWeatherInfo(item.name);
                            getBackground(item.name);
                          }}
                        >
                          <MapPin size={35} strokeWidth={2} color="#EE6983" />
                          <div className="info text-left">
                            <p className="font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-blue-500 text-sm">
                              {item.country}
                            </p>
                          </div>
                        </div>
                      ))}
                    {!isLoading && Array.isArray(data) && data.length === 0 && (
                      <p className="text-gray-400">No result found...</p>
                    )}
                  </div>
                </div>
              )}
            </div>

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
        </div>
      </div>
    </>
  );
}

export default App;
