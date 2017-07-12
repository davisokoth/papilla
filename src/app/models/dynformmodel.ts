import {FormGroup, Validators, FormControl} from '@angular/forms';

export class DynFormModel {
    elements = [];
    toGroup() {
        let group: any = {};
        this.elements.forEach((element) => {
            if (element.required) {
                group[element.key] = new FormControl('', Validators.required);
            } else {
                group[element.key] = new FormControl('');
            }
        });
        return new FormGroup(group);
    }

    constructor() {}
}
