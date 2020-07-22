import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import "es6-promise";
import "fetch-polyfill";
import 'mdn-polyfills/Node.prototype.append';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import anchorsBody from './modules/anchors';

//anchors
anchorsBody();
