import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Injectable() // Add this line
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // HttpClientModule burada olmalı
  providers : [ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = "https://localhost:44314/api/products/getall";
  dataLoaded = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("Init çalıştı");
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
