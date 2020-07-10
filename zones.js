function notf()
{
    var nome=this.children[0].children[2].textContent;
    var sp=nome.split(":")
    var res=sp[0].split(" ");
    z=this.children[0].children[1].textContent
    nom=res[0]
    prenom=res[1]
    console.log(this.children[0].children[1].textContent+"/"+res[0]+"/"+res[1]);
    $.post('/pfe/chatid.php', {"id":this.children[0].children[1].textContent}, function(response) {
        if(response==1)
        window.location="message"
	});
    // $.post('/pfe/msg.php', {"service":"chat","idm":this.children[0].children[1].textContent}, function(response) {
       
    //     if(response=="nope")
    //     {
    //         document.getElementById("cont").innerHTML="<div class='row'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
    //      document.getElementById("ide").style.display="none";
    //      document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-1 col-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
    //      document.getElementById("cont").innerHTML+="<div class='row'><div class='col-5 offset-3'><input type='text' class='form-control' id='messag' /></div><div class='col-2'><input type='submit' value='envoyer' id='mssg'/></div></div>";
    //      document.getElementById("mssg").addEventListener("click",envoyer);
    //     }
    //     else
    //     {
            
    //      var obj = JSON.parse(response);
        
    //      document.getElementById("cont").innerHTML="<div class='row'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
    //      document.getElementById("ide").style.display="none";
    //      for (var i = 0; i < obj.length; i++) {
    //         var date=obj[i].date;
    //         var res = date.split(" ");
    //         var res1=res[1].split(".");
    //          if(obj[i].id==z)
    //          document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-3' style='font-weight:bold;font-size:25px;color:blue'>"+obj[i].nom+" "+obj[i].prenom+":</div><div class='col-7' style='font-weight:bold;font-size:25px;'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:yellow;padding:0 20px;border-radius:20px;cursor:pointer;text-align:justifie'>"+obj[i].contenu+"</span></div></div>"
    //          else
    //          document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-8' style='font-weight:bold;font-size:25px;text-align:right'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:orange;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div><div class='col-3' style='font-weight:bold;font-size:25px;;color:red'>:"+obj[i].nom+" "+obj[i].prenom+"</div></div>"
    //      }
    //      document.getElementById("cont").innerHTML+="<div class='row'><div class='col-5 offset-3'><input type='text' class='form-control' id='messag' /></div><div class='col-2'><input type='submit' value='envoyer' id='mssg' class='btn btn-success'/></div></div>";
    //      document.getElementById("mssg").addEventListener("click",envoyer);
    //      var t=document.getElementsByClassName("dismsg");
    //      for (let i = 0; i < t.length; i++) {
    //         t[i].addEventListener("click",dispsg);
             
    //      }
    //     }
    //     var element = document.getElementById("chatbox");
    //     element.scrollTop = element.scrollHeight;
    //     setTimeout(online,300);
    //     setTimeout(chatboxe,5000);
    // });
}

function notification()
{
  $.post('/pfe/msgnnlu.php', {"service":"ms"}, function(response) {
    console.log(response)
    if(response!="nope")
    {
        var obj = JSON.parse(response);
        console.log(obj.length)
        document.getElementById("not").innerHTML=obj.length;
        document.getElementById("notification").innerHTML="<div class='notify-arrow notify-arrow-yellow'></div><li><p class='yellow' id='note'>You have "+obj.length+" new notifications</p></li><li>"
        for (let i = 0; i < obj.length; i++) {
            document.getElementById("notification").innerHTML+="<li class='notif'><p style='width:100%;word-break:break-word'><span class='label label-danger'><i class='fa fa-bolt'></i></span><span style='display:none'>"+obj[i].id+"</span><span style='color:blue;font-weight:bold;'>"+obj[i].nom+" "+obj[i].prenom+": "+"</span><span class='italic'>"+obj[i].contenu+"</span></p></li>"
        }
        var t=document.getElementsByClassName("notif")
        for (let j = 0; j < t.length; j++) {
            t[j].style.cursor="pointer"
            t[j].addEventListener("click",notf)
        }
    }
    else
    {
        if(document.getElementById("not").textContent!="0")
        {
            document.getElementById("not").innerHTML="0";
            document.getElementById("note").innerHTML="You have 0 new notifications";
        }
    }
});
setTimeout(notification,5000)
}

function shrttat()
{
    if(document.getElementById("sidebar").style.display=="none")
    document.getElementById("sidebar").style.display="block"
    else
    document.getElementById("sidebar").style.display="none"
}

function poop(){
    var current = new Date()+'';
    $.post('/pfe/active.php', {"service":"ms"}, function(response) {
	});
}

function profiles()
{
    window.location="profile?id="+this.children[0].textContent;
}

function logout()
{
    $.post('/pfe/logout.php', {"service":"ms"}, function(response) {
        window.location="index.php?page=login"
	});
}

function recherche()
{
    var zonne=document.getElementsByClassName("zoness");
    for (let i = 0; i < zonne.length; i++) {
        var str=zonne[i].textContent.toUpperCase();
        var n = str.includes(this.value.toUpperCase());
        if(n==true)
        {
            zonne[i].parentElement.style.display="table-row"
        }
        else
        {
            zonne[i].parentElement.style.display="none"
        }
    }
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
      document.getElementById("profil").src=""+obj.profil+"";
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
function propo_not()
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

window.onload=function()
{
    var zonne=this.document.getElementsByClassName("sear");
    for (let i = 0; i < zonne.length; i++) {
        zonne[i].addEventListener("keyup",recherche);
    }
    document.getElementById("logout").addEventListener("click",logout);
    document.getElementById("logout").style.cursor="pointer";
    setInterval(poop,10000);
    // setInterval(propo,1000);
    // this.setTimeout(propo_not,100);
    this.setTimeout(notification,100);
    document.getElementById("shrttat").addEventListener("click",shrttat);
}