import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
    private router: Router,

  ) { }

  ngOnInit(): void {
   
  }

  Eliminar (){
    
  }
  onNoClick(): void {
    this.dialogRef.close();
   }

}
