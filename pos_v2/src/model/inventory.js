function Inventory(date){
  this.title = '';
  this.date = date;
  this.sumPrice = 0;
  this.savePrice = 0;
}

Inventory.prototype.titlePrint = function() {
  this.title = '***<没钱赚商店>购物清单***\n';
  var result = this.title + '打印时间：' + this.date + '\n';
  return result;
};

Inventory.prototype.commonPrint = function(itemlist) {
  var result = '----------------------\n';
  for(var i = 0; i < itemlist.length; i++){
    if(itemlist[i].ispromotion === 1){
      result += '名称：' + itemlist[i].item.name
                + '，数量：' + itemlist[i].num + itemlist[i].item.unit
                + '，单价：' + itemlist[i].item.price.toFixed(2)
                + '(元)，小计：' + (itemlist[i].item.price * (itemlist[i].num - parseInt(itemlist[i].num / 3))).toFixed(2)
                + '(元)\n';
      this.sumPrice +=  itemlist[i].item.price * (itemlist[i].num - parseInt(itemlist[i].num / 3));
    }else{
      result += '名称：' + itemlist[i].item.name
                + '，数量：' + itemlist[i].num + itemlist[i].item.unit
                + '，单价：' + itemlist[i].item.price.toFixed(2)
                + '(元)，小计：' + (itemlist[i].item.price * itemlist[i].num).toFixed(2)
                + '(元)\n';
      this.sumPrice +=  itemlist[i].item.price * itemlist[i].num;
    }

  }
  return result;
};

Inventory.prototype.givePrint = function(itemlist) {
  var result = '----------------------\n挥泪赠送商品：\n';
  for(var i = 0; i < itemlist.length; i++){
    if(itemlist[i].ispromotion === 1 && itemlist[i].num > 2)
      result += '名称：' + itemlist[i].item.name + '，数量：'
                + parseInt(itemlist[i].num / 3) + itemlist[i].item.unit
                + '\n';
      this.savePrice +=  parseInt(itemlist[i].num / 3) * itemlist[i].item.price;
  }
  return result;
};

Inventory.prototype.pricePrint = function() {
  var result = '----------------------\n'
             + '总计：' + this.sumPrice.toFixed(2) + '(元)\n'
             + '节省：' + this.savePrice.toFixed(2) + '(元)\n'
             + '**********************';
  return result;
};
