import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FileType } from '../../models/file.item.model';


@Component({
  selector: 'app-listado-archivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-archivo.component.html',
  styleUrl: './listado-archivo.component.css'
})
export class ListadoArchivoComponent {

  @Input() files: FileItem[] = [];
  seleccionados: string[] = []; 
  FileType: FileType = FileType.FILE;


  seleccionArchivo(fileId: string) {
      if(!this.seleccionados.includes(fileId)){
        this.seleccionados.push(fileId)
      }
    }

  borrar() {
    this.files = this.files.filter(file => !this.seleccionados.includes(file.id)); 
    this.seleccionados = [];
  }
}
