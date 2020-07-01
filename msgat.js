var etat=0;
var can=0;
var t=0;
var num=0;
var messages;
var scroll;

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
    if(document.getElementById("messag").value!="")
    $.post('/pfe/add.php', {"etat":0,"idm":document.getElementById("ide").textContent,"contenu":document.getElementById("messag").value}, function(response) {
        console.log(response)
        var obj = JSON.parse(response);
        var d = new Date();
            if(num==0)
            document.getElementById("chatbox").innerHTML="";
            document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+d+"</h3><p class='dismsg' style='background: #1E90FF;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer'>"+obj.messag+"</p></div></div>"
            document.getElementById("messag").value="";
            var element = document.getElementById("chatbox");
            element.scrollTop = element.scrollHeight;
            var t=document.getElementsByClassName("dismsg");
            num++;
            for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
    });
    else
    console.log("erreur");
    
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
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-1 col-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
        }
        else
        {
        
         var obj = JSON.parse(response);
         if(num!=obj.length)
         {
            if(num==0)
            document.getElementById("chatbox").innerHTML="";

            var mm=document.getElementsByClassName("phototo");
            var kk=document.getElementsByClassName("flex");
            for (let k = 0; k < mm.length; k++) {
                if(k==mm.length-1)
                {
                    if(kk[kk.length-1].children[0]==mm[k])
                    {
                        mm[k].removeAttribute("style");
                    }
                }
                
            }
         for (var i = 0; i < obj.length; i++) {
             var date=obj[i].date;
            var res = date.split(" ");
            var res1=res[1].split(".");
            
            var tof="<div class='offset-1 col-1 phototo'></div>";
            if(i<obj.length-1)
            if(obj[i].id!=obj[i+1].id)
            {
                tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
            }
            if(i==obj.length-1)
            if(obj[i].id==z && obj[i].etat==0)
            tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
            if(obj[i].id==z && obj[i].etat==0)
            {
                if(obj[i].contenu!="")
                 document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='word-break:break-word'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: silver;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                 else
                 {
                     str=obj[i].file;
                    var words = str.split('.');
                    var fruits = ['GIF','PNG','JPG','JPEG'];
                    words=words[words.length-1];
                     if(fruits.includes(words.toUpperCase()))
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:50%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:42%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                     else
                     {
                         var t=obj[i].file;
                         var op=t.split('/');
                         var op1=op[op.length-1];
                         var final=op1.split("_");
                         var fina2=op1.split(".");
                         var final2=fina2[fina2.length-1];
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                     }
                 }
            }
            else if(obj[i].id!=z && obj[i].etat==0)
            {
                if(obj[i].contenu!="")
                document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;word-break: break-word;'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: #1E90FF;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                else
                {
                     str=obj[i].file;
                    var words = str.split('.');
                    var fruits = ['GIF','PNG','JPG','JPEG'];
                    words=words[words.length-1];
                     if(fruits.includes(words.toUpperCase()))
                     document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:87%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:79%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                     else
                     {
                        var t=obj[i].file;
                        var op=t.split('/');
                        var op1=op[op.length-1];
                        var final=op1.split("_");
                        var fina2=op1.split(".");
                        var final2=fina2[fina2.length-1];
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                     }
                     

                }
            }
        
         }
         num=obj.length;
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
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

       var min=(parseInt(res1[3])*15252840)+(n*41760)+(parseInt(res1[2])*1440)+((parseInt(res3[0])+1)*60)+parseInt(res3[1]);
       
       if(min-minute<=1)
       {
            var zon=document.getElementsByClassName("onlin");
            for (let i = 0; i < zon.length; i++) {
                if(zon[i].parentElement.children[0].textContent==obj[k].id)
                {
                    zon[i].innerHTML="online";
                    zon[i].style.color="green"
                }
                
        }
        if(etat==2)
            {
                
                if(obj[k].id==document.getElementById("ide").textContent)
                document.getElementById("onlinemsg").style.background="green"
            }
       }
       else{
       
            var zon=document.getElementsByClassName("onlin");
            for (let i = 0; i < zon.length; i++) {
                if(zon[i].parentElement.children[0].textContent==obj[k].id)
                {
                zon[i].innerHTML="offline";
                zon[i].style.color="red"
                }
        }
        if(etat==2)
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

function fill()
{
    document.getElementById("fill").click();
}

function sendfile()
{
    document.getElementById("fille").click();
}

function addimoj()
{
    document.getElementById("messag").value+=this.textContent
}

function imojbig()
{
    var g="<span style='font-size:100px'>"+this.textContent+"</span>";
    console.log(g)
    $.post('/pfe/add.php', {"etat":1,"idm":document.getElementById("ide").textContent,"contenu":g}, function(response) {
        
        var d = new Date();
            if(num==0)
            document.getElementById("chatbox").innerHTML="";
            document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+d+"</h3><p class='dismsg' style='background: #1E90FF;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer'>"+g+"</p></div></div>" 
            document.getElementById("messag").value="";
            var element = document.getElementById("chatbox");
            element.scrollTop = element.scrollHeight;
            var t=document.getElementsByClassName("dismsg");
            num++;
            for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
    });
    
    
}

function envv(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mssg").click();
    }
    }

function emoji_select()
{
    if(this.children[0])
    {
        console.log(this.children[0]);
    }
    else
    {
        if(this.textContent=="small emojis")
        {
            var element = document.getElementById("chatbox");
        scroll=element.scrollTop;
        var t=document.getElementById("messag").value
        document.getElementById("env").parentElement.children[3].innerHTML="<div class='col-10 offset-1'><div class='row'><div class='offset-1 col-5' style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'><mark style='cursor:pointer'>small emojis</mark></p></div><div class='col-5'  style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy' style='cursor:pointer'>big emojis</div></p></div><p class='has-text-align-center has-large-font-size rock-exclude'><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😀</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😅</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😆</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😉</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😊</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😋</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😎</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😍</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😘</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😙</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😚</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤩</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😶</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😏</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😥</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😮</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😯</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😫</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😴</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😌</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😛</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😜</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😝</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😒</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😓</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😕</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😲</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😖</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😞</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😟</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😢</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😦</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😧</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😰</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😱</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😳</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😵</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😡</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤬</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😇</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🧐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🥱</span></p></div>";
    // document.getElementById("env").parentElement.innerHTML+="<div class='row jiemo'><div class='col-10 offset-1'><div class='row'><div class='offset-1 col-5' style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'><mark>small emojis</mark></p></div><div class='col-5'  style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'>big emojis</div></p></div><p class='has-text-align-center has-large-font-size rock-exclude'><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😀</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😅</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😆</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😉</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😊</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😋</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😎</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😍</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😘</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😙</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😚</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤩</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😶</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😏</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😥</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😮</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😯</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😫</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😴</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😌</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😛</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😜</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😝</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😒</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😓</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😕</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😲</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😖</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😞</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😟</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😢</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😦</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😧</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😰</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😱</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😳</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😵</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😡</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤬</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😇</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🧐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🥱</span></p></div></div>";
    document.getElementById("messag").value=t;
    var element = document.getElementById("chatbox");
        element.scrollTop = scroll;
        var input = document.getElementById("messag");
        input.addEventListener("keyup", envv); 
        var tt=document.getElementsByClassName("imoj")
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",addimoj)
        }
        var mm=document.getElementsByClassName("emjy");
        for (let i = 0; i < mm.length; i++) {
            mm[i].addEventListener("click",emoji_select)
        }
        var pr=document.getElementsByClassName("sendim");
        for (let i = 0; i < pr.length; i++) {
            pr[i].addEventListener("click",fill);
            
        }
        var tt=document.getElementsByClassName("emojis");
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",emojis);
        }
        var fille=document.getElementsByClassName("sendfile");
        for (let i = 0; i < fille.length; i++) {
            fille[i].addEventListener("click",sendfile);
        }
        document.getElementById("mssg").addEventListener("click",envoyer);
        var t=document.getElementsByClassName("dismsg");
        for (let i = 0; i < t.length; i++) {
           t[i].addEventListener("click",dispsg);
            
        }
        var r=document.getElementsByClassName("fullscreen");
        for (let i = 0; i < r.length; i++) {
            r[i].addEventListener("click",fullp);
        }
       
       var down=document.getElementsByClassName("download");
       for (let i = 0; i < down.length; i++) {
           down[i].addEventListener("click",downlod)
       }
       var over=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           over[i].addEventListener("mouseover",dismp);
           over[i].parentElement.children[2].addEventListener("mouseover",dismp);
           over[i].parentElement.children[3].addEventListener("mouseover",dismp);
       }
       var out=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           out[i].addEventListener("mouseout",disn);
           out[i].parentElement.children[2].addEventListener("mouseout",disn);
           out[i].parentElement.children[3].addEventListener("mouseout",disn);
       }
       var tt=document.getElementsByClassName("emojis");
       for (let i = 0; i < tt.length; i++) {
           tt[i].textContent="⛔";
       }
        }
        else
        {
            var element = document.getElementById("chatbox");
        scroll=element.scrollTop;
        var t=document.getElementById("messag").value
        document.getElementById("env").parentElement.children[3].innerHTML="<div class='col-10 offset-1'><div class='row'><div class='offset-1 col-5' style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy' style='cursor:pointer'>small emojis</p></div><div class='col-5'  style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'><mark style='cursor:pointer'>big emojis</mark></div></p></div><p class='has-text-align-center has-large-font-size rock-exclude'><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😀</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😁</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😂</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤣</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😃</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😄</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😅</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😆</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😉</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😊</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😋</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😎</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙂</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤗</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😶</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙄</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😥</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😫</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😴</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😌</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😛</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😜</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😒</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😓</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😔</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😕</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙃</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😢</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😭</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😨</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😰</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😱</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😡</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😠</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤬</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😇</span></p></div>";
    // document.getElementById("env").parentElement.innerHTML+="<div class='row jiemo'><div class='col-10 offset-1'><div class='row'><div class='offset-1 col-5' style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'>small emojis</p></div><div class='col-5'  style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'><mark>big emojis</mark></div></p></div><p class='has-text-align-center has-large-font-size rock-exclude'><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😀</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😁</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😂</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤣</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😃</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😄</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😅</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😆</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😉</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😊</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😋</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😎</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙂</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤗</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😶</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙄</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😥</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😫</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😴</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😌</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😛</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😜</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😒</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😓</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😔</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😕</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🙃</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😢</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😭</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😨</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😰</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😱</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😡</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😠</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>🤬</span><span class='imojbig' style='margin:5%;font-size:35px;cursor:pointer'>😇</span></p></div></div>";
    document.getElementById("messag").value=t;
    var element = document.getElementById("chatbox");
        element.scrollTop = scroll;
        var input = document.getElementById("messag");
        input.addEventListener("keyup", envv); 
        var tt=document.getElementsByClassName("imoj")
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",addimoj)
        }
        
        var kk=document.getElementsByClassName("imojbig");
        for (let i = 0; i < kk.length; i++) {
            kk[i].addEventListener("click",imojbig) 
        }
        var mm=document.getElementsByClassName("emjy");
        for (let i = 0; i < mm.length; i++) {
            mm[i].addEventListener("click",emoji_select)
        }
        var pr=document.getElementsByClassName("sendim");
        for (let i = 0; i < pr.length; i++) {
            pr[i].addEventListener("click",fill);
            
        }
        var tt=document.getElementsByClassName("emojis");
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",emojis);
        }
        var fille=document.getElementsByClassName("sendfile");
        for (let i = 0; i < fille.length; i++) {
            fille[i].addEventListener("click",sendfile);
        }
        document.getElementById("mssg").addEventListener("click",envoyer);
        var t=document.getElementsByClassName("dismsg");
        for (let i = 0; i < t.length; i++) {
           t[i].addEventListener("click",dispsg);
            
        }
        var r=document.getElementsByClassName("fullscreen");
        for (let i = 0; i < r.length; i++) {
            r[i].addEventListener("click",fullp);
        }
       
       var down=document.getElementsByClassName("download");
       for (let i = 0; i < down.length; i++) {
           down[i].addEventListener("click",downlod)
       }
       var over=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           over[i].addEventListener("mouseover",dismp);
           over[i].parentElement.children[2].addEventListener("mouseover",dismp);
           over[i].parentElement.children[3].addEventListener("mouseover",dismp);
       }
       var out=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           out[i].addEventListener("mouseout",disn);
           out[i].parentElement.children[2].addEventListener("mouseout",disn);
           out[i].parentElement.children[3].addEventListener("mouseout",disn);
       }
       var tt=document.getElementsByClassName("emojis");
       for (let i = 0; i < tt.length; i++) {
           tt[i].textContent="⛔";
       }
        }
    }
}

function emojis()
{
    if(this.textContent=="😀")
    {
        var element = document.getElementById("chatbox");
        scroll=element.scrollTop;
        var t=document.getElementById("messag").value
    document.getElementById("env").parentElement.innerHTML+="<div class='row jiemo'><div class='col-10 offset-1'><div class='row'><div class='offset-1 col-5' style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy'><mark style='cursor:pointer'>small emojis</mark></p></div><div class='col-5'  style='font-weight:bold;font-size: 19px;padding:0'><p class='emjy' style='cursor:pointer'>big emojis</div></p></div><p class='has-text-align-center has-large-font-size rock-exclude'><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😀</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😅</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😆</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😉</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😊</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😋</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😎</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😍</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😘</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😙</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😚</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙂</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤗</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤩</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😶</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙄</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😏</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😣</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😥</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😮</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😯</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😫</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😴</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😌</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😛</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😜</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😝</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😒</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😓</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😔</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😕</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙃</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤑</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😲</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🙁</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😖</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😞</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😟</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😤</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😢</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😦</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😧</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😨</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😰</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😱</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😳</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤪</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😵</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😡</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤬</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>😇</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤠</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🤭</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🧐</span><span class='imoj' style='margin:5%;font-size:19px;cursor:pointer'>🥱</span></p></div></div>";
    document.getElementById("messag").value=t;
    var element = document.getElementById("chatbox");
        element.scrollTop = scroll;
        var input = document.getElementById("messag");
        input.addEventListener("keyup", envv); 
        var tt=document.getElementsByClassName("imoj")
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",addimoj)
        }
        var mm=document.getElementsByClassName("emjy");
        for (let i = 0; i < mm.length; i++) {
            mm[i].addEventListener("click",emoji_select)
        }
        var pr=document.getElementsByClassName("sendim");
        for (let i = 0; i < pr.length; i++) {
            pr[i].addEventListener("click",fill);
            
        }
        var tt=document.getElementsByClassName("emojis");
        for (let i = 0; i < tt.length; i++) {
            tt[i].addEventListener("click",emojis);
        }
        var fille=document.getElementsByClassName("sendfile");
        for (let i = 0; i < fille.length; i++) {
            fille[i].addEventListener("click",sendfile);
        }
        document.getElementById("mssg").addEventListener("click",envoyer);
        var t=document.getElementsByClassName("dismsg");
        for (let i = 0; i < t.length; i++) {
           t[i].addEventListener("click",dispsg);
            
        }
        var r=document.getElementsByClassName("fullscreen");
        for (let i = 0; i < r.length; i++) {
            r[i].addEventListener("click",fullp);
        }
       
       var down=document.getElementsByClassName("download");
       for (let i = 0; i < down.length; i++) {
           down[i].addEventListener("click",downlod)
       }
       var over=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           over[i].addEventListener("mouseover",dismp);
           over[i].parentElement.children[2].addEventListener("mouseover",dismp);
           over[i].parentElement.children[3].addEventListener("mouseover",dismp);
       }
       var out=document.getElementsByClassName("dismsge");
       for (let i = 0; i < over.length; i++) {
           out[i].addEventListener("mouseout",disn);
           out[i].parentElement.children[2].addEventListener("mouseout",disn);
           out[i].parentElement.children[3].addEventListener("mouseout",disn);
       }
       var tt=document.getElementsByClassName("emojis");
       for (let i = 0; i < tt.length; i++) {
           tt[i].textContent="⛔";
       }
    }
    else
    {
        var y=document.getElementsByClassName("jiemo")
        for (let i = 0; i < y.length; i++) {
            y[i].innerHTML="";
        }
       var tt=document.getElementsByClassName("emojis");
       for (let i = 0; i < tt.length; i++) {
           tt[i].textContent="😀";
       }
    }
       
}

function imgs()
{
    var d = new Date();
    var A=document.getElementById("fill").value
    var sp=A.split("\\");
    var sp1=sp[sp.length-1].split(".")
    console.log(sp1[0])
  var name = document.getElementById("fill").files[0].name;
  console.log(name)
  var form_data = new FormData();
  var ext = name.split('.').pop().toLowerCase();
  if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
  {
   alert("Invalid Image File");
   return;
  }
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("fill").files[0]);
  var f = document.getElementById("fill").files[0];
  var fsize = f.size||f.fileSize;
  if(fsize > 20000000)
  {
   alert("Image File Size is very big");
  }
  else
  {
   form_data.append("file", document.getElementById('fill').files[0]);
   form_data.append("name", sp1[0]);
   $.ajax({
    url:"fill.php",
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
    console.log(response)
     if(response!=0)
     {
         console.log(response)
         var toti=response;
        $.post('/pfe/fillnext.php', {"id":document.getElementById("ide").textContent}, function(response) {
            if(response==1)
            {
                document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+d+"</h3><p class='dismsge' style='background-image: url("+toti+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:87%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:79%;display:none;cursor: grab;'></div><a href='"+toti+"' style='display:none' download></a></p></div></div>" 
            document.getElementById("messag").value="";
            var element = document.getElementById("chatbox");
            element.scrollTop = element.scrollHeight;
            var t=document.getElementsByClassName("dismsg");
            num++;
            for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
            }
        });
     }
    }
   });
}
}

function imgg()
{
    var d = new Date();
    var A=document.getElementById("fille").value
    var sp=A.split("\\");
    var sp1=sp[sp.length-1].split(".")
    console.log(sp1[0])
  var name = document.getElementById("fille").files[0].name;
  console.log(name)
  var form_data = new FormData();
  var ext = name.split('.').pop().toLowerCase();
  if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) != -1) 
  {
   alert("Invalid extension File");
   return;
  }
  var oFReader = new FileReader();
  oFReader.readAsDataURL(document.getElementById("fille").files[0]);
  var f = document.getElementById("fille").files[0];
  var fsize = f.size||f.fileSize;
  if(fsize > 20000000)
  {
   alert("Image File Size is very big");
  }
  else
  {
   form_data.append("file", document.getElementById('fille').files[0]);
   form_data.append("name", sp1[0]);
   $.ajax({
    url:"fill.php",
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
    console.log(response)
     if(response!=0)
     {
         console.log(response)
         var toti=response;
        $.post('/pfe/fillnext.php', {"id":document.getElementById("ide").textContent}, function(response) {
            if(response==1)
            {
                var t=toti;
                         var op=t.split('/');
                         var op1=op[op.length-1];
                         var final=op1.split("_");
                         var fina2=op1.split(".");
                         var final2=fina2[fina2.length-1];
                document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+d+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+toti+"' style='display:none' download></a></p></div></div>" 
            document.getElementById("messag").value="";
            var element = document.getElementById("chatbox");
            element.scrollTop = element.scrollHeight;
            var t=document.getElementsByClassName("dismsg");
            num++;
            for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
            }
        });
     }
    }
   });
}
}

function closeX()
{
    document.getElementById("messages").style.display="none"
    document.getElementById("cont").style.display="block"
}

function fullp()
{
   var str=this.parentElement.children[1].style.backgroundImage
   var res = str.split("\"");
   console.log(res[1])
   document.getElementById("messages").style.display="block"
   document.getElementById("messages").innerHTML="<div style='background-image:url("+res[1]+");background-repeat:no-repeat;background-size:100% 100%;height:100%;width:100%;image-rendering: -webkit-optimize-contrast;'><p id='close' style='position:relative;left: 98%;width: fit-content;font-size: large;color: black;cursor: pointer;'>X</p></div>"
   document.getElementById("close").addEventListener("click",closeX)
   document.getElementById("cont").style.display="none"
}

function dismp()
{
    this.parentElement.children[2].style.display="block";
    this.parentElement.children[3].style.display="block";
}

function disn()
{
    this.parentElement.children[2].style.display="none";
    this.parentElement.children[3].style.display="none";
}

function downlod()
{
    this.parentElement.children[4].click();
}

function msgs()
{
    etat=2;
        var z=this.parentElement.children[0].textContent;
        var nom=this.parentElement.children[1].textContent;
        var prenom=this.parentElement.children[2].textContent;
    $.post('/pfe/msg.php', {"service":"chat","idm":this.parentElement.children[0].textContent}, function(response) {
       
        if(response=="nope")
        {
            document.getElementById("cont").innerHTML="<div class='row'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background:white;display:block;overflow:scroll;margin-left:-1px'></div>";
         document.getElementById("ide").style.display="none";
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-1 col-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
         document.getElementById("cont").innerHTML+="<div id='env' class='row' style='margin-bottom:3%'><div class='offset-1 col-1' style='padding:0'><div class='row'><div class='col-6' style='padding:0'><input type='file' id='fille' style='display:none'/><div class='sendfile' style='background-image: url(img/fichier.jpg);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div><div class='col-6' style='padding-left:0'><input type='file' id='fill' style='display:none' accept='image/*'/><div class='sendim' style='background-image: url(img/imag.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div></div></div><div class='col-5' style='padding:0'><input type='text' class='form-control' id='messag' /></div><div class='col-2' style='padding:0'><div class='row' style='margin-left:0%'><div id='mssg' class='col-3 btn btn-success' style='background-image: url(img/send.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 30%;border: none;border-radius: 50%;'></div><div class='col-1 emojis' style='padding:0;margin-top:0%;font-size:16px'>😀</div></div></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
        }
        else
        {
            
         var obj = JSON.parse(response);
        
         document.getElementById("cont").innerHTML="<div class='row' style='background: aqua;width: 100%;margin-left: 0px;border-radius: 5%;'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background-image:url(./img/font.jpg);background-size:100% 100%;background-repeat:no-repeat;display:block;overflow:scroll;margin-left:-1px'></div>";
         document.getElementById("ide").style.display="none";
         t=obj.length
         num=obj.length
         for (var i = 0; i < obj.length; i++) {
            var date=obj[i].date;
            var res = date.split(" ");
            var res1=res[1].split(".");
            var tof="<div class='offset-1 col-1 phototo'></div>";
            if(i<obj.length-1)
            if(obj[i].id!=obj[i+1].id)
            {
                tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
            }
            if(i==obj.length-1)
            if(obj[i].id==z)
            tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
            if(obj[i].id==z)
             {
                 if(obj[i].contenu!="")
                 document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='word-break:break-word'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: silver;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                 else
                 {
                     str=obj[i].file;
                    var words = str.split('.');
                    var fruits = ['GIF','PNG','JPG','JPEG'];
                    words=words[words.length-1];
                     if(fruits.includes(words.toUpperCase()))
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:50%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:42%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                     else
                     {
                         var t=obj[i].file;
                         var op=t.split('/');
                         var op1=op[op.length-1];
                         var final=op1.split("_");
                         var fina2=op1.split(".");
                         var final2=fina2[fina2.length-1];
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                     }
                 }
             }
             
             else
             {
                if(obj[i].contenu!="")
                document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;word-break: break-word;'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: #1E90FF;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                else
                {
                     str=obj[i].file;
                    var words = str.split('.');
                    var fruits = ['GIF','PNG','JPG','JPEG'];
                    words=words[words.length-1];
                     if(fruits.includes(words.toUpperCase()))
                     document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:87%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:79%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                     else
                     {
                        var t=obj[i].file;
                        var op=t.split('/');
                        var op1=op[op.length-1];
                        var final=op1.split("_");
                        var fina2=op1.split(".");
                        var final2=fina2[fina2.length-1];
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                     }
                     

                }
             }
             
         }
        //  document.getElementById("cont").innerHTML+="<div class='row'><div class='offset-6 col-1'><i class='fa fa-sort-desc fa-2x'></i></div></div>"
        document.getElementById("cont").innerHTML+="<div id='env' class='row' style='margin-bottom:3%'><div class='offset-1 col-1' style='padding:0'><div class='row'><div class='col-6' style='padding:0'><input type='file' id='fille' style='display:none'/><div class='sendfile' style='background-image: url(img/fichier.jpg);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div><div class='col-6' style='padding-left:0'><input type='file' id='fill' style='display:none' accept='image/*'/><div class='sendim' style='background-image: url(img/imag.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div></div></div><div class='col-5' style='padding:0'><input type='text' class='form-control' id='messag' /></div><div class='col-2' style='padding:0'><div class='row' style='margin-left:0%'><div id='mssg' class='col-3 btn btn-success' style='background-image: url(img/send.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 30%;border: none;border-radius: 50%;'></div><div class='col-1 emojis' style='padding:0;margin-top:0%;font-size:16px'>😀</div></div></div></div>";
        var input = document.getElementById("messag");
        input.addEventListener("keyup", envv); 
        document.getElementById("fill").addEventListener("change",imgs);
        document.getElementById("fille").addEventListener("change",imgg);
         var pr=document.getElementsByClassName("sendim");
         for (let i = 0; i < pr.length; i++) {
             pr[i].addEventListener("click",fill);
             
         }
         var tt=document.getElementsByClassName("emojis");
         for (let i = 0; i < tt.length; i++) {
             tt[i].addEventListener("click",emojis);
         }
         var fille=document.getElementsByClassName("sendfile");
         for (let i = 0; i < fille.length; i++) {
             fille[i].addEventListener("click",sendfile);
         }
         document.getElementById("mssg").addEventListener("click",envoyer);
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
        var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
        setTimeout(online,300);
        setTimeout(chatboxe,5000);
    });
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

function unset()
{
    $.post('/pfe/unset.php', {"service":"ms"}, function(response) {
        
    });
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
                       
                        '</span>20KB</span>'+
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
    etat=1;
    var zone=this.document.getElementsByClassName("msgat");
    for (let i = 0; i < zone.length; i++) {
        zone[i].addEventListener("click",msgs);
        
    }
    var zon=this.document.getElementsByClassName("unset");
    for (let i = 0; i < zon.length; i++) {
        zon[i].addEventListener("click",unset);
        
    }
    document.getElementById("logout").addEventListener("click",logout);
    document.getElementById("logout").style.cursor="pointer";
    document.getElementById("msg").style.cursor="pointer";
    setInterval(poop,10000);
    // setInterval(propo,1000);
    this.setTimeout(online,0);
    this.setTimeout(notification,100);
    // this.setTimeout(propo_not,100);
    document.getElementById("shrttat").addEventListener("click",shrttat);
    var noti=document.getElementsByClassName("idnotif")
    if(noti.length!=0)
    {
        etat=2;
        var z=noti[0].textContent;
        var nom=document.getElementById("noms").textContent;
        var prenom=document.getElementById("prenoms").textContent;
    $.post('/pfe/msg.php', {"service":"chat","idm":noti[0].textContent}, function(response) {
       
        if(response=="nope")
        {
            document.getElementById("cont").innerHTML="<div class='row'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background:white;display:block;overflow:scroll;margin-left:-1px'></div>";
         document.getElementById("ide").style.display="none";
         document.getElementById("chatbox").innerHTML="<div class='row flex' style='width:100%'><div class='offset-1 col-3' style='font-weight:bold;font-size:25px;color:blue'>aucune message!</div></div>"
         document.getElementById("cont").innerHTML+="<div class='row'><div class='col-5 offset-3'><input type='text' class='form-control' id='messag' /></div><div class='col-2'><input type='submit' value='envoyer' id='mssg' class='btn btn-success'/></div></div>";
         document.getElementById("mssg").addEventListener("click",envoyer);
        }
        else
        {
            var obj = JSON.parse(response);
        
            document.getElementById("cont").innerHTML="<div class='row' style='background: aqua;width: 100%;margin-left: 0px;border-radius: 5%;'><div class='offset-5'><h3 id='ide'>"+z+"</h3><h1 id='fullname'>"+nom+" "+prenom+"</h1></div><div class='online' id='onlinemsg' style='background:gray;width:20px;height:20px;border-radius:50%;display:inherit;margin-top:5px'></div></div><div class='chatbox row' id='chatbox' style='width:100%;height:500px;background-image:url(./img/font.jpg);background-size:100% 100%;background-repeat:no-repeat;display:block;overflow:scroll;margin-left:-1px'></div>";
            document.getElementById("ide").style.display="none";
            t=obj.length
            num=obj.length
            for (var i = 0; i < obj.length; i++) {
               var date=obj[i].date;
               var res = date.split(" ");
               var res1=res[1].split(".");
               var tof="<div class='offset-1 col-1 phototo'></div>";
               if(i<obj.length-1)
               if(obj[i].id!=obj[i+1].id)
               {
                   tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
               }
               if(i==obj.length-1)
               if(obj[i].id==z)
               tof="<div class='offset-1 col-1 phototo' style='background-image:url("+obj[i].photo+");background-repeat:no-repeat;background-size:100% 100%;height:50px;border-radius:50%'></div>"
               if(obj[i].id==z)
                {
                    if(obj[i].contenu!="")
                    document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='word-break:break-word'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: silver;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                    else
                    {
                        str=obj[i].file;
                       var words = str.split('.');
                       var fruits = ['GIF','PNG','JPG','JPEG'];
                       words=words[words.length-1];
                        if(fruits.includes(words.toUpperCase()))
                           document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:50%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 3%;left:42%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                        else
                        {
                            var t=obj[i].file;
                            var op=t.split('/');
                            var op1=op[op.length-1];
                            var final=op1.split("_");
                            var fina2=op1.split(".");
                            var final2=fina2[fina2.length-1];
                           document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'>"+tof+"<div class='col-6' style='border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>";
                        }
                    }
                }
                
                else
                {
                   if(obj[i].contenu!="")
                   document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;word-break: break-word;'><h3 style='display:none'>"+obj[i].date+"</h3><article class='dismsg' style='background: #1E90FF;color:black;width: fit-content;padding: 8px 5px;border-radius: 15px;cursor:pointer;margin-bottom:5px;text-align:left'>"+obj[i].contenu+"</article></div></div>"
                   else
                   {
                        str=obj[i].file;
                       var words = str.split('.');
                       var fruits = ['GIF','PNG','JPG','JPEG'];
                       words=words[words.length-1];
                        if(fruits.includes(words.toUpperCase()))
                        document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right'><h3 style='display:none'>"+obj[i].date+"</h3><p class='dismsge' style='background-image: url("+obj[i].file+");background-repeat:no-repeat;background-size:100% 100%;color:black;padding: 8px 5px;border-radius: 15px;cursor:pointer;height:200px;width:60%;image-rendering: pixelated;'><div class='fullscreen' style='background-image:url(./img/full.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:87%;display:none;cursor: grab;'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 20px;position: absolute;width: 7%;top: 0%;left:79%;display:none;cursor: grab;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                        else
                        {
                           var t=obj[i].file;
                           var op=t.split('/');
                           var op1=op[op.length-1];
                           var final=op1.split("_");
                           var fina2=op1.split(".");
                           var final2=fina2[fina2.length-1];
                           document.getElementById("chatbox").innerHTML+="<div class='row flex' style='width:100%'><div class='offset-1 col-1 phototo'></div><div class='offset-6 col-6' style='text-align:-webkit-right;border: 5px;border-radius: 9%;text-align: center;box-shadow: 10px 10px 5px #aaaaaa;margin-bottom: 5px;height:50px;padding:2% 0;border-style: solid;'><h3 style='display:none'>"+obj[i].date+"</h3><p style='color:black;font-weight:bold'>"+final[0]+"."+final2+"<div style='display:none'></div><div class='download' style='background-image:url(./img/download.png);background-repeat:no-repeat;background-size:100% 100%;height: 70%;width: 11%;cursor: grab;position: absolute;top: 14%;left: 87%;'></div><a href='"+obj[i].file+"' style='display:none' download></a></p></div></div>"
                        }
                        
   
                   }
                }
         }
        //  document.getElementById("cont").innerHTML+="<div class='row'><div class='offset-6 col-1'><i class='fa fa-sort-desc fa-2x'></i></div></div>"
        document.getElementById("cont").innerHTML+="<div id='env' class='row' style='margin-bottom:3%'><div class='offset-1 col-1' style='padding:0'><div class='row'><div class='col-6' style='padding:0'><input type='file' id='fille' style='display:none'/><div class='sendfile' style='background-image: url(img/fichier.jpg);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div><div class='col-6' style='padding-left:0'><input type='file' id='fill' style='display:none'  accept='image/*'/><div class='sendim' style='background-image: url(img/imag.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 100%;border: none;cursor:pointer'></div></div></div></div><div class='col-5' style='padding:0'><input type='text' class='form-control' id='messag' /></div><div class='col-2' style='padding:0'><div class='row' style='margin-left:0%'><div id='mssg' class='col-3 btn btn-success' style='background-image: url(img/send.png);background-repeat: no-repeat;background-size: 100% 100%;height: 25px;width: 30%;border: none;border-radius: 50%;'></div><div class='col-1 emojis' style='padding:0;margin-top:0%;font-size:16px'>😀</div></div></div></div>";
        var input = document.getElementById("messag");
        input.addEventListener("keyup", envv); 
        document.getElementById("fill").addEventListener("change",imgs);
        document.getElementById("fille").addEventListener("change",imgg);
         var pr=document.getElementsByClassName("sendim");
         for (let i = 0; i < pr.length; i++) {
             pr[i].addEventListener("click",fill);
             
         }
         var tt=document.getElementsByClassName("emojis");
         for (let i = 0; i < tt.length; i++) {
             tt[i].addEventListener("click",emojis);
         }
         var fille=document.getElementsByClassName("sendfile");
         for (let i = 0; i < fille.length; i++) {
             fille[i].addEventListener("click",sendfile);
         }
         document.getElementById("mssg").addEventListener("click",envoyer);
         var t=document.getElementsByClassName("dismsg");
         for (let i = 0; i < t.length; i++) {
            t[i].addEventListener("click",dispsg);
             
         }
         var r=document.getElementsByClassName("fullscreen");
         for (let i = 0; i < r.length; i++) {
             r[i].addEventListener("click",fullp);
         }
        }
        var down=document.getElementsByClassName("download");
        for (let i = 0; i < down.length; i++) {
            down[i].addEventListener("click",downlod)
        }
        var over=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            over[i].addEventListener("mouseover",dismp);
            over[i].parentElement.children[2].addEventListener("mouseover",dismp);
            over[i].parentElement.children[3].addEventListener("mouseover",dismp);
        }
        var out=document.getElementsByClassName("dismsge");
        for (let i = 0; i < over.length; i++) {
            out[i].addEventListener("mouseout",disn);
            out[i].parentElement.children[2].addEventListener("mouseout",disn);
            out[i].parentElement.children[3].addEventListener("mouseout",disn);
        }
        var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
        setTimeout(online,300);
        setTimeout(chatboxe,5000);
    });
    }
}