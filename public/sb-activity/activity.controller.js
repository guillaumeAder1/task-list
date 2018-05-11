/**
 * Main component controller
 */
class ActivityController {

  constructor() {
    this.progress = 0;
    this.progressValues = [
      { val: 0, status: 'todo' },
      { val: 50, status: 'in progress' },
      { val: 100, status: 'done' },
    ]
  }

  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */
  convertProgress(val) {
    this.progress = this.progressValues.filter(e => e.val === val)[0]
  }
  $onInit() {
    console.log('input bindings are defined!');
    this.convertProgress(this.sbVal.progress);

  }
}

export { ActivityController }