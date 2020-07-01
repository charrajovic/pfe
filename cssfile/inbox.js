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


window.onload= function () {
  
propo();
message();
getallnoti();

}
function message()
{
    
     var email= document.getElementById('emaile').textContent;
   
    $.post("pages/rec_mess_ajax.php",
        {
          "email":email
         },
    function(data){
     
     var obj = JSON.parse(data);

   document.getElementById("add").innerHTML='';
     for (var i = 0; i < obj.length; i++) {
      var y;
      if(obj[i].etat==1)
      {
        y="fa-envelope-open-o";
      }
      else
      {
        y="fa-envelope"
      }
     var daten = new Date(obj[i].datep);
 var year=daten.getFullYear();
  var     mont=daten.getMonth();
     var  day=daten.getDate();

     if (obj[i].travail=='expert') {
       document.getElementById("add").innerHTML+='<tr class="unread">'+
                        '<td class="inbox-small-cells" id="nom_k">'+
                          '<input type="checkbox" class="mail-checkbox">'+
                        '</td>'+
                        '<td class="inbox-small-cells">'+
                        '<i class="fa '+y+'"></i>'+
                        '<em style="visibility: hidden;">'+obj[i].id+'</em></td>'+
                        '<td class="view-message " id="nom_expediteure">'+obj[i].nom_expediteur+'</td>'+
                        '<td class="view-message  dont-show" id="travaile">'+'<span class="label label-success ">'+obj[i].travail+'</span>'+'</td>'+
                        '<td class="view-message" id="sujete">'+obj[i].sujet+'</td>'+
                        '<td class="view-message  text-right" id="datee">'+day+'/'+mont+'/'+year+'</td>'+
                      '</tr>'
     } else {
       document.getElementById("add").innerHTML+='<tr class="unread">'+
                        '<td class="inbox-small-cells" id="nom_k">'+
                          '<input type="checkbox" class="mail-checkbox">'+
                        '</td>'+
                        '<td class="inbox-small-cells">'+
                        '<i class="fa '+y+'"></i>'+
                        '<em style="visibility: hidden;">'+obj[i].id+'</em></td>'+
                        '<td class="view-message " id="nom_expediteure">'+obj[i].nom_expediteur+'</td>'+
                        '<td class="view-message  dont-show" id="travaile">'+'<span class="label label-info ">'+obj[i].travail+'</span>'+'</td>'+
                        '<td class="view-message" id="sujete">'+obj[i].sujet+'</td>'+
                        '<td class="view-message  text-right" id="datee">'+day+'/'+mont+'/'+year+'</td>'+
                      '</tr>'
     }

     
         
}
var tt=document.getElementsByClassName("inbox-small-cells");
for (let k = 0; k < tt.length; k++) {
 
  tt[k].addEventListener("click",ajax)
}

     


           });
      setTimeout(message,3000)

}
function ajax()
{
     var a = this.children[1].textContent;
   var nbre= document.getElementById('nbre').textContent;
   
  
       console.log(a);
  
	 $.post("pages/rec_mail_ajax.php",
        {
          "idr":a
         },
    function(data){
     
     var obj = JSON.parse(data);
     
     document.getElementById("hid").innerHTML ='';
     document.getElementById("hid").innerHTML ='<header class="panel-heading wht-bg">'+
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
                      '<strong id="nom_expediteur"></strong>'+
                      '<span id="email"></span>'+' à'+
                      '<strong>'+'moi'+'</strong>'+
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

               
             
                


       document.getElementById("nom_expediteur").innerHTML = obj.nom_expediteur;
      
       document.getElementById("email").innerHTML='['+obj.email+']';
      document.getElementById("message").innerHTML = obj.message;
      document.getElementById("profil").src=""+obj.profil+"";
       document.getElementById("file").innerHTML = obj.file;
       document.getElementById("myAnchor").href = "upload/"+obj.file+"";
      
      
      
     
       

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
      document.getElementById('inbo').innerHTML="INBOX("+obj+")";
     
     
       

           });
    
   
	 setTimeout(propo,1000)
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
