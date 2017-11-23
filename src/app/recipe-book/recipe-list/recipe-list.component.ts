import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Test recipe 1',
      'oh, come one it is just a test 1',
      'http://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg'),
    new RecipeModel(
      'Test recipe 2',
      'oh, come one it is just a test 2',
      'http://www.pizzeria-stajenka.pl/wp-content/uploads/2016/11/pizza.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
