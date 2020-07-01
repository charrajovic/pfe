window.onload= function () {
	   var lmnt = document.getElementsByClassName("inbox-small-cells");  //,.affich,.
     for(i=0;i<lmnt.length;i++){
         lmnt[i].addEventListener("click",ajax)

        
}
propo();
getallnoti();
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
                  // '<span class="time">'+min+'min'+'</span>'+
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



function ajax()
{
 
   
     var id= this.children[1].textContent;
    
     $.post("pages/msg_evo_ajax.php",
        {
          "idr":id
         },
    function(data){

    
     var obj = JSON.parse(data);
  
     document.getElementById("hide").innerHTML ='<header class="panel-heading wht-bg">'+
                '<h4 class="gen-case">'+
                   'Voir les propositions'+
                    '<form action="#" class="pull-right mail-src-position">'+
                      '<div class="input-append">'+
                        '<input type="text" class="form-control " placeholder="Search Mail">'+
                      '</div>'+
                   '</form>'+
                  '</h4>'+
              '</header>'+
              '<div class="panel-body ">'+
                '<div class="mail-header row">'+
                  '<div class="col-md-8">'+
                    '<h4 class="pull-left">salut monsieur </h4>'+
                  '</div>'+
                  '<div class="col-md-4">'+
                    '<div class="compose-btn pull-right">'+
                      '<input type="button" value = "retour" onclick="history.go(0)" />'+
                      '<button class="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title="">'+'<i class="fa fa-print">'+'</i> '+'</button>'+
                      '<button class="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title="">'+'<i class="fa fa-trash-o">'+'</i>'+'</button>'+
                   ' </div>'+
                  '</div>'+
                '</div>'+
                '<div class="mail-sender">'+
                  '<div class="row">'+
                    '<div class="col-md-8">'+
                      '<img src="" alt="" height="30" width="30" id="profil">'+
                      '<strong id="nom_destinataire"></strong>'+
                      '<span id="email"></span>'+
                      
                    '</div>'+
                   '<div class="col-md-4">'+
                      '<p class="date" id="date"> '+'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="view-mail" id="message">'+
                  
                '</div>'+
                '<div class="attachment-mail">'+
                  
                  '<ul>'+
                    '<li>'+
                      '<a class="atch-thumb" href="#">'+
                       ' <img src="cssfile/img/logo_txt.jpg">'+
                        '</a>'+
                     '<a class="name" href="#" id="file">'+
                       
                        '<span>20KB</span>'+
                       '</a>'+
                      '<div class="links">'+
                        '<button type="button" class="btn btn-outline-primary">'+'voir'+'</button>'+
                         '<a class="name" id="myAnchor" href="" download>'+
                        '<button class="btn btn-outline-secondary" name="down">'+'telecharger'+'</button>'+
                      '</a>'+
                      '</div>'+
                    '</li>'+
                  '</ul>'+
                '</div>'+

                '<div class="compose-btn pull-left">'+
                  '<a href="mail_compose.html" class="btn btn-sm btn-theme">'+'<i class="fa fa-reply">'+'</i>'+' Reply'+'</a>'+
                  '<button class="btn btn-sm ">'+'<i class="fa fa-arrow-right">'+'</i>'+' Forward'+'</button>'+
                  '<button class="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title="">'+'<i class="fa fa-print">'+'</i>'+' </button>'+
                  '<button class="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title="">'+'<i class="fa fa-trash-o"></i></button>'+
                '</div>'+
              '</div>'

               
             
                


       document.getElementById("nom_destinataire").innerHTML = obj.nom_destinataire;
       document.getElementById("email").innerHTML='['+obj.email_dest+']';
      document.getElementById("message").innerHTML = obj.message;
      document.getElementById("profil").src=obj.profil;
       document.getElementById("file").innerHTML = obj.file;
       document.getElementById("myAnchor").href = "upload/"+obj.file+"";
       console.log("obj.nom_expediteur");
      
       
       

           });

	
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
