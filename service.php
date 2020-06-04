<?php

include("connect.php");
$str="";
$t=explode("\n",$_REQUEST["indice"]);
$json="[";
if(strtoupper($t[0])=="ZONE D")
{
    $str="D";
}
else
$str=$t[0];
$str = str_replace(' ', '', $str);

if(strlen($str)!=1 AND $str!="IN")
{
$sql = "SELECT * FROM `réglementation` WHERE `Affecter à` like '%".$str."%'";

$res=mysqli_query($con,$sql);

while($kar = mysqli_fetch_array($res))
{
    $kar[2]=str_replace("\r\n","",$kar[2]);
    $json.="{\"article\":\"".$kar[0]."\",\"titre\":\"".$kar[1]."\",\"description\":\"".$kar[2]."\",\"id\":\"".$kar[4]."\"},";
}
}
else
{
    $sql = "SELECT * FROM `réglementation`";

    $res=mysqli_query($con,$sql);  
    while($kar = mysqli_fetch_array($res))
{
    $p=explode(" & ",$kar[3]);
    for ($i=0; $i < sizeof($p); $i++) { 
        if($p[$i]==$str)
        {
        $kar[2]=str_replace("\r\n","",$kar[2]);
        $json.="{\"article\":\"".$kar[0]."\",\"titre\":\"".$kar[1]."\",\"description\":\"".$kar[2]."\",\"id\":\"".$kar[4]."\"},";
        }
    }
    
    
}


}
$json = rtrim($json, ",");
$json.="]";

echo $json;

mysqli_close($con);

?>