function Scanner(){
}

Scanner.prototype.scan = function(inputs) {

};

function BarcodeScanner(){
  Scanner.call(this);
}

BarcodeScanner.prototype.scan = function(inputs) {

  var barcodelist = [];

  for(var i = 0; i < inputs.length; i++){

    var itemSpilt = inputs[i].split('-');

    for(var j = 0; j < (itemSpilt[1] || 1); j++){
      barcodelist.push(itemSpilt[0]);
    }

  }
  return barcodelist;
};
