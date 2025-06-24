import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const isProduction = !process.env.ROLLUP_WATCH;

const config = {
    watch: {
        clearScreen: false,
    },

    input: 'src/index.js',

    output: [
        {
            format: 'esm',
            sourcemap: false,
            plugins: isProduction ? [terser()] : [],
            file: 'dist/js-count.module.js',
        },
        {
            sourcemap: false,
            format: 'umd',
            name: 'jCount',
            plugins: isProduction ? [terser()] : [],
            file: 'dist/js-count.min.js',
        },
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'],
        }),
        !isProduction && serve(),
        !isProduction &&
            livereload({
                watch: 'dist',
            }),
    ],
};

export default config;
