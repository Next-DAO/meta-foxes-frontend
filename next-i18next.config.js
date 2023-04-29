module.exports = {
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
  },
};
