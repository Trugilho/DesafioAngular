import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpahomeComponent } from './spahome.component';

describe('SpahomeComponent', () => {
  let component: SpahomeComponent;
  let fixture: ComponentFixture<SpahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpahomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
