module.exports = {
  permalink: false,
  eleventyComputed: {
    order: ({ order, page }) =>
      order || parseInt(page.fileSlug.split('-')[0], 10) || 0,
  },
};
