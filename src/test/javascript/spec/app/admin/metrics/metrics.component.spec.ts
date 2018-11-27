import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { HellokeycTestModule } from '../../../test.module';
import { KeycMetricsMonitoringComponent } from 'app/admin/metrics/metrics.component';
import { KeycMetricsService } from 'app/admin/metrics/metrics.service';

describe('Component Tests', () => {
    describe('KeycMetricsMonitoringComponent', () => {
        let comp: KeycMetricsMonitoringComponent;
        let fixture: ComponentFixture<KeycMetricsMonitoringComponent>;
        let service: KeycMetricsService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [HellokeycTestModule],
                declarations: [KeycMetricsMonitoringComponent]
            })
                .overrideTemplate(KeycMetricsMonitoringComponent, '')
                .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(KeycMetricsMonitoringComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(KeycMetricsService);
        });

        describe('refresh', () => {
            it('should call refresh on init', () => {
                // GIVEN
                const response = {
                    timers: {
                        service: 'test',
                        unrelatedKey: 'test'
                    },
                    gauges: {
                        'jcache.statistics': {
                            value: 2
                        },
                        unrelatedKey: 'test'
                    }
                };
                spyOn(service, 'getMetrics').and.returnValue(of(response));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.getMetrics).toHaveBeenCalled();
                expect(comp.servicesStats).toEqual({ service: 'test' });
                expect(comp.cachesStats).toEqual({ jcache: { name: 17, value: 2 } });
            });
        });

        describe('isNan', () => {
            it('should return if a variable is NaN', () => {
                expect(comp.filterNaN(1)).toBe(1);
                expect(comp.filterNaN('test')).toBe(0);
            });
        });
    });
});
