/**
 * Main component controller
 */
class ActivityController {

  constructor() {
    console.log('Activity', this.sbVal);
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
    return this.progressValues.filter(e => e.val === val)[0]
  }
  $onInit() {
    console.log('input bindings are defined!', this.sbVal);
    this.progress = this.convertProgress(this.sbVal.progress);
    console.log(this.sbVal.progress)

  }
}

export { ActivityController }