import { cardInfo } from './card-info.js';
import { cardTitle } from './card-info.js';
import $ from 'jquery';

export default class FlashCards {
  constructor(list) {
    this.toFlashCards();
  };

  toFlashCards (){

    let print = (arrToPrint, extraTime) => {
      arrToPrint.forEach(function(info, idx){
        let call = (info, idx) => { setTimeout(() => {$('.display').text(info)}, (idx*6000)+extraTime)}
        call(info, idx)
      })
    }

    let printCards = (type, extra) => {
      print(type, extra);
      setInterval(function(){
        print(type, extra);
      }, cardInfo.length * 6000);
    }

    printCards(cardTitle, 0);
    printCards(cardInfo, 3000)

  }

};
