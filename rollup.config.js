import path from 'path';
import fs from 'fs';

import alias from '@rollup/plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import requireContext from 'rollup-plugin-require-context';
import { terser } from 'rollup-plugin-terser';
import vuePlugin from 'rollup-plugin-vue';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import autoExternal from 'rollup-plugin-auto-external';

const production = !process.env.ROLLUP_WATCH;

const postCssPlugins = [
  postcssImport(),
];

export default fs
  .readdirSync(path.join(__dirname, 'web', 'pages'))
  .map((input) => {
    const name = input.split('.')[0].toLowerCase();
    return {
      input: `web/pages/${input}`,
      output: {
        file: `out/compiled/${name}.js`,
        format: 'iife',
        name: 'app',
        sourcemap: false,
        globals: {
          'vue': 'Vue'
        }
      },
      plugins: [
        nodeResolve({
          jsnext: true,
          main: true,
          browser: true,
          extensions: ['.mjs', '.js', '.jsx', '.json', '.ts'],
          preferBuiltins: false,
          dedupe: ['vue']
        }),
        autoExternal(),
        vuePlugin({
          css: false
        }),
        commonjs(),
        globals(),
        builtins(),
        json(),
        alias({
          entries: [{
            find: '@',
            replacement: __dirname + '/src/'
          }],
        }),
        image(),
        postcss({
          extract: `${name}.css`,
          plugins: postCssPlugins,
        }),
        requireContext(),
        replace({
          'process.env.NODE_ENV': production ?
            '"production"' : '"development"',
          preventAssignment: true,
        }),
        esbuild({
          minify: production,
          target: 'es2015',
        }),
        production && terser(),
        production && filesize(),
      ],
      watch: {
        clearScreen: false,
        exclude: ['node_modules/**'],
      },
    };
  });
