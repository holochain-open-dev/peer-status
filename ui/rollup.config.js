import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import html from '@web/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'demo/index.html',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'demo/dist',
    sourcemap: true,
  },
  preserveEntrySignatures: false,

  watch: {
    clearScreen: false,
  },

  plugins: [
    /** Enable using HTML as rollup entrypoint */
    html({
      minify: true,
      injectServiceWorker: true,
      serviceWorkerPath: 'dist/sw.js',
    }),
    /** Resolve bare module imports */
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
      outDir: "demo/dist",
    }),
    /** Minify JS */
    production && terser(),
    /** Compile JS to a lower language target */
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            targets: [
              'last 3 Chrome major versions',
              'last 3 Firefox major versions',
              'last 3 Edge major versions',
              'last 3 Safari major versions',
            ],
            modules: false,
            bugfixes: true,
          },
        ],
      ],
      plugins: [
        [
          require.resolve('babel-plugin-template-html-minifier'),
          {
            modules: {
              lit: ['html', { name: 'css', encapsulation: 'style' }],
            },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
  ],
};
