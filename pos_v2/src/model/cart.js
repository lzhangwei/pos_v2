function Cart(){
  this.cartitemList = [];
}

Cart.prototype.init = function(barcodelist) {

  var items = loadAllItems();

  for(var i = 0; i < barcodelist.length; i++){

    for(var j = 0; j < items.length; j++){

      if(items[j].barcode === barcodelist[i]){

        var cartitem = new CartItem(items[j], 1);
        this.cartitemList.push(cartitem);
        break;

      }
    }
  }

  for(var i = 0; i < this.cartitemList.length; i++){

    for(var j = 0; j < i; j++){

      if(this.cartitemList[j].item.barcode === this.cartitemList[i].item.barcode){
        this.cartitemList[j].num += this.cartitemList[i].num;
        this.cartitemList.splice(i,1);
        i--;
        break;
      }

    }
  }

};

// Cart.prototype.isPromotionItem = function(item) {
//   var allPromBars = this.getPromotionbars();
//   for(var j = 0; j < allPromBars.length; j++){
//     if(allPromBars[j] === item.barcode){
//       return 1;
//     }
//   }
//   return 0;
// };
//
// Cart.prototype.getPromotionbars = function() {
//   var allPromotions = loadPromotions();
//   var allPromBars;
//   for(var i=0; i<allPromotions.length; i++){
//     if(allPromotions[i].type == 'BUY_TWO_GET_ONE_FREE'){
//       allPromBars = allPromotions[i].barcodes;
//       break;
//     }
//   }
//   return allPromBars;
// };
