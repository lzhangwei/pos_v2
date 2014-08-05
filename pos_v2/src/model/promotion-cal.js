function PromotionCal() {

  // var init = function(promotionType, promotion) {
  //
  //   var allPromotions = loadPromotions();
  //
  //   for(var i=0; i < allPromotions.length; i++){
  //
  //     if(allPromotions[i].type === promotionType){
  //
  //       promotion = allPromotions[i];
  //       break;
  //
  //     }
  //   }
  // };

  this.promotion ;

  //init(promotionType, this.promotion);
}

PromotionCal.prototype.init = function(promotionType) {

  var allPromotions = loadPromotions();

  for(var i=0; i < allPromotions.length; i++){

    if(allPromotions[i].type === promotionType){

      this.promotion = allPromotions[i];
      break;

    }
  }
};

PromotionCal.prototype.cartItemPromotionnum = function(cartItem) {

  for(var j = 0; j < this.promotion.barcodes.length; j++) {

    if(cartItem.getBarcode() === this.promotion.barcodes[j]) {

      cartItem.promotionNum = parseInt(cartItem.num/3);
      break;

    }
  }
};
