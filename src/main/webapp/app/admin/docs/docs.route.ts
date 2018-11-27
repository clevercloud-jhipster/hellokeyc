import { Route } from '@angular/router';

import { KeycDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: KeycDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
