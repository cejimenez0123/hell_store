
console.log("pretty");

document.addEventListener("DOMContentLoaded", function(event) { 
    alert('Hey')
  });

    
        const quant = document.querySelector(".quantity")
quant.addEventListener("change",(c)=>{ 
            

        var html = document.querySelector(".cost")
     let cost = c.target.value  * 5.6
    //    let round = Math.round( cost * 1000)
       console.log("BO",Math.round(cost * 100)/100)

       let round = (Math.round(cost * 100)/100).toFixed(2)
    //    console.log("round",round)
        html.innerHTML=  round
             })