window.onload = function()  {


	document.getElementById("tof").addEventListener("click",tof);
	document.getElementById("file").addEventListener("change",tofchoose);
  document.getElementById("modification").addEventListener("click",affpopup)
  document.getElementById("karwa").addEventListener("click",suppopup)
  var lm = document.getElementsByClassName("modif");
     for(i=0;i<lm.length;i++){
        lm[i].addEventListener("click",modifier)
    }


   document.getElementById("modifpssd").addEventListener("click",show)
       document.getElementById("annuler").addEventListener("click",annuler)
       document.getElementById("changer").addEventListener("click",modify)
      
propo();
}
function affpopup()
 {
      
      var photo = document.getElementById("modification").src
      console.log(photo);
     document.getElementById('pop').style.display = 'block'
    document.getElementById('up').style.display = 'block'
    document.getElementById('title').innerHTML='photo de profil'
    document.getElementById("bac").style.backgroundImage = "url("+photo+")";
 }
 function suppopup()
 {

     document.getElementById('pop').style.display = 'none'
     document.getElementById('up').style.display = 'none'

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
    url:"pages/upload.php",
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
        document.getElementById("image").src=response
        document.getElementById("modification").src=response
     }
    }
   });
}



}
function modifier(){
  
    if(this.classList[2]=="fa-pencil-alt"){
       
        var tr = this.parentElement.parentElement;
        
        var first = tr.children[1].textContent;
       
        tr.children[1].innerHTML = "<input style='color : black; width:40% ' type='text' value='"+first+"'/>";
      

        this.classList.remove("fa-pencil-alt");
        this.classList.add("fa-check-circle");

    }
    else{
        var tr = this.parentElement.parentElement;
        var nom='',prenom='',email='',travail='';
        if (tr.children[0].textContent=='nom') {
          nom = tr.children[1].children[0].value;
          tr.children[1].innerHTML=nom;
          }else if (tr.children[0].textContent=='prenom') {
          prenom = tr.children[1].children[0].value;
          tr.children[1].innerHTML=prenom;
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
        this.classList.add("fa-pencil-alt");
       
    }
}  



 

      
function show()
{
  


     document.getElementById("cacher").style.display='block'
     document.getElementById("encien-password").focus()
     document.getElementById("tabe").style.display='none'

}

function annuler()
{
      document.getElementById("cacher").style.display='none'
     document.getElementById("ring").style.display = 'none'
    document.getElementById("tabe").style.display='block'
    document.getElementById("changer").style.display='inline'
}





function modify()
{
  
    var a = document.getElementById("encien-password").value , 
    b = document.getElementById("Nouveau-password").value
           
                document.getElementById("changer").style.display='none'
                document.getElementById("ring").style.display = 'block'

                

                   setTimeout(annuler,3000)


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
  
