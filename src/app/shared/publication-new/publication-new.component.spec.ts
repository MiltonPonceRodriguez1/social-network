import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationNewComponent } from './publication-new.component';

describe('PublicationNewComponent', () => {
  let component: PublicationNewComponent;
  let fixture: ComponentFixture<PublicationNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationNewComponent]
    });
    fixture = TestBed.createComponent(PublicationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
