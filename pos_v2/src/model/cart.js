function Cart(inputlist){
  this.inputlist = inputlist;
}

Cart.prototype.init = function() {
  var itemlist = [];

  var items = loadAllItems();
  for(var i = 0; i < this.inputlist.length; i++){
    for(var j = 0; j < items.length; j++){
      if(items[j].barcode === this.inputlist[i].barcode){
        var good = new ItemInfo(items[j], this.inputlist[i].quantity);
        good.ispromotion = this.isPromotionItem(items[j]);
        itemlist.push(good);
        break;
      }
    }
  }
  return itemlist;
};

Cart.prototype.isPromotionItem = function(item) {
  var allPromBars = this.getPromotionbars();
  for(var j = 0; j < allPromBars.length; j++){
    if(allPromBars[j] === item.barcode){
      return 1;
    }
  }
  return 0;
};

Cart.prototype.getPromotionbars = function() {
  var allPromotions = loadPromotions();
  var allPromBars;
  for(var i=0; i<allPromotions.length; i++){
    if(allPromotions[i].type == 'BUY_TWO_GET_ONE_FREE'){
      allPromBars = allPromotions[i].barcodes;
      break;
    }
  }
  return allPromBars;
};
