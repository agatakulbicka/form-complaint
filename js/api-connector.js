apiConnector = {

    url: 'http://apilayer.net/api/detect?access_key=7c3437f730efbe751109a02752758214',

    getLanguage: function(successCallback, errorCallback, query){
        $.ajax({
            url: this.url + '&query=' + encodeURIComponent(query),
            dataType: 'jsonp',
            type: 'GET',
            success: successCallback,
            error: errorCallback

            // success: function(json) {
            //
            //     // Access and use your preferred validation result objects
            //     console.log(json.success);

            //}
        });
    }

}
