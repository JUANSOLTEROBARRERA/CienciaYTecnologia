import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadasComponent } from './privadas.component';

describe('PrivadasComponent', () => {
  let component: PrivadasComponent;
  let fixture: ComponentFixture<PrivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
