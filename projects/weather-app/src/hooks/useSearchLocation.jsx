import { useEffect, useState } from "react";

const base_url = import.meta.env.VITE_WEATHER_API_BASE_URL;
const api_key = import.meta.env.VITE_WEATHER_API;

export default function useSearchLocation({ delay = 500 } = {}) {
  const [location, setLocation] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!location) return;

    const timer = setTimeout(() => {
      searchLocation();
    }, delay);

    return () => clearTimeout(timer);
  }, [location]);

  async function searchLocation() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${base_url}/search.json?key=${api_key}&q=${location}`
      );
      const result = await response.json();

      setData(result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
      console.log(err);
    }
  }

  return {
    setLocation,
    isLoading,
    error,
    data,
  };
}
