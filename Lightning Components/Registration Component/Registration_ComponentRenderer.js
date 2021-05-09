({
	// Your renderer method overrides go here
    render:function(component, helper){
        //call base render method
        var a = this.superRender();
        
        //custom rendering
        console.log("This text is from render function which gets executed when the component is initiated");
        return a;
    },
    
    afterRender:function(component, helper){
        // call base afterrender method
        this.superAfterRender();
        
        //interact with DOM elements
       console.log("This text should come once the render() is over");
        console.log("This text is from afterrender()method");
        
    },
    
    rerender:function(component,helper){
        
        //call base rerender method
        this.superRerender();
        
        //custom rerendering
        console.log('This text is from RERENDER function...... called whenever any data change occurs');
    },
    
    unrender: function(component, helper){
        //call base unrender method
        this.superUnrender();
        //custom rendering
		console.log('This appears when Registration component is Destroyed');
    }
})