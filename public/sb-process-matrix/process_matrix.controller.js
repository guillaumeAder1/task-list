/**
 * Main component controller
 */
class ProcessMatrixController {

  constructor() {
    console.log('ProcessMatrixController');
  }

  updateFilter(e) {
    console.log('update filter', e)
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