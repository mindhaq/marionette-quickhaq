import $ from 'jquery';
import {Application} from 'backbone.marionette';
import LayoutView from './layout-view';

export default Application.extend({
  initialize() {
    this.$body = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();
  },

});
