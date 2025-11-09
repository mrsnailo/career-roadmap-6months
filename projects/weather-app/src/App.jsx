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

function App() {
  const backgroundLoaded = useRef(false);

  useEffect(() => {
    if (backgroundLoaded.current) return;
    backgroundLoaded.current = true;
    ChangeBackground();
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const { data, error, isLoading, setLocation } = useSearchLocation();

  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-5 text-white">Weather Forecast</h2>

      <div className="flex flex-col items-center w-full my-5 px-2 relative">
        {/* Search Box */}
        <div className="search-box flex items-center glass-card p-3 rounded-md shadow-md gap-3 w-full max-w-[400px] mb-5">
          <Search className="text-gray-400" />
          <input
            className="text-gray-600 outline-none w-full"
            type="text"
            name="city"
            id="city"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search for a city"
          />
        </div>

        {isFocused && (
          <>
            {/* search result box  */}
            <div className="search-result-box w-full max-w-[400px] glass-card p-5 absolute top-0 shadow-md">
              {isLoading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {data &&
                data.map((item) => (
                  <div id={item.id} className="flex items-center gap-2 my-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <MapPin size={35} strokeWidth={2} color="#EE6983" />
                    <div className="info">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-400 text-sm">{item.country}</p>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Temperature Card */}
        <div className="temperature-card w-full max-w-[500px] glass-card rounded-md shadow-md my-5 p-4 text-center">
          <div className="main flex flex-col items-center">
            <div className="location-info flex items-center justify-center gap-2 text-md my-2.5">
              <MapPin size={16} strokeWidth={2} />
              <strong>Paris</strong>
            </div>

            <Cloud size={250} strokeWidth={2} color="#EE6983" />

            {/* temperature */}
            <div className="temp">
              <h3 className="text-4xl font-bold">14°C</h3>
              <p>Partly cloudy</p>
            </div>
          </div>
        </div>

        {/* Weather widgets */}
        <div className="widget-group grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[700px] my-5">
          <StatCard
            icon={<Thermometer size="80" />}
            title="Feels Like"
            value={13}
            unit="°C"
          />
          <StatCard
            icon={<Droplets size="80" />}
            title="Humidity"
            value={70}
            unit="%"
          />
          <StatCard
            icon={<Wind size="80" />}
            title="Wind"
            value={12}
            unit="km/h"
          />
          <StatCard
            icon={<Sunrise size="80" />}
            title="Sunset"
            value="18:45"
            unit=""
          />
        </div>
        {/* hourly forcast  */}
        <div className="hourly-secion w-full max-w-[700px] my-5">
          <h4 className=" text-2xl font-bold text-white">Hourly Forecast</h4>
          <div className="hourly-cards grid grid-cols-2 md:grid-cols-5 gap-3 my-3">
            <HourlyForecastCard
              icon={<Wind size="80" />}
              time="12:00"
              value={12}
              unit="km/h"
            />
            <HourlyForecastCard
              icon={<Wind size="80" />}
              time="12:00"
              value={12}
              unit="km/h"
            />
            <HourlyForecastCard
              icon={<Wind size="80" />}
              time="12:00"
              value={12}
              unit={"km/h"}
            />
            <HourlyForecastCard
              icon={<Wind size="80" />}
              time="12:00"
              value={12}
              unit="km/h"
            />
            <HourlyForecastCard
              icon={<Wind size="80" />}
              time="12:00"
              value={12}
              unit="km/h"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
