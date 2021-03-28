// myAction is the fucntion name
// parameter1 -> always refers to the component resource
// parameter2 -> refers the event action
// parameter -> always refer to helper resource

({
	myAction : function(component, event, helper) {
		
	}
    
})

({    doSubmit : function(component, event, helper) {
    	// accessing the value in attribute abc
    	var initialABCValue = component.get("v.anc");
            if(initialABCValue == "true") {
                alert("Value is true");
                // setting the value to be false
                component.set("v.abc", "false");
            }else {
                
                alert("Value is false");
                //setting the value to be true
                component.set("v.abc","true")
            }
	}
 
 })