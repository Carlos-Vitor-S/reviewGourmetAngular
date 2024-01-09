import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNavegationBarComponent } from './custom-navegation-bar.component';

describe('CustomNavegationBarComponent', () => {
  let component: CustomNavegationBarComponent;
  let fixture: ComponentFixture<CustomNavegationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNavegationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNavegationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
