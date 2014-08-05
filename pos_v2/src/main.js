function printInventory (inputs) {

  var scanner = new BarcodeScanner();
  var barcodelist = scanner.scan(inputs);

  var cart = new Cart(barcodelist);

  var promotioncal = new PromotionCal();
  promotioncal.init('BUY_TWO_GET_ONE_FREE');

  for(var i = 0; i < cart.getCartItemList().length; i++) {
    promotioncal.cartItemPromotionnum(cart.getCartItemList()[i]);
  }

  var pos = new Pos(cart);

  console.log(pos.titlePrint() + pos.commonPrint()
              + pos.givePrint() + pos.pricePrint());

}
