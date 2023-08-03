import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPlansComponent } from './banner-plans.component';

describe('BannerPlansComponent', () => {
  let component: BannerPlansComponent;
  let fixture: ComponentFixture<BannerPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPlansComponent]
    });
    fixture = TestBed.createComponent(BannerPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
