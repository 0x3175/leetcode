const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPassthroughCopy("src/css");
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
