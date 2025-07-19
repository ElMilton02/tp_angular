import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryContac } from './brewery-contac';

describe('BreweryContac', () => {
  let component: BreweryContac;
  let fixture: ComponentFixture<BreweryContac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryContac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryContac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
