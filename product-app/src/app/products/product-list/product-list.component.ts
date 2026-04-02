import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [FormsModule, CommonModule, MatToolbarModule, MatCardModule, 
        MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatIconModule],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

    displayedColumns = ['name', 'price', 'stock', 'actions'];
    editingProductId: number | null = null;
    products: any[] = [];

    name = '';
    price = 0;
    stock = 0;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.products = data;
            }
        });
    }

    editProduct(product: any) {

        this.editingProductId = product.id;

        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
    }

    saveProduct() {

        const product = {
            name: this.name,
            price: this.price,
            stock: this.stock
        };

        if (this.editingProductId) {

            this.productService
                .updateProduct(this.editingProductId, product)
                .subscribe(() => {
                    this.resetForm();
                    this.loadProducts();
                });

        } else {

            this.productService
                .createProduct(product)
                .subscribe(() => {
                    this.resetForm();
                    this.loadProducts();
                });

        }
    }

    resetForm() {
        this.name = '';
        this.price = 0;
        this.stock = 0;
        this.editingProductId = null;
    }

    deleteProduct(id: number) {

        this.productService.deleteProduct(id).subscribe({
            next: () => this.loadProducts()
        });

    }
}