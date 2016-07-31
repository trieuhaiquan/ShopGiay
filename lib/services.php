<?php
    $connection = new PDO('mysql:host=localhost;
    dbname=shop_quan_ao_db','root','');
    $connection->query('set names utf8');
    $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    $lenh_sql = "select * from sqa_san_pham sp, sqa_chi_tiet_san_pham ctsp WHERE
    sp.sku = ctsp.sku AND ctsp.trang_thai = 1 GROUP BY sp.sku";

    $st_data = $connection->prepare($lenh_sql);
    $st_data->execute($option);
    $data = $st_data->fetchAll(PDO::FETCH_OBJ);

    //print_r($data);

    //chuyen du lieu thanh json

    $chuoi = json_encode($data);

    //xuất chuỗi ra màn hình
    //echo $chuoi;
?>