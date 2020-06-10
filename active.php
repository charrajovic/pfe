<?php
    include("connect.php");
    session_start();
    if($_REQUEST["service"]=="amis")
    {
        $session=$_SESSION["id"];
        $id=$_REQUEST["id"];
        $sql = "SELECT * FROM `user` WHERE id = $id";
        $res=mysqli_query($con,$sql);  
    if($kar = mysqli_fetch_array($res))
    {
        $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session) or (idm = $id and idp=$session)";
        $res=mysqli_query($con,$sql); 
        if($kar = mysqli_fetch_array($res))
        {
            if($kar[2]==$session)
            {
                $sql="UPDATE `invitations` SET `etat`=1 WHERE (idp = $id and idm=$session)";
                $pp=mysqli_query($con,$sql);  
                echo $pp+1;
            }
        }
        else
        {
                $sql="INSERT INTO `invitations`(`idp`, `idm`) VALUES ($session,$id)";
                $op=mysqli_query($con,$sql); 
                echo $op+2;
        }
    }
    }  
    else if($_REQUEST["service"]=="recherche")
    {
        $js="[";
        $y=0;
        $name=$_REQUEST["name"];
        $session=$_SESSION["id"];
        $sql = "SELECT * FROM `user` WHERE id!=$session and (nom like '%$name%' or prenom like '%$name%')";
        $res=mysqli_query($con,$sql);
        while($kar = mysqli_fetch_array($res))
        {
            $y=1;
            $js .= "{\"id\":\"".$kar[0]."\",\"nom\":\"".$kar[1]."\",\"prenom\":\"".$kar[2]."\",\"mail\":\"".$kar[3]."\",\"password\":\"".$kar[4]."\",\"date\":\"".$kar[5]."\",\"photo\":\"".$kar[8]."\"},";
        }
        $js = rtrim($js, ",");
        $js .= "]";
        if($y==1)
        echo $js;
        else
        echo "walo";
        } 
        else if($_REQUEST["service"]=="checking")
    {
        $y=0;
        $id=$_REQUEST["id"];
        $session=$_SESSION["id"];
        $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session) or (idm = $id and idp=$session)";
        $res=mysqli_query($con,$sql); 
        if($kar = mysqli_fetch_array($res))
        {
            if($kar[1]==$id && $kar[3]==0)
            {
                echo 2;
            }
            else if($kar[2]==$id && $kar[3]==0)
            {
                echo 1;
            }
            else if($kar[1]==$id && $kar[3]==1)
            {
                echo 3;
            }
            else if($kar[2]==$id && $kar[3]==1)
            {
                echo 4;
            }
            else
            {
                echo 5;
            }
        }
        else 
        echo 0;
        } 
    else
    {
        $js="{";
    $t=1;
        $session=$_SESSION["id"];
        $p=time();
        $curent=date("Y-m-d H:i:s", $p);
        $spl="UPDATE `user` SET `datetat`='$curent' WHERE id=$session";
        $ech1=mysqli_query($con,$spl);
        echo $ech1;
    }
    mysqli_close($con);
?>