import componentTemplate from './sidenav.html'
import componentStyle from './sidenav.less'
import { SidenavController } from './sidenav.controller.js'

const bindings = {
  filter: '<',
  callback: '&'
};

export const sidenavComponent = {
  controller: SidenavController,
  template: componentTemplate,
  bindings: bindings

};