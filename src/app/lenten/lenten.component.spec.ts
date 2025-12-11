import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentenComponent } from './lenten.component';

describe('LentenComponent', () => {
  let component: LentenComponent;
  let fixture: ComponentFixture<LentenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LentenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
