function notf()
{
    var nome=this.children[0].children[2].textContent;
    var sp=nome.split(":")
    var res=sp[0].split(" ");
    z=this.children[0].children[1].textContent
    nom=res[0]
    prenom=res[1]
    console.log(this.children[0].children[1].textContent+"/"+res[0]+"/"+res[1]);
    window.location="message?id="+this.children[0].children[1].textContent
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
                document.getElementById("notification").innerHTML+="<li class='notif' style='display:inline-table'><a><span class='label label-danger'><i class='fa fa-bolt'></i></span><span style='display:none'>"+obj[i].id+"</span><span style='color:blue;font-weight:bold;'>"+obj[i].nom+" "+obj[i].prenom+": "+"</span><span class='italic'>"+obj[i].contenu+"</span></a></li>"
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
        document.getElementById("tof").style.backgroundImage="url('"+response+"')"
        document.getElementById("modi").src=response
     }
    }
   });
}
}

function logout()
{
    $.post('/pfe/logout.php', {"service":"ms"}, function(response) {
        window.location="login"
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

window.onload=function()
{
    var zone=this.document.getElementsByClassName("zones");
    for (let i = 0; i < zone.length; i++) {
        zone[i].addEventListener("click",zon);
        
    }
    document.getElementById("logout").addEventListener("click",logout);
    document.getElementById("logout").style.cursor="pointer";
    document.getElementById("msg").addEventListener("click",messages);
    document.getElementById("msg").style.cursor="pointer";
    setInterval(poop,10000);
    this.setTimeout(notification,100);
    document.getElementById("shrttat").addEventListener("click",shrttat);
    document.getElementById("tof").addEventListener("click",tof);
    document.getElementById("file").addEventListener("change",tofchoose);
    var t=this.document.getElementsByClassName("addamis");
    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("click",addamis);
    }
    var t=this.document.getElementsByClassName("block")
    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("click",block);
    }
}