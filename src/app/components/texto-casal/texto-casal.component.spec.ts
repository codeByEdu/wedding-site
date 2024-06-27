import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoCasalComponent } from './texto-casal.component';

describe('TextoCasalComponent', () => {
  let component: TextoCasalComponent;
  let fixture: ComponentFixture<TextoCasalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoCasalComponent]
    });
    fixture = TestBed.createComponent(TextoCasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
