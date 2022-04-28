import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFuncionariosComponent } from './consultar-funcionarios.component';

describe('ConsultarFuncionariosComponent', () => {
  let component: ConsultarFuncionariosComponent;
  let fixture: ComponentFixture<ConsultarFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
