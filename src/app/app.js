import loadJS from 'fg-loadjs';
import 'babel-polyfill';
import 'jquery';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';

import init from './init';
import factory from './factory';
import MyModule from './components/module';
import Alertifier from './components/alertifier';

loadJS('https://code.jquery.com/jquery-3.1.1.min.js', () => {
    // eslint-disable-next-line
    require('./bootstrap-loader');
});

const app = () => {
    init(MyModule, document.querySelector('.main h1'));
    factory(Alertifier, document.querySelectorAll('.btn'));
};

app(window.config);
