function Cart(barcodelist){

  var init = function(barcodelist, cartItemList) {

    var items = loadAllItems();

    for(var i = 0; i < barcodelist.length; i++){

      for(var j = 0; j < items.length; j++){

        if(items[j].barcode === barcodelist[i]){

          var cartItem = new CartItem(items[j], 1);
          cartItemList.push(cartItem);
          break;

        }
      }
    }

    for(var i = 0; i < cartItemList.length; i++){

      for(var j = 0; j < i; j++){

        if(cartItemList[j].item.barcode === cartItemList[i].item.barcode){
          cartItemList[j].num += cartItemList[i].num;
          cartItemList.splice(i,1);
          i--;
          break;
        }

      }
    }

  };

  this.cartItemList = [];

  init(barcodelist, this.cartItemList);
}

Cart.prototype.getCartItemList = function() {
  return this.cartItemList;
};
