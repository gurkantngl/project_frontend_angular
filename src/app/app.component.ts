import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { ProductComponent } from "./components/product/product.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, CategoryComponent, NaviComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // 'styleUrl' yerine 'styleUrls' olmalı
})
export class AppComponent {
  title = 'northwind';
  user = 'Gürkan Töngel';

}
