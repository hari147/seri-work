import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaucComponent } from './glauc.component';

describe('GlaucComponent', () => {
    let component: GlaucComponent;
    let fixture: ComponentFixture<GlaucComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GlaucComponent]
        }).compileComponents();
    }));

    beforeEach(() => {GlaucComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
