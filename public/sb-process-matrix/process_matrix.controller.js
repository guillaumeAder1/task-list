/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor() {
    console.log('ProcessMatrixController');
    this.filter = 'step'
  }

  updateFilter(e) {
    console.log('update filter', e)
    this.filter = e
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