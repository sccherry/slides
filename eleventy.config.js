const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy('./public');
  eleventyConfig.addPassthroughCopy('./src/sw.js');

  const markdownLib = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dataTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
