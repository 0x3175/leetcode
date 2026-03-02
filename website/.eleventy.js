module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/problems");
    eleventyConfig.addPassthroughCopy("src/.nojekyll");

    return {
        pathPrefix: "/leetcode/",
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
