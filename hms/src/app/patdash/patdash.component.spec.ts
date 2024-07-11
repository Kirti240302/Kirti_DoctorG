import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatdashComponent } from './patdash.component';

describe('PatdashComponent', () => {
  let component: PatdashComponent;
  let fixture: ComponentFixture<PatdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
