module.exports = function(config) {
  return {
    dir: {
      input: "src",
      output: "_site",
      data: `_data`
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
