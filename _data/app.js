module.exports = function () {
  let mode = false,
    domainDev = "http://localhost:7777/",
    domainProd = "https://jonmircha.github.io/lasalle-dgd-2023/",
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
