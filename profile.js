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

function tof()
{
    document.getElementById("file").click();
}

function tofchoose()
{
    var A=document.getElementById("file").value
    var sp=A.split("\\");
    var sp1=sp[sp.length-1].split(".")
    console.log(sp1[0])
  var name = document.getElementById("file").files[0].name;
  console.log(name)
  var form_data = new FormData();
  var ext = name.split('.').pop().toLowerCase();
  if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
  {
   alert("Invalid Image File");
  }
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("file").files[0]);
  var f = document.getElementById("file").files[0];
  var fsize = f.size||f.fileSize;
  if(fsize > 2000000)
  {
   alert("Image File Size is very big");
  }
  else
  {
   form_data.append("file", document.getElementById('file').files[0]);
   $.ajax({
    url:"upload.php",
    method:"POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    beforeSend:function(){
     $('#uploaded_image').html("<label class='text-success'>Image Uploading...</label>");
    },   
    success:function(response)
    {
     console.log(response);
     if(response!=0)
     {
        document.getElementById("tof").src=response
        document.getElementById("modi").src=response
     }
    }
   });
}
}

function logout()
{
    $.post('/pfe/logout.php', {"service":"ms"}, function(response) {
        window.location="index.php?page=login"
	});
}


function messages(){
    
    etat=1;
    $.post('/pfe/serv.php', {"service":"ms"}, function(response) {
         var obj = JSON.parse(response);
        document.getElementById("cont").innerHTML="<table id='example' class='table table-striped table-bordered' style='width:100%''><tr><td>id</td><td>nom</td><td>prenom</td><td>email</td><td>date</td></tr><table>";
        for (var i = 0; i < obj.length; i++) {
            document.getElementById("example").innerHTML+="<tr><td class='idtable'><div class='row'><div class='col-md-8'>"+obj[i].id+"</div><div class='offset-md-1' style='background:red;border-radius:50%;padding:0 2px;color:white'></div></div></td><td class='noms' id='noms'><div class='row'><div class='col-md-8 nomse' style='display:inherit'>"+obj[i].nom+"</div><div class='online' id='online' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit'></div></div></td><td class='prenoms'>"+obj[i].prenom+"</td><td>"+obj[i].mail+"</td><td>"+obj[i].date+"</td></tr>"
        }
        var t=document.getElementsByClassName("noms");
        for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",msgs);
            t[i].style.cursor="pointer"
            
        }
        var t=document.getElementsByClassName("prenoms");
        for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",msgs);
            t[i].style.cursor="pointer"
        }
        setTimeout(online,300);
        setTimeout(msgnnlu,300);
	});
}

function addamis()
{
    $.post('/pfe/active.php', {"service":"amis","id":document.getElementById("idp").textContent}, function(response) {
        console.log(response)
        if(response==2)
        {
            var t=document.getElementsByClassName("addamis");
            for (let i = 0; i < t.length; i++) {
                t[i].innerHTML="amis"
                t[i].style.background="green"
            }
        }
        if(response==3)
        {
            var t=document.getElementsByClassName("addamis")
            for (let i = 0; i < t.length; i++) {
                t[i].innerHTML="invitation envoye"
                t[i].style.background="#17a2b8"
            }
        }
   });
}

function block()
{
    console.log(5)
}

function check()
{
    var tt=document.getElementsByClassName("addamis")
    if(tt.length!=0)
    {
        $.post('/pfe/active.php', {"service":"checking","id":document.getElementById("idp").textContent}, function(response) {
            console.log(response)
            if(response==1)
            {
                var t=document.getElementsByClassName("addamis");
                for (let i = 0; i < t.length; i++) {
                    if(t[i].innerHTML!="invitation envoyé")
                    {
                        t[i].innerHTML="invitation envoyé"
                        t[i].style.background="#17a2b8"
                    }
                
            }
            }
            else if(response==2)
            {
                var t=document.getElementsByClassName("addamis");
                for (let i = 0; i < t.length; i++) {
                    if(t[i].innerHTML!="accepter invitation")
                    {
                        t[i].innerHTML="accepter invitation"
                        t[i].style.background="#17a2b8"
                    }
            }
        }
        else if(response==3)
            {
                var t=document.getElementsByClassName("addamis");
                for (let i = 0; i < t.length; i++) {
                    if(t[i].innerHTML!="amis")
                    {
                        t[i].innerHTML="amis"
                        t[i].style.background="green"
                    }
                
            }
        }
        else if(response==4)
            {
                var t=document.getElementsByClassName("addamis");
                for (let i = 0; i < t.length; i++) {
                    if(t[i].innerHTML!="amis")
                    {
                        t[i].innerHTML="amis"
                        t[i].style.background="green"
                    }
            }
        }
        else if(response==0)
            {
                var t=document.getElementsByClassName("addamis");
                for (let i = 0; i < t.length; i++) {
                    if(t[i].innerHTML!="envoyé invitation")
                    {
                        t[i].innerHTML="envoyé invitation"
                        t[i].style.background="rgb(0, 123, 255)"
                    }
            }
        }
       });
    }
}

function prof()
{
    var id=this.parentElement.children[0].textContent;
    window.location="profile?id="+id;
}

function coco()
{
    $.post('/pfe/chatid.php', {"id":this.parentElement.nextElementSibling.textContent}, function(response) {
        console.log(response)
        if(response==1)
        window.location="message"
        else
        alert("impossible!")
	});
}

function modifiersession()
{
    if(this.classList[2]=="fa-pencil"){
       
        var tr = this.parentElement.parentElement;
        
        var first = tr.children[1].textContent;
       
        tr.children[1].innerHTML = "<input style='color : black; width:40% ' type='text' value='"+first+"'/>";
      

        this.classList.remove("fa-pencil");
        this.classList.add("fa-check-circle");

    }
    else{
        var tr = this.parentElement.parentElement;
        var nom='',prenom='',email='',travail='';
        if (tr.children[0].textContent=='nom') {
          nom = tr.children[1].children[0].value;
          tr.children[1].innerHTML=nom;
          document.getElementById("non").innerHTML=nom;
          }else if (tr.children[0].textContent=='prenom') {
          prenom = tr.children[1].children[0].value;
          tr.children[1].innerHTML=prenom;
          document.getElementById("pren").innerHTML=" "+prenom;
         }else if(tr.children[0].textContent=='email'){
         email = tr.children[1].children[0].value;
         tr.children[1].innerHTML=email;
          }else{
          travail = tr.children[1].children[0].value;

        tr.children[1].innerHTML=travail;
        }
         
      
        $.post("pages/ajax.php",
        {
          first_name: nom,last_name:prenom,emaile:email,job:travail
         },
    function(data){
      console.log("Data: " + data );
    });
       
       // $.ajax({
       //  method: "POST",
       //  url: "pages/misajour.php",
       //  data: { first_name: nom,last_name:prenom,emaile:email,job:travail },
       //  success : function(data)
       //  {
       //   $('#sow').html(data);
       //  }
       //  });

     this.classList.remove("fa-check-circle");
        this.classList.add("fa-pencil");
       
    }
}

function dismod()
{
    if(this.children[0].textContent=="modifiers votre informations")
    {
        document.getElementById("dismod").style.display="block"
        this.children[0].textContent="valider les informations"
    }
    else
    {
        document.getElementById("dismod").style.display="none"
        this.children[0].textContent="modifiers votre informations"
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
                '<a class="notif_propo" style="cursor: pointer;">'+
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
    var yy=document.getElementsByClassName("notif_propo")
  for (let i = 0; i < yy.length; i++) {
    yy[i].addEventListener("click",tifo)
  }


           });
    

setTimeout(getallnoti,3000);

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
    

   setTimeout(propo,3000)
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
                '<a class="notif_propo" style="cursor: pointer;">'+
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
    var yy=document.getElementsByClassName("notif_propo")
  for (let i = 0; i < yy.length; i++) {
    yy[i].addEventListener("click",tifo)
  }


           });
    

setTimeout(getallnoti,1000);
}

function popup()
{
    var t=document.getElementsByClassName("containere")
    for (let i = 0; i < t.length; i++) {
        t[i].style.opacity=0.1
    }
    document.getElementById("popupe").style.display="block"
    document.getElementById("darag").style.display="block"
}

function closex()
{
    var t=document.getElementsByClassName("containere")
    for (let i = 0; i < t.length; i++) {
        t[i].style.opacity=1
    }
    document.getElementById("popupe").style.display="none"
    document.getElementById("darag").style.display="none"
}

function chatt()
{
    console.log(10)
    window.location="message";
}

function modifierp()
{
    if(this.classList[2]=="fa-pencil"){
       
        var tr = this.parentElement.parentElement;
        
        var first = tr.children[1].textContent;
       
        tr.children[1].innerHTML = "<input id='anc' style='color : black; width:40% ' type='text' placeholder='entre l`anciant password'/><input id='new' style='color : black; width:40% ' type='text' placeholder='entre new password'/>";
      

        this.classList.remove("fa-pencil");
        this.classList.add("fa-check-circle");

    }
    else{
        var tr = this.parentElement.parentElement;
        $.post("password.php",
        {"anc":document.getElementById("anc").value,"new":document.getElementById("new").value},
    function(data){
      if(data!="0")
      {
        console.log("bien")
      }
    });
        tr.children[1].innerHTML="xxxXxxxXxxx";
        this.classList.remove("fa-check-circle");
        this.classList.add("fa-pencil");
    }
}

window.onload=function()
{
    var tt=document.getElementsByClassName("modif");
    for (let i = 0; i < tt.length; i++) {
        tt[i].addEventListener("click",modifiersession);
    }
    var tt=document.getElementsByClassName("modifp");
    for (let i = 0; i < tt.length; i++) {
        tt[i].addEventListener("click",modifierp);
    }
    var y=document.getElementsByClassName("chat");
    for (let i = 0; i < y.length; i++) {
       y[i].addEventListener("click",chatt);
    }
    var zone=this.document.getElementsByClassName("zones");
    for (let i = 0; i < zone.length; i++) {
        zone[i].addEventListener("click",zon);
        
    }
    var zone=this.document.getElementsByClassName("msgat");
    for (let i = 0; i < zone.length; i++) {
        zone[i].addEventListener("click",prof);
        
    }
    var zone=this.document.getElementsByClassName("msge");
    for (let i = 0; i < zone.length; i++) {
        zone[i].addEventListener("click",coco);
        
    }
    var cl=document.getElementsByClassName("close")
    for (let i = 0; i < cl.length; i++) {
        cl[i].addEventListener("click",closex)
    }
    document.getElementById("logout").addEventListener("click",logout);
    document.getElementById("logout").style.cursor="pointer";
    document.getElementById("msg").addEventListener("click",messages);
    document.getElementById("msg").style.cursor="pointer";
    setInterval(poop,10000);
    setInterval(propo,1000);
    this.setTimeout(propo_not,100);
    this.setTimeout(notification,100);
    document.getElementById("shrttat").addEventListener("click",shrttat);
    var tt=document.getElementsByClassName("tof")
    for (let i = 0; i < tt.length; i++) {
        tt[i].addEventListener("click",tof);
    }
    var rr=document.getElementsByClassName("file")
    for (let i = 0; i < rr.length; i++) {
        rr[i].addEventListener("change",tofchoose);
    }
    var t=this.document.getElementsByClassName("addamis");
    var tt=document.getElementsByClassName("modifer")
    for (let i = 0; i < tt.length; i++) {
        tt[i].addEventListener("click",dismod);
    }
    var y=document.getElementsByClassName("ttof");
    for (let i = 0; i < y.length; i++) {
        y[i].addEventListener("click",popup)
    }
    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("click",addamis);
    }
    var t=this.document.getElementsByClassName("block")
    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("click",block);
    }
    this.setInterval(check,1000);
}