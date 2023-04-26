module.exports = function () {
  let mode = true,
    domainDev = "http://localhost:7777/",
    domainProd = "https://lasalle-dgd-2023.vercel.app/",
    domain = mode ? domainProd : domainDev,
    lang = "es",
    themeColor = `#FFF`,
    favicon = `${domain}img/favicon.ico`,
    og = `${domain}img/og.png`;

  return {
    mode,
    domainDev,
    domainProd,
    domain,
    lang,
    themeColor,
    favicon,
    og,
  };
};
