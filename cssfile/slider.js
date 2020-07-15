window.onload = function(){ 
  setInterval(poop,10000);
  this.setTimeout(notification,100);
  showSlides();
    propo();
    getallnoti();

}

function poop(){
  var current = new Date()+'';
  $.post('/pfe/active.php', {"service":"ms"}, function(response) {
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

 var slideIndex=0;
function showSlides() {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
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
      var seconde=daten.getSeconds();
      var heur = daten.getHours();

      if (seconde<=60) {
       var time=seconde;
      } else if (seconde>60) {
          var time=min;
      } else {
         var time=heur
      }
          

      document.getElementById("addnotifi").innerHTML+= '<li>'+
                '<a class="notif_propo" style="cursor: pointer;">'+
                  '<span style="display:none">'+obj1[i].id+'</span>'+
                  '<span class="photo"><img src="'+obj1[i].profil+'">'+'</span>'+
                  '<span class="subject">'+
                  '<span class="from">'+obj1[i].nom_expediteur+'</span>'+
                  // '<span class="time">'+time+'s'+'</span>'+
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