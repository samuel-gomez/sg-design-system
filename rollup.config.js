import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import styles from 'rollup-plugin-styles'; // permet l'import de style dans le JS
import html from 'rollup-plugin-html'; // permet l'import HTML dans le JS

export default {
  input: 'src/webcomponents/index.js',
  output: {
    dir: 'src/assets/',
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    html({
      include: ['src/webcomponents/**/*.html'],
    }),
    styles(),
    terser(),
  ],
};
