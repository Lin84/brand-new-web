import loadJS from 'fg-loadjs';
import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';

import init from './init';
import loadJS from 'fg-loadjs';

loadJS('https://code.jquery.com/jquery-3.1.1.min.js', () => {
    // eslint-disable-next-line
    require('./bootstrap-loader');
});

const app = () => {
    loadJS('https://code.jquery.com/jquery-3.1.1.min.js', () => {
        require('bootstrap/dist/js/bootstrap'); // eslint-disable-line global-require
    });
};

app(window.config);
