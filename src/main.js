import './plugins';
import $ from 'jquery';
import Radio from 'backbone.radio';
import {createRouter, middleware} from 'marionette.routing';

import Application from './application/application';

import IndexRoute from './index/route';


let app = new Application();

$(document).ajaxError(() => {
  window.alert("Server error.");
});

let router = createRouter({log: true, logError: true});

router.rootRegion = app.layout.getRegion('content');

router.map(function (route) {
  route('app', {path: '/', routeClass: ApplicationRoute, abstract: true}, function () {
    route('index', {path: '', routeClass: IndexRoute});
  })
});

router.use(middleware);

router.listen();

