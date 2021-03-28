$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
  });

/* code to multiply the quantity with the stock price */
$('#stock_total, #stock_price_changing').keyup(function(){
    var stock_total = parseFloat($('#stock_total').val()) || 0;
    var stock_price_changing = parseFloat($('#stock_price_changing').val()) || 0;
    var result = Math.round(stock_total * stock_price_changing * 100)/100;
    $('#total_price').val(result);
});