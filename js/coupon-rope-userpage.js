function ChangeCouponText(){
    var couponTxt = $('#content div.table-responsive tfoot tr:nth-last-of-type(2) td:nth-last-of-type(2) b');
    var couponVal = $('#content div.table-responsive tfoot tr:nth-last-of-type(2) td:last-of-type');
    var couponCode = couponTxt.text().split(' ')[1].substring(1,11);
    var couponValue = parseInt(couponVal.text().split(' ')[1]);
    if(couponCode.length == 10 && couponValue == 0){
        couponTxt.html("Cupom (Corda de Pular PVC)");
        couponVal.html("Grátis");
    }
}

$(window).load(function(){
        ChangeCouponText();
});

$(document).ready(function(){
        ChangeCouponText();
});
