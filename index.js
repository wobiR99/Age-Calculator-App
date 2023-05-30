
document.querySelector("button").addEventListener("click", function(){
    let dayOfBirth = document.querySelector(".dayOB").value;
    let birthMonth = document.querySelector(".monthOB").value;
    let birthYear = document.querySelector(".yearOB").value;
    

    // if(dayOfBirth <= 31 || birthMonth <= 12 || birthYear <= ){
    //     document.querySelectorAll(".fieldLabel")[0].innerHTML = "Must be a valid date";
    // }
    for(let i = 0; i < 3; i++){
   

        if(document.querySelectorAll(".group-date")[i].value == "" ){
            document.querySelectorAll(".myLabel")[i].classList.add("red-color");
            document.querySelectorAll(".fieldLabel")[i].classList.remove("disappear");
            document.querySelectorAll(".fieldLabel")[i].classList.add("red-color");
        } else {
            if(dayOfBirth > 31 || birthMonth > 12 || birthYear > 2023){
                document.querySelectorAll(".fieldLabel")[i].innerHTML = "Must be a valid date";
                // document.querySelectorAll(".fieldLabel")[i].innerHTML = "Must be a valid date";
                // document.querySelectorAll(".fieldLabel")[i].innerHTML = "Must be a valid date";

                document.querySelectorAll(".fieldLabel")[i].classList.remove("disappear");
                 document.querySelectorAll(".fieldLabel")[i].classList.add("red-color");
                // document.querySelectorAll(".fieldLabel")[i].innerHTML = "Must be a valid date";
            }  if(dayOfBirth <= 31 && birthMonth <= 12 && birthYear <= 2023){
                let currentDate = new Date();
                let d2 = currentDate.getDate();
                let m2 = 1 + currentDate.getMonth();
                let y2 = currentDate.getFullYear();
            
                let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            
                if(dayOfBirth > d2){
                    d2 = d2 + month[m2 - 1];
                    m2 = m2 - 1;
                }
                if(birthMonth > m2){
                    m2 = m2 + 12;
                    y2 = y2 - 1;
                }
                
            
                document.querySelectorAll(".inputDisplayed")[0].textContent = y2 - birthYear;
                document.querySelectorAll(".inputDisplayed")[1].textContent = m2 - birthMonth;
                document.querySelectorAll(".inputDisplayed")[2].textContent = d2 - dayOfBirth;
            
            }
        }
     }
        
       
    
    
   
    
})