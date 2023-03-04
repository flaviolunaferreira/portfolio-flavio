import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumacaComponent } from './fumaca.component';

describe('FumacaComponent', () => {
  let component: FumacaComponent;
  let fixture: ComponentFixture<FumacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
