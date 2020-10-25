module.exports = function (config) {

  config.addPassthroughCopy("src/site/img");
  config.addPassthroughCopy("src/site/fonts");
  config.addPassthroughCopy("src/site/icon");
  config.addPassthroughCopy("src/site/instagram");
  config.addPassthroughCopy("src/site/js");
  config.addPassthroughCopy("src/site/mailer");
  return {
    
    dir: {
      input: "src/site",
      output: "dist",
      includes: "templates",
    },
    templateFormats: ["html", "md", "css", "liquid", "njk"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
