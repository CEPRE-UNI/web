import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicolComponent } from './psicol.component';

describe('PsicolComponent', () => {
  let component: PsicolComponent;
  let fixture: ComponentFixture<PsicolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
