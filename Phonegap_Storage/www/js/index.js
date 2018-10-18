
document.addEventListener("deviceready", onDeviceReady, false);
		
	




// device APIs are available
//
    function onDeviceReady() {
        
        var key = "pen";
        var value = "blue";
        
        var key = "dog";
        var value = "pet";
        
        var key = "cake";
        var value = "strawberry";
        
        var key = "chair";
        var value = "recliner";
        
        window.localStorage.setItem(key, value);
        window.localStorage.setItem(dog, pet);
        window.localStorage.setItem(cake, strawberry);
        window.localStorage.setItem(chair, recliner);
        
        var key = "pen";
        var value = window.localStorage.getItem(pen);
        // Hi Yarrh
        
        
	alert("device ready");
    }
