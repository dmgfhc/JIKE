<?php
header("Content-type:application/json;charset=utf-8");
require_once ('db.php');
if ($link) {
    //修改新闻状态
    $newsid = $_POST['newsid'];
    $sql = "UPDATE news SET status = '0' WHERE news.id = {$newsid}";
    mysqli_query($link, "SET NAMES utf8");
    $result = mysqli_query($link, $sql);
    echo json_encode(array("success" => "删除成功"));
}
mysqli_close($link);
?>