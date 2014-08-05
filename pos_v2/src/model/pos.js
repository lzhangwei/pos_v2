function Pos(scanner,cart){
  this.scanner = scanner;
  this.cart = cart;
  this.sumPrice = 0;
  this.savePrice = 0;
}

Pos.prototype.titlePrint = function() {

  var date = MyFormat.dateformat(new Date());

  var result = '***<没钱赚商店>购物清单***\n' + '打印时间：' + date + '\n';

  return result;
};

Pos.prototype.commonPrint = function() {
  var result = '----------------------\n';
  for(var i = 0; i < this.cart.getCartItemList().length; i++){
      result += '名称：' + this.cart.getCartItemList()[i].item.name
                + '，数量：' + this.cart.getCartItemList()[i].num + this.cart.getCartItemList()[i].item.unit
                + '，单价：' + this.cart.getCartItemList()[i].item.price.toFixed(2)
                + '(元)，小计：' + this.cart.getCartItemList()[i].smallCal().toFixed(2)
                + '(元)\n';
      this.sumPrice +=  this.cart.getCartItemList()[i].smallCal();
  }
  return result;
};

Pos.prototype.givePrint = function() {
  var result = '----------------------\n挥泪赠送商品：\n';
  for(var i = 0; i < this.cart.getCartItemList().length; i++){
    if(this.cart.getCartItemList()[i].promotionNum > 0){
      result += '名称：' + this.cart.getCartItemList()[i].item.name + '，数量：'
                + this.cart.getCartItemList()[i].promotionNum + this.cart.getCartItemList()[i].item.unit
                + '\n';
      this.savePrice +=  this.cart.getCartItemList()[i].promotionNum * this.cart.getCartItemList()[i].item.price;
    }
  }
  return result;
};

Pos.prototype.pricePrint = function() {
  var result = '----------------------\n'
             + '总计：' + this.sumPrice.toFixed(2) + '(元)\n'
             + '节省：' + this.savePrice.toFixed(2) + '(元)\n'
             + '**********************';
  return result;
};
