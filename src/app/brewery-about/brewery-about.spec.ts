import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryAbout } from './brewery-about';

describe('BreweryAbout', () => {
  let component: BreweryAbout;
  let fixture: ComponentFixture<BreweryAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
