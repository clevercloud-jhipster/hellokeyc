import { Route } from '@angular/router';

import { KeycConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'keyc-configuration',
    component: KeycConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
