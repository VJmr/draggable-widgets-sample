import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiles: any;

  ngOnInit(){
    this.tiles = [
      {
            'name': 'tileone',
            'position':1,
            'data':{
              'title': 'A',
              'description':'A is the first letter'
            },
            'show': true,
            'size': 'large'
        
      },
      {
            'name': 'tiletwo',
            'position':2,
            'data':{
              'title': 'B',
              'description':'B is the second letter'
            },
            'show': true,
            'size': 'large'
        
      },
      {
            'name': 'tilethree',
            'position':3,
            'data':{
              'title': 'C',
              'description':'C is the third letter'
            },
            'show': true,
            'size': 'large'
        
      },
      {
            'name': 'tilefour',
            'position':4,
            'data':{
              'title': 'W',
              'description':'W is the 23rd letter'
            },
            'show': true,
            'size': 'small'
        
      },
      {
            'name': 'tilefive',
            'position':5,
            'data':{
              'title': 'X',
              'description':'X is the 24th letter'
            },
            'show': true,
            'size': 'small'
        
      },
      {
            'name': 'tilesix',
            'position':6,
            'data':{
              'title': 'Y',
              'description':'Y is the 25th letter'
            },
            'show': true,
            'size': 'small'
        
      },
      {
            'name': 'tileseven',
            'position':7,
            'data':{
              'title': 'Z',
              'description':'Z is the 26th letter'
            },
            'show': true,
            'size': 'small'
        
      }
      
    ]
  }

  onChange(event, position){
    //this.tiles[position].show= event.srcElement.checked;
    this.tiles[position-1].show = event.srcElement.checked;
  }

  close(position){
    this.tiles[position-1].show = false;
  }
}
