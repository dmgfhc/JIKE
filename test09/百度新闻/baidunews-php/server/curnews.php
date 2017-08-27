<?php
header("Content-type:application/json;charset=utf-8");
require_once ('db.php');
if ($link) {
    //查询新闻
    $newsid = $_GET['newsid'];
    $sql = "SELECT * FROM news WHERE news.id = {$newsid} and news.status = '1'";
    mysqli_query($link, "SET NAMES utf8");
    $result = mysqli_query($link, $sql);
    $senddata = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($senddata, array('id' => $row['id'], 'newstype' => $row['newstype'], 'newstitle' => $row['newstitle'], 'newsimg' => $row['newsimg'], 'newstime' => $row['newstime'], 'newssrc' => $row['newssrc'], 'status' => $row['status']));
    }
    echo json_encode($senddata);
} else {
    echo json_encode(array("success" => "none"));
}
mysqli_close($link);
?>