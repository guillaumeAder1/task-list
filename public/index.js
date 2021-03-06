require('angular-material/angular-material.min.css');
require('angular');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

import { processMatrixComponent } from './sb-process-matrix/process_matrix.js';
import { activityComponent } from './sb-activity/activity.js';
import { sidenavComponent } from './sb-sidenav/sidenav.js';
import { DeliverablesService } from './common/deliverables.service.js';

class IndexController {
  constructor(sbDeliverables) {

    // dependencies
    this.sbDeliverables = sbDeliverables;

    // properties of vm
    this.deliverables = [];

    // filter type
    this.filter = false;

    // init call
    this.sbDeliverables
      .fetchAll()
      .then(deliverables => this.deliverables = deliverables);
  }
}
IndexController.$inject = ['sbDeliverables'];

angular
  .module('theWholeApp', ['ngMaterial'])
  .factory('sbDeliverables', DeliverablesService)
  .controller('IndexController', IndexController)
  .component('sbProcessMatrix', processMatrixComponent)
  .component('sbSidenavComponent', sidenavComponent)
  .component('sbActivityComponent', activityComponent)