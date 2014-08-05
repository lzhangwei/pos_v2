var MyFormat = MyFormat || {};
MyFormat.dateformat = function(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0'+(date.getMonth() + 1);
  var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  var hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  var minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  var second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
  return year + '年' + month + '月' + day + '日 '
          + hour + ':' + minute + ':' + second;
};
