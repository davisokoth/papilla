import {DynFormModel} from './dynformmodel';

export class FormModel extends DynFormModel {
    name: string;
    value: string;
    postUrl: string;
    ad_form_id: number;
    icon: string;

    constructor(name: string, value: string, postUrl: string, icon: string, ad_form_id: number) {
        super();
        this.name = name;
        this.value = value || '';
        this.postUrl = postUrl || '';
        this.ad_form_id = ad_form_id;
        this.icon = icon;
    }
}
