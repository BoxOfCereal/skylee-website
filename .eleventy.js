const showdown  = require('showdown') //for markdown function

module.exports = function (config) {

  config.addPassthroughCopy("src/site/img");
  config.addPassthroughCopy("src/site/fonts");
  config.addPassthroughCopy("src/site/icon");
  config.addPassthroughCopy("src/site/js");

  config.addFilter("previewContent", function(value) {
    //get content
    let content = value;
    
    const firstParagraph = content.match(/<p>(.*?)<\/p>/)[0]

    return firstParagraph;
  });

  config.addFilter("markdownToHtml", function(value) {
    //get content
    const converter = new showdown.Converter()
    const text      = value
    const html      = converter.makeHtml(text);
    
    return html;
  });


  config.addCollection('posts',collection=>{
    return collection.getFilteredByGlob('src/site/posts/*.md')
  })

  return {
    
    dir: {
      input: "src/site",
      output: "dist",
      includes: "templates",
      data:"_data"
    },
    templateFormats: ["html", "md", "css", "liquid", "njk","yml","jstl"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
