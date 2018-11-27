import { NgModule } from '@angular/core';

import { HellokeycSharedLibsModule, FindLanguageFromKeyPipe, KeycAlertComponent, KeycAlertErrorComponent } from './';

@NgModule({
    imports: [HellokeycSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, KeycAlertComponent, KeycAlertErrorComponent],
    exports: [HellokeycSharedLibsModule, FindLanguageFromKeyPipe, KeycAlertComponent, KeycAlertErrorComponent]
})
export class HellokeycSharedCommonModule {}
