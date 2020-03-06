import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Service
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movie: any;
  public movieId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.getMovieDetail();
  }

  // Get detail from a movie
  getMovieDetail() {
    this.movieId = this.activatedRoute.snapshot.params.imdbID;
    this.apiService.getMovieDetails(this.movieId).subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    });
  }

  // Go back in navigation
  back() {
    this.router.navigate(['/']);
  }

}
