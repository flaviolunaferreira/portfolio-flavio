import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroServicoComponent } from './micro-servico.component';

describe('MicroServicoComponent', () => {
  let component: MicroServicoComponent;
  let fixture: ComponentFixture<MicroServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
