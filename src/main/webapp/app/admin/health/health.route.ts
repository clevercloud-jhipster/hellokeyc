import { Route } from '@angular/router';

import { KeycHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'keyc-health',
    component: KeycHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
