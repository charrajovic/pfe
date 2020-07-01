function auth()
{
    $.post('/pfe/serv.php', {"service":"auth","mail":document.getElementById("mail").value,"pass":document.getElementById("pass").value}, function(response) {
        if(response=="1")
        {
            window.location="/pfe/index?page=compte"
        }
         
    
	});
}

window.onload=function()
{
    document.getElementById("auth").addEventListener("click",auth);
}