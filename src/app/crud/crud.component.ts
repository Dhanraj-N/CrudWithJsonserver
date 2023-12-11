import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;
  allData: any = [];
  
  // name: string = '';
  // country: string = '';

  constructor(private ser: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ser.getData().subscribe((res) => {
      this.allData = res;
    })

    this.form = this.fb.group({
      name: ['', [Validators.required]],
      country: ['', [Validators.required]]
    })
  }

  postData() {
    this.submitted = true;
    if (this.form.valid){
   
        console.log(this.form.value);
        this.ser.postData(this.form.value).subscribe((res: any) => {
          this.allData = res;

          this.ser.getData().subscribe((res) => {
            this.allData = res;
          })
        })  
    }
}
  

  onEdit(data:any) {
    // this.name = data.name;
    // this.country = data.country;
    this.form.patchValue(data)
    console.log(data);
 }

  deleteData(id: any) {
    this.ser.deletData(id).subscribe((res) => {
      console.log(res)
      this.ser.getData().subscribe((res) => {
        this.allData = res;
      })  
    })
  }

}
