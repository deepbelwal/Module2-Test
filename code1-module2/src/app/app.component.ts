import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test1';
  fname:string="";
  lname:string="";
  gen:string="";
  list = {};
  valid:Boolean=false;
  selectedGender: string;
  Gender: string[] = ['Male', 'Female'];
  val:number=0;
  myControl = new FormControl();
  options: User[] = [
    { name: 'Roush' },
    { name: 'CCD' },
    { name: 'Pasta' },
    { name: 'SVC' },
    { name: 'Main Building' }
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  submit()
  {
    console.log("im in",this.fname);
    
    this.valid = true;

    this.list={
      firstname:this.fname,
      lastname:this.lname,
      gender:this.selectedGender
      
    }
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}

