function printInventory (inputs) {

  var scanner = new BarcodeScanner();
  var barcodelist = scanner.scan(inputs);

  var cart = new Cart(barcodelist);

  var promotioncal = new PromotionCal();
  promotioncal.init('BUY_TWO_GET_ONE_FREE');

  for(var i = 0; i < cart.getCartItemList().length; i++) {
    var cartItemlist = cart.getCartItemList();
    promotioncal.cartItemPromotionnum(cartItemlist[i]);
  }

  var pos = new Pos(scanner, cart);
  
  var result = pos.titlePrint();
  result += pos.commonPrint();
  result += pos.givePrint();
  result += pos.pricePrint();

  console.log(result);

}
