function Pos(scanner,cart){
  this.scanner = scanner;
  this.cart = cart;
  this.sumPrice = 0;
  this.savePrice = 0;
}

Pos.prototype.titlePrint = function() {

  //var mf = new MyFormat();
  var date = MyFormat.dateformat(new Date());

  var result = '***<没钱赚商店>购物清单***\n' + '打印时间：' + date + '\n';

  return result;
};

Pos.prototype.commonPrint = function() {
  var result = '----------------------\n';
  for(var i = 0; i < this.cart.cartitemList.length; i++){
      result += '名称：' + this.cart.cartitemList[i].item.name
                + '，数量：' + this.cart.cartitemList[i].num + this.cart.cartitemList[i].item.unit
                + '，单价：' + this.cart.cartitemList[i].item.price.toFixed(2)
                + '(元)，小计：' + this.cart.cartitemList[i].smallCal().toFixed(2)
                + '(元)\n';
      this.sumPrice +=  this.cart.cartitemList[i].smallCal();
  }
  return result;
};

Pos.prototype.givePrint = function() {
  var result = '----------------------\n挥泪赠送商品：\n';
  for(var i = 0; i < this.cart.cartitemList.length; i++){
    if(this.cart.cartitemList[i].promotionNum > 0){
      result += '名称：' + this.cart.cartitemList[i].item.name + '，数量：'
                + this.cart.cartitemList[i].promotionNum + this.cart.cartitemList[i].item.unit
                + '\n';
      this.savePrice +=  this.cart.cartitemList[i].promotionNum * this.cart.cartitemList[i].item.price;
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
