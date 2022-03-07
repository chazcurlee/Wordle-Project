// Global variables
const inputIdArr = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In", "sq6In", "sq7In", "sq8In", "sq9In", "sq10In", "sq11In", "sq12In", "sq13In", "sq14In", "sq15In", "sq16In", "sq17In", "sq18In", "sq19In", "sq20In", "sq21In", "sq22In", "sq23In", "sq24In", "sq25In", "sq26In", "sq27In", "sq28In", "sq29In", "sq30In"]

const line1 = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In", "sq6In"];
const line2 = ["sq7In", "sq8In", "sq9In", "sq10In", "sq11In", "sq12In"];
const line3 = ["sq13In", "sq14In", "sq15In", "sq16In", "sq17In", "sq18In"];
const line4 = ["sq19In", "sq20In", "sq21In", "sq22In", "sq23In", "sq24In"];
const line5 = ["sq25In", "sq26In", "sq27In", "sq28In", "sq29In", "sq30In"];


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

// only alpha credit: https://www.includehelp.com/code-snippets/allow-only-alphabets-in-input-field-in-javascript.aspx


// const triMove = (oldId, newId) => {




// }




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
    
    



// credit: https://stackoverflow.com/questions/56502735/how-do-i-make-onkeyup-only-be-an-alphabet-key
// user: jake

    if (kyCde >= 65 && kyCde <= 90){

        inputIdArr.forEach((val, idx) => {
            

            switch (x) {

                case "sq5":

                case "sq10":

                case "sq15":

                case "sq20":

                case "sq25":

                case "sq30":



            }
            

            if (val === elId) {
                pos = idx + 1;
                
            }


        })
        
        inputIdArr.forEach((val, idx) => {

            if (idx === pos) {
                newId = val;
            }

        })
        
        
        document.getElementById(elId).value = innerText.replace(enteredKey, capKey);
        console.log(innerText);
        document.getElementById(newId).toggleAttribute("disabled");
        document.getElementById(newId).focus();
        document.getElementById(elId).blur();
        document.getElementById(elId).toggleAttribute("disabled");
        
        

    }
}




// Event Listeners


document.addEventListener("keydown", function() {

    if (event.key === "Backspace") {

        let actId = document.activeElement.id;
        let pastId = null;
        


        inputIdArr.forEach((val, idx) => {
            
            

            if (val === actId) {
                if ((idx-1) <= -1){

                }else {

                    pastId = idx - 1;
                    document.getElementById(inputIdArr[pastId]).toggleAttribute("disabled");
                    document.getElementById(inputIdArr[pastId]).focus();
                    document.getElementById(actId).blur();
                    document.getElementById(actId).toggleAttribute("disabled");

                }

                
                
            }


        })

        

    }else {

    };


})





// triangle credit: https://www.w3schools.com/howto/howto_css_shapes.asp