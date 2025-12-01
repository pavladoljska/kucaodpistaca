import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistachioComponent } from './pistachio.component';

describe('PistachioComponent', () => {
  let component: PistachioComponent;
  let fixture: ComponentFixture<PistachioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PistachioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PistachioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
