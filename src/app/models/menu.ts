import {DynFormModel} from './dynformmodel';

export class MenuModel extends DynFormModel {
  c_menu_id: number;
  c_form_id: number;
  name: string;
  parentmenu: number;
  icon: string;
  action: string;
  record_id: number;
  url: string;
  is_report: string;
  is_form: string;
  navitems: MenuModel[];
}
