$(document).ready(function () {

    //green-red validation
    $('.form-control').focusout(function () {
        if ($(this).val().length < 2) {
            $(this).addClass('form-control-danger').attr("placeholder", "Musisz uzupełnić to pole!");
            $(this).parent().addClass('has-danger');
        } else {
            $(this).parent().removeClass('has-danger').addClass('has-success');
            $(this).removeClass('form-control-danger').addClass('form-control-success');
        }
    });

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

//map - START

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.919438, lng: 19.14513599999998},
        zoom: 7
    });
    var input = /** @type {!HTMLInputElement} */(
        document.getElementById('autocomplete'));

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            $('#map-alerts').fadeIn(500);
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        $('#map-alerts').fadeOut(500);
        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));

        var automateFillInputFields = function (idSelector, data) {
            var SidSelector = $('#' + idSelector);
            if (data !== undefined) {
                document.getElementById(idSelector).value = data;
                SidSelector.addClass('form-control-success');
                SidSelector.parent().addClass('has-success');
            }
            else document.getElementById(idSelector).value = 'brak';

        }

        automateFillInputFields('companyName', place.name);
        automateFillInputFields('companyPhoneNumber', place.international_phone_number);
        automateFillInputFields('companyAddress', place.formatted_address);
        automateFillInputFields('companyWebsite', place.website);


        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        console.log('miejsce na mapie', place);
        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
        var radioButton = document.getElementById(id);
        radioButton.addEventListener('click', function () {
            autocomplete.setTypes(types);
        });
    }

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);
}

//map - END