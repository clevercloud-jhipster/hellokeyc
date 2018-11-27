import { Route } from '@angular/router';

import { KeycMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'keyc-metrics',
    component: KeycMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
