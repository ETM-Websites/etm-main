const themeDir = __dirname + '';
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: 'default'
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
      let els = JSON.parse(content).htmlElements;
      return els.tags.concat(els.classes, els.ids);
  }
});

module.exports = {
  plugins: [
    require('postcss-import')({ path: [themeDir + '/assets/'] }),
    require('tailwindcss')(themeDir + '/tailwind.config.js'),
    require('postcss-nesting'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [autoprefixer, cssnano, purgecss]
      : []
  ]
}
