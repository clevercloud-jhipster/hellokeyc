import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { HellokeycSharedLibsModule, HellokeycSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [HellokeycSharedLibsModule, HellokeycSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [HellokeycSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HellokeycSharedModule {
    static forRoot() {
        return {
            ngModule: HellokeycSharedModule
        };
    }
}
