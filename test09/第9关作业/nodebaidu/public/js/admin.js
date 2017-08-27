$(document).ready(function() {

    var $newsTable = $("#newstable tbody");

    refreshNews();

    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();

        //输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    refreshNews();
                    $('#newstitle').val('');
                    $('#newstype').val('');
                    $('#newsimg').val('');
                    $('#newstime').val('');
                    $('#newssrc').val('');
                }

            });
        }
    });

    //删除新闻
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
    });

    $('#deleteModal #confirmDelete').click(function() {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });

        }

    });

    //修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).text().trim();
        //console.log(updateId);
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        });
    });

    $('#confirmUpdate').on('click', function() {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            datatype: 'json',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newssrc: $('#unewssrc').val(),
                newstime: $('#unewstime').val(),
                id: updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                //console.log(data);
                //console.log(updateId);
                refreshNews();
            }
        });
    });

    function refreshNews() {
        //empty table
        $newsTable.empty();

        $.ajax({
            type: 'get',
            url: '/admin/getnews',
            datatype: 'json',
            success: function(info) {
                //模板引擎
                //console.log(info);
                var data = { dat: info };
                var html = template('tp1', data);
                $newsTable.html(html);

                //拼接字符串
                // data.forEach(function (item,index,array) {
                //    var $tdid = $('<td>').html(item.id);
                //     var $tdtype = $('<td>').html(item.newstype);
                //     var $tdtitle = $('<td>').html(item.newstitle);
                //     // var $tdimg = $('<td>').html(item.newsimg);
                //     // var $tdsrc = $('<td>').html(item.newssrc);
                //     var $tdtime = $('<td>').html(item.newstime);
                //     var $tdctrl = $('<td>');
                //     var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                //     var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                //     $tdctrl.append($btnupdate,$btndelete);
                //     var $tRow = $('<tr>');
                //     $tRow.append($tdid,$tdtype,$tdtitle,$tdtime,$tdctrl);
                //      $newsTable.append($tRow);
                //
                // });
            }
        });
    }
});
