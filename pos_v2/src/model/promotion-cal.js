function PromotionCal() {
  this.promotion = null;
}

PromotionCal.prototype.init = function(promotionType) {

  var allPromotions = loadPromotions();

  for(var i=0; i<allPromotions.length; i++){

    if(allPromotions[i].type === promotionType){

      this.promotion = allPromotions[i];
      break;

    }
  }
};

PromotionCal.prototype.cartitemPromotionnum = function(cartitem) {

  for(var i = 0; i < this.promotion.barcodes.length; i++) {

    if(cartitem.item.barcode === this.promotion.barcodes[i]) {

      cartitem.promotionNum = parseInt(cartitem.num/3);
      break;

    }
  }
};
