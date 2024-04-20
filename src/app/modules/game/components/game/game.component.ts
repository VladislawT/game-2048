import {Component, HostListener, OnInit} from '@angular/core';
import {Item} from '../../models/items';
import {GameService} from '../../services/game.service';

const colorMap: {[k: number]: string} = {
  2: '#e3f2fd',
  4: '#bbdefb',
  8: '#90caf9',
  16: '#64b5f6',
  32: '#42a5f5',
  64: '#2196f3',
  128: '#1e88e5',
  256: '#1976d2',
  512: '#1565c0',
  1024: '#0d47a1',
  2048: '#0d3b66',
};

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  keyEventCodeMap: {[type: string]: string} = {
    ArrowRight: 'right',
    ArrowLeft: 'left',
    ArrowUp: 'up',
    ArrowDown: 'down',
  };

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  getStyles(item: Item): {[p: string]: string} {
    const top = (item.row * 110 - 100) + 'px';
    const left = (item.col * 110 - 100) + 'px';
    return {
      top,
      left,
      'background-color': colorMap[item.value] || 'black',
      'font-size': item.value >= 10000 ? '30px' : '50px'
    };
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (this.keyEventCodeMap[event.code]) {
      this.gameService[this.keyEventCodeMap[event.code]]();
    }
  }

}
