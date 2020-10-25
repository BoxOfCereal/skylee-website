module.exports = function (config) {

  config.addPassthroughCopy("src/site/img");
  config.addPassthroughCopy("src/site/fonts");
  config.addPassthroughCopy("src/site/icon");
  config.addPassthroughCopy("src/site/instagram");
  config.addPassthroughCopy("src/site/js");
  config.addPassthroughCopy("src/site/mailer");

  config.addFilter("previewContent", function(value) {
    console.log(value)
    //get content
    let content = value;
    //remove first header
    // const header = content.match(/<h2>(.*?)<\/h2>/)[0]
    const firstParagraph = content.match(/<p>(.*?)<\/p>/)[0]

    return firstParagraph;
  });


  config.addCollection('posts',collection=>{
    return collection.getFilteredByGlob('src/site/posts/*.md')
  })

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
