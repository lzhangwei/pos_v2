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

// InputPrase.prototype.prase = function() {
//   var barnum = [];
//   for(var i = 0; i < this.inputs.length; i++){
//     var itemSpilt = this.inputs[i].split('-');
//
//     var input = new InputInfo(itemSpilt[0], (Number(itemSpilt[1]) || 1) );
//
//     barnum.push(input);
//   }
//
//   var barquan = this.calQuantity(barnum);
//
//   return barquan;
// };
//
// InputPrase.prototype.calQuantity = function(barnum) {
//   for(var i = 0; i < barnum.length; i++){
//
//     for(var j = 0; j < i; j++){
//
//       if(barnum[j] && barnum[j].barcode === barnum[i].barcode){
//         barnum[j].quantity += barnum[i].quantity;
//         barnum.splice(i,1);
//         i--;
//         break;
//       }
//
//     }
//   }
//
//
//   return barnum;
// };
