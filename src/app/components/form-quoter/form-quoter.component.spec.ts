import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuoterComponent } from './form-quoter.component';

describe('FormQuoterComponent', () => {
  let component: FormQuoterComponent;
  let fixture: ComponentFixture<FormQuoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQuoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
