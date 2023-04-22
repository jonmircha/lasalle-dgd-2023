module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("img");
  //eleventyConfig.addPassthroughCopy(".htaccess");

  /* eleventyConfig.addGlobalData("permalink", () => {
    return (data) =>
      `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  }); */

  /* eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("*.md");
  }); */
};
