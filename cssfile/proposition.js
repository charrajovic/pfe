function poop(){
  var current = new Date()+'';
  $.post('/pfe/active.php', {"service":"ms"}, function(response) {
});
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

window.onload = function(){
var lm = document.getElementsByClassName("ajax");
     for(i=0;i<lm.length;i++){
        lm[i].addEventListener("focus",valider)
    }
    document.getElementById('dos').addEventListener("click",file)
  // setTimeout(function(){ document.getElementById("anuler").style.display='none'}, 3000) 
  propo();
  getallnoti();
  setInterval(poop,10000);
    setInterval(propo,1000);
    this.setTimeout(propo_not,100);
this.setTimeout(notification,100);
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
    

     setTimeout(propo,3000)
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
                  '<span class="time">'+min+'min'+'</span>'+
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

