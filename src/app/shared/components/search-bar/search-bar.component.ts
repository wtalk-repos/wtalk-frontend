import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() placeholderText = 'Search...';

  public searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    console.log(fb);
  }

  ngOnInit(): void { }

  onSubmit() {
    this.emitSearch();
  }
  emitSearch() {
    this.search.emit(this.searchForm.get('searchTerm')?.value as any);
  }
}
