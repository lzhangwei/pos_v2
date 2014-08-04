function printInventory (inputs) {
  var input = new InputPrase(inputs);
  var barnum = input.prase();

  var cart = new Cart(barnum);
  var itemlist = cart.init();

  var mf = new MyFormat();
  var date = mf.dateformat(new Date());

  var inven = new Inventory(date);

  var result = inven.titlePrint();
  result += inven.commonPrint(itemlist);
  result += inven.givePrint(itemlist);
  result += inven.pricePrint();

  console.log(result);
}
