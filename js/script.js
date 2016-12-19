$(document).ready(function () {

    var $groupProductName = $('#group-product-name');
    var $productName = ($('#product-name'));
    $groupProductName.focusout(function () {
        if ($productName.val() === '') {
            $groupProductName.addClass('has-danger');
            $productName.addClass('form-control-danger').attr("placeholder", "Musisz podać opis!");
        } else {
            $groupProductName.removeClass('has-danger').addClass('has-success');
            $productName.removeClass('form-control-danger').addClass('form-control-success').attr("placeholder", "np. Obuwie sportowe");
        }
        ;
    });

    var $groupDateOfPurchase = $('#group-date-of-purchase');
    var $dateOfPurchase = $('#date-of-purchase');
    $groupDateOfPurchase.focusout(function () {
        if ($dateOfPurchase.val() === '') {
            $groupDateOfPurchase.addClass('has-danger');
            $dateOfPurchase.addClass('form-control-danger').attr("placeholder", "Musisz podać opis!");
        } else {
            $groupDateOfPurchase.removeClass('has-danger').addClass('has-success');
            $dateOfPurchase.removeClass('form-control-danger').addClass('form-control-success');
        }
    })
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date-of-purchase").setAttribute("max", today);

var fromTodayToComplaints = new Date();
var daysForComplaints = 365;
var dayTheyearBeforeFromNow = new Date(fromTodayToComplaints.setDate(fromTodayToComplaints.getDate() - daysForComplaints));

var ddYearBefore = dayTheyearBeforeFromNow.getDate();
var mmYearBefore = dayTheyearBeforeFromNow.getMonth() + 1;
var yyyyYearBefore = dayTheyearBeforeFromNow.getFullYear();
if (ddYearBefore < 10) {
    ddYearBefore = '0' + ddYearBefore
}
if (mmYearBefore < 10) {
    mmYearBefore = '0' + mmYearBefore
}
dayTheyearBeforeFromNow = yyyyYearBefore + '-' + mmYearBefore + '-' + ddYearBefore;
document.getElementById("date-of-purchase").setAttribute("min", dayTheyearBeforeFromNow);

