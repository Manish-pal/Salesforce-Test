// myAction is the fucntion name
// parameter1 -> always refers to the component resource
// parameter2 -> refers the event action
// parameter -> always refer to helper resource

/*({
	myAction : function(component, event, helper) {
		
	}
    
})*/

({    doSubmit : function(component, event, helper) {
    // accessing the value in attribute abc
    var initialABCValue = component.get("v.abc");
        if(initialABCValue == "true") {
            alert("Value is true");
            // setting the value to be false
            component.set("v.abc", "false");
        }
        else {
            alert("Value is Falseee");
            //setting the value to be true
            component.set("v.abc","true");
        }
},

//Calling a helper function from a controller
OnClickCheckBox : function(component, event, helper) {

    //Calling function defined in helper
    //helper.<functionNameinHELPER>
    console.log("From controller");
    helper.onClickCheckBoxhelper(component,event);
  
}
  

})


