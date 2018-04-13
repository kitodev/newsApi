$(document).ready(function (){

    var dataArray = new Array(0);
    var currentNews = new Array(0);
    var url = '/data/hirek.json';

    getData()
        .then(function (data) {
            dataArray = data;
        })
        .then(function () {
            listNews();
        });

    function getData() {
        var q = jQuery.Deferred();
        var urlI = url;
        $.get(urlI, function (data) {
            q.resolve(data);
        });
        return q.promise();
    }

    function listNews() {
        dataArray.forEach(function (jsonElement) {
            console.log(currentNews);
            $('#newsListContainer').append(
                '<div class="listItems d-flex align-items-center">'+
                '<div class="listItemsContent d-flex align-items-start">'+
                '<div class="squared-item">' +
                '<img src="'+jsonElement.ows_Images+'" class="img-fluid" alt="image">' +
                '</div>' +
                '<div class="listText">'+
                '<h5 class="title">' +
                jsonElement.ows_Title +
                '</h5>' +
                '<p>'+
                jsonElement.ows_HirekKezdet.slice(0, 10) +
                ' <span class="author">'+
                jsonElement.ows_Author.slice(12, 22) +
                '</span>'+
                '</p>'+
                '<span>' +
                jsonElement.ows_HirekAjanlo +
                '</span>' +
                '</div>' +
                '</div>' +
                '</div>');
        });
    }
});