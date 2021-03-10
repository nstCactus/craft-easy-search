let mix = require('laravel-mix');

mix
    .js('src/main.js', 'resources/easy-search.js').vue()
    .sass('src/main.scss', 'resources/easy-search.css')
    .options({
        processCssUrls: false
    });
