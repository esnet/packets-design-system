import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import cssnano from 'cssnano';

export default [
  // Unminified version
  {
    input: 'src/index.css',
    output: { file: 'dist/styles.css' },
    plugins: [
      postcss({
        extract: true,
        minimize: false,
        plugins: [postcssImport(), postcssNested()]
      })
    ]
  },
  // Minified version
  {
    input: 'src/index.css',
    output: { file: 'dist/styles.min.css' },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [
          postcssImport(),
          postcssNested(),
          cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
        ]
      })
    ]
  }
];
