import { statusList } from '../sb-sidenav/sidenav.controller'
/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor() {
    console.log('ProcessMatrixController');
    this.filter = 'Step'
    this.searchValue = ""
    this.status = '50'
  }

  updateOrder(e) {
    this.filter = e
  }

  updateFilter(e) {
    this.searchValue = e.str
  }

  updateStatus(e) {
    this.status = statusList.filter(d => d.field == e)[0].val
  }
  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  $onInit() {
    console.log('input bindings are defined!', this.sbModel);
  }
}

export { ProcessMatrixController }