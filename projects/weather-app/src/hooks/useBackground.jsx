import { useState } from "react";
import { createApi } from "unsplash-js";


const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_KEY,
});

export default function useBackground() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
 

  const getBackground = async (location) => {
    try {
      setLoading(true);

      const response = await unsplash.photos.getRandom({
        query: location,
        orientation: "landscape",
        count: 1,
      });

      const data = Array.isArray(response.response)
        ? response.response[0]
        : response.response;

      if (data?.urls?.full) {
        setImage(data.urls.full);
      } else {
        throw new Error("No image found");
      }
    } catch (error) {
      console.error("Unsplash error:", error);
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    image,
    getBackground,
  };
}
