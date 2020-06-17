window.onload = function(){
var lm = document.getElementsByClassName("ajax");
     for(i=0;i<lm.length;i++){
        lm[i].addEventListener("focus",valider)
    }
    document.getElementById('dos').addEventListener("click",file)
  setTimeout(function(){ document.getElementById("anuler").style.display='none'}, 3000) 
  propo();
}


function valider() {
        var lobjet=document.getElementById('subject').value;
        var  email=document.getElementById('to').value;
       
        if (lobjet!=null ) {

        document.getElementById("top").style.display='none'


        }

         if (email!=null) {
        	 document.getElementById("sujetp").style.display='none'
        }
   
    }

function file()
{


   
        	 document.getElementById("file").style.display='none'
        
   
}
function propo()
{
    
     var email= document.getElementById('emaile').textContent;
   
    $.post("pages/rec_mail_ajax.php",
        {
          "email":email
         },
    function(data){
     
     var obj = JSON.parse(data);
     document.getElementById('nbre').innerHTML=obj;
      document.getElementById('msg_nbr').innerHTML="vous avez "+obj+" message(s)";
     


           });
    

     setTimeout(propo,500)
}