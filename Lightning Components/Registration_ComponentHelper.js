({
	onClickCheckBoxhelper : function(cmp,evt) {
        
        //body of helper and Logic will be defined here
		console.log("This Text is from Helper Method");

		//component is finding the tag with id -> checkbox (which is set as aura id in the component)
		var checkboxvalue = cmp.find("checkBox").get("v.checked")  // in case of the checkbox default value is stored in checked attribute
		cmp.set("v.CheckBoxValue",checkboxvalue);
	}
})