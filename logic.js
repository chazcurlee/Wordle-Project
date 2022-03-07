// Global variables
const inputIdArr = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In", "sq6In", "sq7In", "sq8In", "sq9In", "sq10In", "sq11In", "sq12In", "sq13In", "sq14In", "sq15In", "sq16In", "sq17In", "sq18In", "sq19In", "sq20In", "sq21In", "sq22In", "sq23In", "sq24In", "sq25In", "sq26In", "sq27In", "sq28In", "sq29In", "sq30In"]

const line1 = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In"];
const line2 = ["sq6In", "sq7In", "sq8In", "sq9In", "sq10In"];
const line3 = ["sq11In", "sq12In", "sq13In", "sq14In", "sq15In"];
const line4 = ["sq16In", "sq17In", "sq18In", "sq19In", "sq20In"];
const line5 = ["sq21In", "sq22In", "sq23In", "sq24In", "sq25In"];
const line6 = ["sq26In", "sq27In", "sq28In", "sq29In", "sq30In"];
const fives = ["sq5In", "sq10In", "sq15In", "sq20In", "sq25In", "sq30In"];
let actId = document.activeElement.id;


// Classes

class Textfield {
    constructor() {

        this.used = false;
        this.correct = "blank";


    }

    changeUsed(status) {

        if (status === false) {
            status = true;
        }else if (status === true) {
            status = false;
        }

    }



}


// Functions





const enterCheck = () => {

    let pos = 0;
    let newId = null;
    let kyCde = event.keyCode;
    let enteredKey = document.getElementById(elId).value;
    let capKey = enteredKey.toUpperCase();
    let innerText = document.getElementById(elId).value;

    inputIdArr.forEach((val, idx) => {

    if (val === elId) {
        pos = idx + 1;
        
    }

    inputIdArr.forEach((val, idx) => {

        if (idx === pos) {
            newId = val;
        }

    })
    })

    document.getElementById(elId).value = innerText.replace(enteredKey, capKey);
    console.log(newId);
    document.getElementById(newId).toggleAttribute("disabled");
    document.getElementById(newId).focus();
    document.getElementById(elId).blur();
    document.getElementById(elId).toggleAttribute("disabled");

}



const setFocus = () => {

    document.getElementById("sq1In").focus();

}

const autoMoveCursor = (elId) => {

    
    let pos = 0;
    let newId = null;
    let kyCde = event.keyCode;
    let enteredKey = document.getElementById(elId).value;
    let capKey = enteredKey.toUpperCase();
    let innerText = document.getElementById(elId).value;
    
    



    if (kyCde >= 65 && kyCde <= 90){
        let actId = document.activeElement.id;
        console.log(actId)

        if (fives.includes(actId)) {



        }else {

            inputIdArr.forEach((val, idx) => {
            

                switch (actId) {
    
                    case "sq5In":
                        break;
    
                    case "sq10In":
                        break;
    
                    case "sq15In":
                        break;
    
                    case "sq20In":
                        break;
    
                    case "sq25In":
                        break;
    
                    case "sq30In":
                        break;
    
                    default:
    
                        if (val === elId) {
                            pos = idx + 1;
                            
                        }
    
                        inputIdArr.forEach((val, idx) => {
    
                            if (idx === pos) {
                                newId = val;
                            }
                
                        })
                        break;
    
                        
                        
    
                }
                
    
                
    
    
            }) 
    
            document.getElementById(elId).value = innerText.replace(enteredKey, capKey);
            console.log(newId);
            document.getElementById(newId).toggleAttribute("disabled");
            document.getElementById(newId).focus();
            document.getElementById(elId).blur();
            document.getElementById(elId).toggleAttribute("disabled");


        }

        

    }


}





// Event Listeners


document.addEventListener("keyup", function() {

    if (event.key === "Backspace") {

        let actId = document.activeElement.id;
        console.log(actId)
        let pastId = null;
        


        inputIdArr.forEach((val, idx) => {
            
            

            if (val === actId) {
                if ((idx-1) <= -1){

                }else {

                    switch (actId) {

                        case "sq6In":
                            break;
                        
                        case "sq11In":
                            break;

                        case "sq16In":
                            break;

                        case "sq21In":
                            break;

                        case "sq26In":
                            break;

                        default:

                            pastId = idx - 1;
                            document.getElementById(inputIdArr[pastId]).toggleAttribute("disabled");
                            document.getElementById(inputIdArr[pastId]).focus();
                            document.getElementById(actId).blur();
                            document.getElementById(actId).toggleAttribute("disabled");
                            break;

                    }

                }

                
                
            }


        })

        

    }else {

    };


})


document.addEventListener("keyup", function() {


    let actId = document.activeElement.id;
    console.log(actId)
    let kyCde = event.keyCode;

    if (kyCde === 13) {

        switch(actId) {
            case "sq5In":
                console.log("enter sq5 switch success")
                break;
    
            case "sq10In":
                break;
    
            case "sq15In":
                break;
    
            case "sq20In":
                break;
    
            case "sq25In":
                break;
    
            case "sq30In":
                break;
    
            default:
                console.log("enter switch default")
                break;
                
    
    
        }
        
        
        
        
        
        
        
        

    }

})


