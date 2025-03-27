import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    CommonModule
  ]
})
export class DashboardComponent {
  displayedColumns: string[] = ['nombre', 'ultimaCita', 'siguienteCita', 'pesoInicial', 'kcal', 'imc', 'objetivo', 'acciones'];
  pacientes = new MatTableDataSource([
    { nombre: "Juan Pérez", ultimaCita: "10 Ene 2025", siguienteCita: "15 Feb 2025", pesoInicial: 80, kcal: 2200, imc: 25, objetivo: "Perder peso" },
    { nombre: "Ana Gómez", ultimaCita: "5 Feb 2025", siguienteCita: "10 Mar 2025", pesoInicial: 65, kcal: 1800, imc: 22, objetivo: "Mantener peso" }
  ]);
}
