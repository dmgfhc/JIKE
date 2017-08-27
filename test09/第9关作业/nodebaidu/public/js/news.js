$(document).ready(function () {

    refreshNews('精选');

    $("nav a").click(function(e){

        e.preventDefault();    
        var type = $(this).text();
        //console.log(type);
        refreshNews(type);

    });

function refreshNews(type) {

    var $lists = $("article ul");

    $lists.empty();

    $.ajax({
            url: '/news'
            , type: 'get'
            , datatype: 'json'
            , data:{newstype:type}
            , success: function (info) {

            var data = {dat: info};
            var html = template('tp2', data);
            $lists.html(html);

            }
        }
    );

}
})
