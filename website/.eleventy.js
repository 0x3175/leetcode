module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/problems");
    eleventyConfig.addPassthroughCopy("src/.nojekyll");

    // Filter to extract difficulty color
    eleventyConfig.addFilter("difficultyColor", function (difficulty) {
        switch (difficulty?.toLowerCase()) {
            case 'easy': return '#00af9b';
            case 'medium': return '#ffb800';
            case 'hard': return '#ff2d55';
            default: return '#8a8a8e';
        }
    });

    return {
        pathPrefix: "/leetcode/",
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
