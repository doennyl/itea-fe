import { Component, Input } from '@angular/core';
import { Product } from '@models';
import { CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-tile',
    standalone: true,
    imports: [CurrencyPipe, MatCardModule, MatIconModule, RouterLink],
    templateUrl: './product-tile.component.html',
    styleUrl: './product-tile.component.scss',
})
export class ProductTileComponent {
    @Input() product: Product;
}
