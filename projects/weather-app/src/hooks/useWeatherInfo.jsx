import { useEffect, useState } from "react";

const base_url = import.meta.env.VITE_WEATHER_API_BASE_URL;
const api_key = import.meta.env.VITE_WEATHER_API;

const useWeatherInfo = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setLocationData] = useState(null);

  const getWeatherInfo = async (location) => {
    try {
      setIsLoading(true);
      setError(null);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      const response = await fetch(
        `${base_url}/current.json?key=${api_key}&Q=${location}`
      );

      const locationInfo = await response.json();
      setLocationData(locationInfo);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getWeatherInfo,
  };
};

export default useWeatherInfo;
