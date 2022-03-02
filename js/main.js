var elForm = document.querySelector(".form") 
var elInput = document.querySelector(".form__input")
// var elButton = document.querySelector(".form__button")
var elSpan = document.querySelector(".span")
// var juft = document.querySelector(".head__boxing")
// var toq = document.querySelector(".head__innering")





elForm.addEventListener("submit" , function(evt){
 evt.preventDefault();

   

 var elVal = elInput.value;
 var first = [];
 var second = [];
 


    if (elVal.length == 0){
        elSpan.textContent = "son kiritikmadi";
        elSpan.classList.add("result-succes")
        elSpan.classList.remove("result-error")
        
        return
        // juft.push(elVal);
        // console.log(elVal);
    }

    else if (isNaN(elVal)){
        elSpan.textContent = "son kiriting";
    }


    else if (elVal % 2 == 0){
        elSpan.textContent =   elInput.value + ` bu son juft`;
        elSpan.classList.add("result-succes")
        elSpan.classList.remove("result-error")


       
        first.push(Number(elVal));
        console.log(elVal);
        
        return


    }

    
    
    else {
        elSpan.textContent = elInput.value + " bu son toq";
        elSpan.classList.add("result-error")
        elSpan.classList.remove("result-succes")

      
        second.push(Number(elVal));
        console.log(elVal);
        elInput.value = "";
        return
    }

    
})

    





// var tesla = ("tes");
// var bmv = ("bbb");
// var mers = ("mercedes")



// var cars = [
//     tesla,
//     bmv,
//     mers,
// ]


// console.log(cars);


