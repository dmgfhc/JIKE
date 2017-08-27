<?php
header("Content-type:application/json;charset=utf-8");
require_once ('db.php');
if ($link) {
    if (isset($_GET['newstype'])) {
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM news WHERE newstype = '{$newstype}' AND status = '1' ORDER BY id DESC";
        mysqli_query($link, "SET NAMES utf8");
        $result = mysqli_query($link, $sql);
        $senddata = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($senddata, array('id' => $row['id'], 'newstype' => $row['newstype'], 'newstitle' => $row['newstitle'], 'newsimg' => $row['newsimg'], 'newstime' => $row['newstime'], 'newssrc' => $row['newssrc'], 'status' => $row['status']));
        }
        echo json_encode($senddata);
    } else {
        $sql = "SELECT * FROM news WHERE status = '1' ORDER BY id DESC";
        mysqli_query($link, "SET NAMES utf8");
        $result = mysqli_query($link, $sql);
        $senddata = array();
        while ($row = mysqli_fetch_assoc($result)) {
            array_push($senddata, array('id' => $row['id'], 'newstype' => $row['newstype'], 'newstitle' => $row['newstitle'], 'newsimg' => $row['newsimg'], 'newstime' => $row['newstime'], 'newssrc' => $row['newssrc'], 'status' => $row['status']));
        }
        echo json_encode($senddata);
        //echo json_encode(array("success"=>"none11"));
        
    }
} else {
    echo json_encode(array("success" => "none"));
}
mysqli_close($link);
?>