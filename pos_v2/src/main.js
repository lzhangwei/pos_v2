function printInventory (inputs) {

  var scanner = new BarcodeScanner();
  var cart = new Cart();

  var pos = new Pos(scanner, cart);

  var barcodelist = pos.scanner.scan(inputs);

  pos.cart.init(barcodelist);

  var promotioncal = new PromotionCal();
  promotioncal.init('BUY_TWO_GET_ONE_FREE');

  for(var i = 0; i < pos.cart.cartitemList.length; i++)
    promotioncal.cartitemPromotionnum(pos.cart.cartitemList[i]);

  var result = pos.titlePrint();
  result += pos.commonPrint();
  result += pos.givePrint();
  result += pos.pricePrint();

  console.log(result);

}
