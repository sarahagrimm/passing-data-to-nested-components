import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})

export class ParentComponent {

    childTitle: string = 'text passed to child';
    
    constructor(){}

   
}