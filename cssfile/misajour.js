 window.onload = function()
{
	 var lm = document.getElementsByClassName("modif");
     for(i=0;i<lm.length;i++){
        lm[i].addEventListener("click",modifier)
    }


   document.getElementById("modifpssd").addEventListener("click",show)
       document.getElementById("annuler").addEventListener("click",annuler)
       document.getElementById("changer").addEventListener("click",modify)
      
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

  
