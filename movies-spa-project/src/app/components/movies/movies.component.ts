import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
// Services
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieList: any = [];
  public response = false;
  searchForm: FormGroup;

  constructor(private apiService: ApiService, public fb: FormBuilder) { }

  ngOnInit() {
    this.updateForm();
  }

  // Form control method.
  updateForm() {
    this.searchForm = this.fb.group({
      movieTitle: ['']
    });
  }

  // Get Movies list
  getMovieList(search) {
    this.apiService.getSearchedMovies(search).subscribe(data => {
      this.movieList = data.Search;
      this.response = data.Response;
    });
  }

  // Click on search
  submitForm() {
    this.movieList = [''];
    var title = this.searchForm.value.movieTitle;
    this.getMovieList(title);
  }

}
