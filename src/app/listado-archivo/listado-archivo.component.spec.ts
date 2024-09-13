import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArchivoComponent } from './listado-archivo.component';

describe('ListadoArchivoComponent', () => {
  let component: ListadoArchivoComponent;
  let fixture: ComponentFixture<ListadoArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
