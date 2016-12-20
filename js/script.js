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

    var $rulesCheckbox = $('#rules-checkbox');
    var $submitForm = $('#submit-form');
    $rulesCheckbox.on('click', function () {
        if (this.checked === true) {
            $submitForm.attr('disabled', false);
            $('#submit-form-div').removeClass('lets-animate');
            $().removeClass('lets-animate');
        }
        else {
            $submitForm.attr('disabled', true);
            $('#submit-form-div').addClass('lets-animate');

        }
    });

    $('#submit-form-div').mouseenter(function () {
        if ($(this).hasClass('lets-animate')) {
            $('#rules-checkbox-div')
                .animate({
                    opacity: '0.2'

                }, 400)
                .animate({
                    opacity: '1'
                }, 400);
        }
    });
});


//setting dates in calendar - START
var setDate = function (date, minMaxValue) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    date = year + '-' + month + '-' + day;
    document.getElementById("date-of-purchase").setAttribute(minMaxValue, date);
};

var today = new Date();

//need to get date the year before from now
var dateToCompare = new Date();
var daysForComplaints = 365;
var theYearBefore = new Date(dateToCompare.setDate(dateToCompare.getDate() - daysForComplaints));

setDate(today, 'max');
setDate(theYearBefore, 'min');

//setting dates in calendar - END