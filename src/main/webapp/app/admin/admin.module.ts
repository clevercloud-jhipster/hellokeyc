import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { HellokeycSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    LogsComponent,
    KeycMetricsMonitoringModalComponent,
    KeycMetricsMonitoringComponent,
    KeycHealthModalComponent,
    KeycHealthCheckComponent,
    KeycConfigurationComponent,
    KeycDocsComponent
} from './';

@NgModule({
    imports: [
        HellokeycSharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        LogsComponent,
        KeycConfigurationComponent,
        KeycHealthCheckComponent,
        KeycHealthModalComponent,
        KeycDocsComponent,
        KeycMetricsMonitoringComponent,
        KeycMetricsMonitoringModalComponent
    ],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    entryComponents: [KeycHealthModalComponent, KeycMetricsMonitoringModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HellokeycAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
