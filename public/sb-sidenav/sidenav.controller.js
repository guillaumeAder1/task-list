/**
 * Main component controller
 */

export const statusList = [
  { val: '', field: 'all' },
  { val: '0', field: 'todo' },
  { val: '50', field: 'in progress' },
  { val: '100', field: 'done' }
]
class SidenavController {

  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav
    console.log('Sidenav');
    // filter by date or Step number
    this.filters = [
      { val: 'Step', field: 'step' },
      { val: 'Date End', field: 'utcEnd' },
      { val: 'Date Start', field: 'utcStart' }
    ];
    this.selectedFilter = 'Step';
    this.curfilter = false;

    // string filtering
    this.searchStr = null;

    // task status (done/inprogress/todo)
    this.selectedStatus = null;
    this.status = statusList


  }

  // filter by date or Step number
  updateFilter(value) {
    this.filter = this.filters.filter(e => e.val === value.selected)[0].field
    this.callback({ selected: this.filter })
  }

  // string filtering
  updateSearchStr(value) {
    this.callbackSearch({ str: value })
  }

  // status filtering (done /todo /in porgress)
  updateStatusFilter(value) {
    // this.selectedStatus = value
    this.callbackStatus({ status: value })
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