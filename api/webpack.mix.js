const mix = require("laravel-mix");
require("dotenv").config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: "source-map"
    }).sourceMaps();
}

mix.react(
    "resources/js/frontend/index.js",
    "public/js/frontend.js"
).browserSync({
    host: "localhost",
    port: 3000,
    proxy: {
        target: process.env.APP_URL
    }
});

// add versioning (creates mix.manifest.json)
mix.version();
