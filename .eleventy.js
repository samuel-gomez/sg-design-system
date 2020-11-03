const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  /*  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
 */
  return {
    passthroughtFileCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md'],
    dir: {
      input: 'src/',
      output: 'dist',
    },
  };
};
