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
    this.selectedFilter = 'Step';
    this.curfilter = false;
    // string filtering
    this.searchStr = null;

  }


  updateFilter(value) {
    this.filter = this.filters.filter(e => e.val === value.selected)[0].field
    this.callback({ selected: this.filter })
  }


  updateSearchStr(value) {
    console.log(this.searchStr, value)
    // this.filter = this.filters.filter(e => e.val === value.selected)[0].field
    this.callbackSearch({ str: value })
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
    this.callback({ selected: 'step' })

  }
}
SidenavController.$inject = ['$mdSidenav'];
export { SidenavController }