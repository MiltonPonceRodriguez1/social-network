import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceListFavoritesComponent } from './marketplace-list-favorites.component';

describe('MarketplaceListFavoritesComponent', () => {
  let component: MarketplaceListFavoritesComponent;
  let fixture: ComponentFixture<MarketplaceListFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceListFavoritesComponent]
    });
    fixture = TestBed.createComponent(MarketplaceListFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
