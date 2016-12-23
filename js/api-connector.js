apiConnector = {

    url: 'http://apilayer.net/api/detect?access_key=7c3437f730efbe751109a02752758214',


 //updated
    getLanguage: function(query, successCallback, errorCallback){
        $.ajax({
            url: this.url + '&query=' + encodeURIComponent(query),
            dataType: 'jsonp',
            type: 'GET',
            success: successCallback,
            error: errorCallback
        });
    }
};
