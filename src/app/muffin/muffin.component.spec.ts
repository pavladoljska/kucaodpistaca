import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuffinComponent } from './muffin.component';

describe('MuffinComponent', () => {
  let component: MuffinComponent;
  let fixture: ComponentFixture<MuffinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuffinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuffinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
