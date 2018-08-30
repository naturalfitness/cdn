function validateCoupon(){
    var couponInput = $('input.form-control[name=coupon]');
    var couponTxt = $("#osc-summary-data .osc-tab-sum-tot tr:nth-last-of-type(2) td:nth-child(1) strong");
    var couponVal = $("#osc-summary-data .osc-tab-sum-tot tr:nth-last-of-type(2) td:nth-child(2) strong");
    var couponCode = couponTxt.text().split(' ')[2];
    var couponValue = parseInt(couponVal.text().split(' ')[1]);
    if(couponInput.val().length == 10 && couponValue == 0){
        couponTxt.html("CUPOM (CORDA DE PULAR PVC):").css("color","#129809");
        couponVal.html("GRÁTIS").css("color","#129809");
    }
}


$(document).ready(function(){
    setTimeout(function(){
        if($('#osc-summary-data .osc-tab-sum-tot tr:nth-last-of-type(2)').length == 1){
            validateCoupon();
        }
    }, 2000);
});

$('.menu_payment').on("change", function(){
    setTimeout(function(){
        if($('#osc-remove-coupon-btn').length == 1) {
            validateCoupon();
        }
    }, 1000);
});

$('#osc-coupon-btn').click(function(){
    setTimeout(function(){
        if($('#messageSucess').length == 1){
            validateCoupon();
        }
    }, 1000);
});

$(window).load(function(){
    if($('#osc-remove-coupon-btn').length == 1 || ($('#osc-summary-data .osc-tab-sum-tot tr:nth-last-of-type(2)').length == 1)){
        validateCoupon();
    }
});
