import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceListAllComponent } from './marketplace-list-all.component';

describe('MarketplaceListAllComponent', () => {
  let component: MarketplaceListAllComponent;
  let fixture: ComponentFixture<MarketplaceListAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceListAllComponent]
    });
    fixture = TestBed.createComponent(MarketplaceListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
