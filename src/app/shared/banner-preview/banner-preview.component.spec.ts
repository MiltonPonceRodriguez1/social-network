import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPreviewComponent } from './banner-preview.component';

describe('BannerPreviewComponent', () => {
  let component: BannerPreviewComponent;
  let fixture: ComponentFixture<BannerPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerPreviewComponent]
    });
    fixture = TestBed.createComponent(BannerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
