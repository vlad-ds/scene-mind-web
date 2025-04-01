module.exports = function(eleventyConfig) {
  // Copy the "img" directory to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("docs");
  
  // Copy the "css" directory to the output
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "../_includes",
      layouts: "../_includes"
    }
  };
}; 