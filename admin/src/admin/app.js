const config = {
  locales: ["id"],
  translations: {
    en: {
      "Auth.form.welcome.subtitle": "Log in to your account",
      "Auth.form.welcome.title": "Welcome to Dashboard!",
      "app.components.LeftMenu.navbrand.title": "Inspektorat",
      "app.components.LeftMenu.navbrand.workplace": "Kab. Gresik",
    },
    id: {
      "Auth.form.welcome.subtitle": "Masuk ke akun anda",
      "Auth.form.welcome.title": "Selamat datang di Dashboard!",
      "app.components.LeftMenu.navbrand.title": "Inspektorat",
      "app.components.LeftMenu.navbrand.workplace": "Kab. Gresik",
    },
  },

  theme: {
    light: {
      colors: {
        buttonPrimary500: "#4dadac",
        buttonPrimary600: "#008a88",
        primary100: "#e6f3f3",
        primary200: "#cce8e7",
        primary500: "#4dadac",
        primary600: "#008a88",
        primary700: "#00615f",
        secondary100: "#e6edf3",
        secondary200: "#ccdae8",
        secondary500: "#4d7ead",
        secondary600: "#00478a",
        secondary700: "#003261",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
