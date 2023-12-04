import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
    @Output() currentPage = new EventEmitter<HeaderPage>();

    onRecipes(){
        this.currentPage.emit(HeaderPage.RECIPES);
    }

    onShopping(){
        this.currentPage.emit(HeaderPage.SHOPPING_LIST);
    }
}

export enum HeaderPage{
    RECIPES,
    SHOPPING_LIST
}