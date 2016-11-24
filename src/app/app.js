import loadJS from 'fg-loadjs';
import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';

import init from './init';

loadJS('https://code.jquery.com/jquery-3.1.1.min.js', () => {
    // eslint-disable-next-line
    require('./bootstrap-loader');
});
