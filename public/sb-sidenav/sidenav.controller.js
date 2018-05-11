/**
 * Main component controller
 */
class SidenavController {

  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav
    console.log('Sidenav');

    this.filters = [
      { val: 'Step', field: 'step' },
      { val: 'Date End', field: 'utcEnd' },
      { val: 'Date Start', field: 'utcStart' }
    ]
    this.selectedFilter = false

  }


  updateFilter(value) {
    console.log('update filter...', value)
    this.callback(this.filters.filter(e => e.val === value)[0].field)
  }

  buildToggler(componentId) {
    return function () {
      this.$mdSidenav(componentId).toggle();
    };
  }

  // toggleLeft(componentId) {
  //   console.log('togglgllell', componentId)
  //   return function () {
  //     $mdSidenav('left').toggle();
  //   }();
  // }
  /**
   * input bindings are ready
   *
   * @return {undefined} undefined
   */

  $onInit() {
    console.log('input bindings are defined!');
    this.toggleLeft = this.buildToggler('left');

  }
}
SidenavController.$inject = ['$mdSidenav'];
export { SidenavController }