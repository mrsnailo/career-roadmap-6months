export type Theme = "light" | "dark";

export function getSavedTheme(): Theme {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }
  return "light";
}

export function applyTheme(theme: Theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

export function toogleTheme() {
  const currentTheme = getSavedTheme();
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
}
