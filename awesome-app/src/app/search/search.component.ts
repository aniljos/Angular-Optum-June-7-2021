import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {map, tap, debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formGroup: FormGroup
  constructor() { 

    this.formGroup = new FormGroup({
      search: new FormControl()
    });

  }

  ngOnInit(): void {

    this.formGroup
          .get("search")
          .valueChanges
          .pipe(
            tap(v => console.log("in tap: ", v)),
            debounceTime(1000),
            map(v => v.toUpperCase())
          )
          .subscribe((input) => {
            console.log("subscriber: ", input);

          });
  }

}
