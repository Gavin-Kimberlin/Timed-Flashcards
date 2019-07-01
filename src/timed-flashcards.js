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





// print(cardInfo, 3000);
// setInterval(function(){
//   print(cardInfo, 3000);
// }, cardInfo.length * 6000);
// print(cardTitle,0);
// setInterval(function(){
//   print(cardTitle, 0);
// }, cardInfo.length * 6000);

// cardTitle.forEach(function (title) {
//   setInterval (function(){
//     console.log(title);
//   }, 3000)
// })

// doSetTimeout(i, n){
//   setTimeout(function(){
//     console.log(i);
//   }, n*3000)
// }
