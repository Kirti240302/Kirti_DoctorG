import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatloginComponent } from './patlogin.component';

describe('DocloginComponent', () => {
  let component: PatloginComponent;
  let fixture: ComponentFixture<PatloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
