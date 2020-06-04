var etat=0;
var can=0;
var t=0;
var num=0;

function zon()
{
    etat=0;
    $.post('/pfe/service.php', {"service":"consult","indice":this.textContent}, function(response) {
        
         var obj = JSON.parse(response);
        document.getElementById("table").innerHTML="";
        for (var i = 0; i < obj.length; i++) {
		document.getElementById("table").innerHTML+="<tr><td>"+obj[i].article+"</td><td>"+obj[i].titre+"</td><td>"+obj[i].description+"</td><td>"+obj[i].id+"</td></tr>";
        }
	});
}

function envoyer()
{
    $.post('/pfe/add.php', {"service":"add","idm":document.getElementById("ide").textContent,"contenu":document.getElementById("messag").value}, function(response) {
        
        var obj = JSON.parse(response);
            document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-8' style='font-weight:bold;font-size:25px;text-align:right'><span style='background:orange;padding:0 20px;border-radius:20px'>"+document.getElementById("messag").value+"</span></div><div class='col-md-3' style='font-weight:bold;font-size:25px;color:red'>:"+obj.nom+" "+obj.prenom+"</div></div>" 
            document.getElementById("messag").value="";
            var element = document.getElementById("chatbox");
            element.scrollTop = element.scrollHeight;
    });
    
    
}

function dispsg()
    {
        console.log(1)
        if(this.parentElement.children[0].style.display=="none")
        this.parentElement.children[0].style.display="block"
        else
        this.parentElement.children[0].style.display="none"
    }

function chatboxe()
{
    if(etat==2)
    {
    z=document.getElementById("ide").textContent
    $.post('/pfe/msg.php', {"service":"chat","idm":document.getElementById("ide").textContent}, function(response) {
        
        if(response=="nope")
        {
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
        }
        else
        {
        
         var obj = JSON.parse(response);
         if(num!=obj.length)
         {
            document.getElementById("chatbox").innerHTML="";
         for (var i = 0; i < obj.length; i++) {
             var date=obj[i].date;
            var res = date.split(" ");
            var res1=res[1].split(".");
             if(obj[i].id==z)
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>"+obj[i].nom+" "+obj[i].prenom+":</div><div class='col-md-7' style='font-weight:bold;font-size:25px'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:yellow;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div></div>"
             else
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-8' style='font-weight:bold;font-size:25px;text-align:right'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:orange;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div><div class='col-md-3' style='font-weight:bold;font-size:25px;;color:red'>:"+obj[i].nom+" "+obj[i].prenom+"</div></div>"
         }
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
         var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
         }
         
        }
        if(etat==2)
        setTimeout(chatboxe,3000);
    });
}
}

function msgs()
{
    etat=2;
        var z=this.parentElement.children[0].children[0].children[0].textContent;
        var nom=this.parentElement.children[1].textContent;
        var prenom=this.parentElement.children[2].textContent;
    $.post('/pfe/msg.php', {"service":"chat","idm":this.parentElement.children[0].children[0].children[0].textContent}, function(response) {
       
        if(response=="nope")
        {
            document.getElementById("cont").innerHTML="<div class='row'><div class='offset-md-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
         document.getElementById("ide").style.display="none";
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
         document.getElementById("cont").innerHTML+="<div class='rox'><div class='col-md-5 offset-md-3'><input type='text' class='form-control' id='messag' /></div><div class='col-md-2'><input type='submit' value='envoyer' id='mssg'/></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
        }
        else
        {
            
         var obj = JSON.parse(response);
        
         document.getElementById("cont").innerHTML="<div class='row'><div class='offset-md-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
         document.getElementById("ide").style.display="none";
         t=obj.length
         num=obj.length
         for (var i = 0; i < obj.length; i++) {
            var date=obj[i].date;
            var res = date.split(" ");
            var res1=res[1].split(".");
             if(obj[i].id==z)
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>"+obj[i].nom+" "+obj[i].prenom+":</div><div class='col-md-7' style='font-weight:bold;font-size:25px;text-align:justify'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:yellow;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div></div>"
             else
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-8' style='font-weight:bold;font-size:25px;text-align:right'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:orange;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div><div class='col-md-3' style='font-weight:bold;font-size:25px;;color:red'>:"+obj[i].nom+" "+obj[i].prenom+"</div></div>"
         }
        //  document.getElementById("cont").innerHTML+="<div class='row'><div class='offset-md-6 col-md-1'><i class='fa fa-sort-desc fa-2x'></i></div></div>"
         document.getElementById("cont").innerHTML+="<div class='rox'><div class='col-md-5 offset-md-3'><input type='text' class='form-control' id='messag' /></div><div class='col-md-2'><input type='submit' value='envoyer' id='mssg' class='btn btn-success'/></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
        }
        var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
        setTimeout(online,300);
        setTimeout(chatboxe,5000);
    });
}

function online()
{
    $.post('/pfe/online.php', {"service":"ms"}, function(response) {
       var obj = JSON.parse(response);
       for (let k = 0; k < obj.length; k++) {
       var t=obj[k].date
       var res = t.split(" ");
       var res2 = res[1].split(":");
       var date = res[0].split("-");
       var minute=(parseInt(date[0])*15252840)+(parseInt(date[1])*41760)+(parseInt(date[2])*1440)+(parseInt(res2[0])*60)+parseInt(res2[1]);
       
       var current = new Date()+'';
       var d = new Date();
       var n = d.getMonth()+1;
       var res1 = current.split(" ");
       var res3 = res1[4].split(":");

       var min=(parseInt(res1[3])*15252840)+(n*41760)+(parseInt(res1[2])*1440)+((parseInt(res3[0])+2)*60)+parseInt(res3[1]);
       
       if(min-minute<=1)
       {
        if(etat==1)
        {
            var zon=document.getElementsByClassName("idtable");
            for (let i = 0; i < zon.length; i++) {
                if(zon[i].textContent==obj[k].id)
                zon[i].parentElement.children[1].children[0].children[1].style.background='green';
        }
        }
        else
            {
                
                if(obj[k].id==document.getElementById("ide").textContent)
                document.getElementById("onlinemsg").style.background="green"
            }
       }
       else{
        if(etat==1)
        {
            var zon=document.getElementsByClassName("idtable");
            for (let i = 0; i < zon.length; i++) {
                if(zon[i].textContent==obj[k].id)
                zon[i].parentElement.children[1].children[0].children[1].style.background='gray';
        }
        }
        else
        {
            if(obj[k].id==document.getElementById("ide").textContent)
            document.getElementById("onlinemsg").style.background="gray"
        }
       }
    }
    });
    if(etat==1 || etat==2)
       {
        setTimeout(online,3000);
       }
}
function msgnnlu()
{
    $.post('/pfe/msgnnlu.php', {"service":"ms"}, function(response) {
        console.log(response);
        if(response!="nope")
        {
            var t=document.getElementsByClassName("idtable");
                for (let i = 0; i < t.length; i++) {
                    t[i].children[0].children[1].textContent="";
                }
        var obj = JSON.parse(response);
            for (let k = 0; k < obj.length; k++) {
                var t=document.getElementsByClassName("idtable");
                for (let i = 0; i < t.length; i++) {
                    console.log(obj[k].id+"/"+t[i].children[0].children[0].textContent+"/"+obj[k].nonlu)
                    if(t[i].children[0].children[0].textContent==obj[k].id)
                    t[i].children[0].children[1].textContent=obj[k].nonlu;
                }
            }
           
        }
   });
   if(etat==1)
   setTimeout(msgnnlu,3000);
}

function messages(){
    etat=1;
    window.location='message.php'
}

function poop(){
    var current = new Date()+'';
    $.post('/pfe/active.php', {"service":"ms"}, function(response) {
	});
}

function logout()
{
    $.post('/pfe/logout.php', {"service":"ms"}, function(response) {
        window.location="login.php"
	});
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
    $.post('/pfe/msg.php', {"service":"chat","idm":this.children[0].children[1].textContent}, function(response) {
       
        if(response=="nope")
        {
            document.getElementById("cont").innerHTML="<div class='row'><div class='offset-md-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
         document.getElementById("ide").style.display="none";
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
         document.getElementById("cont").innerHTML+="<div class='rox'><div class='col-md-5 offset-md-3'><input type='text' class='form-control' id='messag' /></div><div class='col-md-2'><input type='submit' value='envoyer' id='mssg'/></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
        }
        else
        {
            
         var obj = JSON.parse(response);
        
         document.getElementById("cont").innerHTML="<div class='row'><div class='offset-md-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background: antiquewhite;display:block;overflow:scroll'></div>";
         document.getElementById("ide").style.display="none";
         for (var i = 0; i < obj.length; i++) {
            var date=obj[i].date;
            var res = date.split(" ");
            var res1=res[1].split(".");
             if(obj[i].id==z)
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-3' style='font-weight:bold;font-size:25px;color:blue'>"+obj[i].nom+" "+obj[i].prenom+":</div><div class='col-md-7' style='font-weight:bold;font-size:25px;text-align:justify'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:yellow;padding:0 20px;border-radius:20px;cursor:pointer;text-align:justifie'>"+obj[i].contenu+"</span></div></div>"
             else
             document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-md-1 col-md-8' style='font-weight:bold;font-size:25px;text-align:right;text-align:justify'><h3 style='display:none'>"+res1[0]+"</h3><span class='dismsg' style='background:orange;padding:0 20px;border-radius:20px;cursor:pointer'>"+obj[i].contenu+"</span></div><div class='col-md-3' style='font-weight:bold;font-size:25px;;color:red'>:"+obj[i].nom+" "+obj[i].prenom+"</div></div>"
         }
         document.getElementById("cont").innerHTML+="<div class='rox'><div class='col-md-5 offset-md-3'><input type='text' class='form-control' id='messag' /></div><div class='col-md-2'><input type='submit' value='envoyer' id='mssg' class='btn btn-success'/></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
        }
        var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
        setTimeout(online,300);
        setTimeout(chatboxe,5000);
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
}