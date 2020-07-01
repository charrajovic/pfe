window.onload = function(){
var lm = document.getElementsByClassName("ajax");
     for(i=0;i<lm.length;i++){
        lm[i].addEventListener("focus",valider)
    }
    document.getElementById('dos').addEventListener("click",file)
  setTimeout(function(){ document.getElementById("anuler").style.display='none'}, 3000) 
  propo();
  getallnoti();
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
function tifo()
{
  console.log(this.children[0].textContent)
  $.post("pages/noti.php",
        {
          "notification":this.children[0].textContent

         },
    function(data){
              window.location="/pfe/index.php?page=inbox"
           });
}
function getallnoti()
{

 var email= document.getElementById('emaile').textContent;
   
    $.post("pages/noti.php",
        {
          "email":email
         },
    function(data){
     
     var obj1 = JSON.parse(data);
     document.getElementById("addnotifi").innerHTML='';
    for (var i = 0; i < obj1.length; i++) {
      var daten = new Date(obj1[i].datep);
      var min=daten.getMinutes();
      

      

      document.getElementById("addnotifi").innerHTML+= '<li>'+
                '<a class="notif" style="cursor: pointer;">'+
                  '<span style="display:none">'+obj1[i].id+'</span>'+
                  '<span class="photo"><img src="'+obj1[i].profil+'">'+'</span>'+
                  '<span class="subject">'+
                  '<span class="from">'+obj1[i].nom_expediteur+'</span>'+
                  '<span class="time">'+min+'min'+'</span>'+
                  '</span>'+
                  '<span class="subject">'+obj1[i].sujet+'</span>'+
                  '</a>'+
              '</li>'
    }
    var yy=document.getElementsByClassName("notif")
  for (let i = 0; i < yy.length; i++) {
    yy[i].addEventListener("click",tifo)
  }


           });
    

setTimeout(getallnoti,1000);

}

