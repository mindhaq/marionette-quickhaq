import {View} from 'backbone.marionette';
import template from './layout-template.hbs';

export default View.extend({
  el: '.application',
  template: template,

  regions: {
    header  : '.application__header',
    content : '.application__content'
  }
});
