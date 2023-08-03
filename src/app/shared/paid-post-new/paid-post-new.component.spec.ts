import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidPostNewComponent } from './paid-post-new.component';

describe('PaidPostNewComponent', () => {
  let component: PaidPostNewComponent;
  let fixture: ComponentFixture<PaidPostNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaidPostNewComponent]
    });
    fixture = TestBed.createComponent(PaidPostNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
