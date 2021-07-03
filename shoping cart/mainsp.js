// start add event click sur le bouton //

var bt =document.querySelectorAll('.pinkbtn');
for(let i=0 ; i<bt.length; i++){
    //add event//
    bt[i].addEventListener('click' ,function(){
        if (bt[i].style.color==="pink"){
            bt[i].style.color="red"
        }
        else{
            bt[i].style.color="pink"
        }
    })
}


// start  compteur //
var inc =document.querySelectorAll('.up');

console.log(inc);
for(let i=0; i<inc.length; i++){
    inc[i].addEventListener('click' ,function(){
        if(inc[i].nextElementSibling.value>=0){

            inc[i].nextElementSibling.value++ ;
            totalPrice()
        }
    })
}



var dec =document.querySelectorAll('.down');


for(let i=0; i<dec.length; i++){
    dec[i].addEventListener('click' ,function(){
        if(dec[i].previousElementSibling.value>0){
            dec[i].previousElementSibling.value-- ;
            totalPrice()
        }
    })
}

// end  compteur //


// total price //

function totalPrice(){
    var price=document.querySelectorAll('.valprice');
    var qn=document.querySelectorAll('.count');
    var cost=0;
    for(let i=0;i<price.length;i++){
        cost+=price[i].innerHTML*qn[i].value
    }
    document.getElementById('total').value=cost;
}

//end totzl price //


//start  remouve button//
var del=document.querySelectorAll('.delete');
for(let i=0; i<del.length; i++){

    del[i].addEventListener('click' ,function(){
        del[i].parentNode.remove()
        totalPrice()
    })
}


//end  remouve button//

 // start button submit //

var buttonSubmit=document.getElementById("env");
var nmValue=document.getElementById('votreNom');
sub=function(){
 
    alert('Hello' +" " + nmValue.value + " " +" Thx for your comment" )
}
 // start button submit //