/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor() {
    console.log('ProcessMatrixController');
    this.filter = 'Step'
    this.searchValue = ""
  }

  updateOrder(e) {
    this.filter = e
  }

  updateFilter(e) {
    this.searchValue = e.str
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