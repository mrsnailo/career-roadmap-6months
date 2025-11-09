import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_KEY,
});

const ChangeBackground = async () => {
  try {
    const result = await unsplash.photos.getRandom({
      query: "nature",
      orientation: "landscape",
      count: 1,
    });
    console.log(result);
    const imageUrl = result.response[0].urls.full;

    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${imageUrl})`;
  } catch (e) {
    console.log("Failed to fetch image:", e);
  }
};

export default ChangeBackground;
