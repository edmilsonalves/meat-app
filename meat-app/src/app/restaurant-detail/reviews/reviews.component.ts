import { Component, OnInit, Input } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router'
import { Review } from './review.model';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]

  constructor(private restaurantsServices: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsServices.reviewsOfRestaurant(this.route.parent.snapshot.params["id"])
      .subscribe(reviews => this.reviews = reviews)
  }

}
