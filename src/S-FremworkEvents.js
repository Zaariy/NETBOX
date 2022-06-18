class Event {

    scrollXhorizontal(nameDivPerent , nameDivChild , volocityOfscroll=1) {
        /*
           This Function it is Alow you to 
            do scrolling Horizontal 
        */

        let element = document.querySelector(nameDivPerent);
        let childOfElement = document.querySelector(nameDivChild); 
        let isDown = false; 
        let startX;
        let scrollLeft ;
      
        element.addEventListener('mousedown' , (e) => {
        	isDown = true ;
        	startX = e.pageX - e.target.offsetLeft;
        	scrollLeft =  element.scrollLeft;
            // childOfElement.style = 'cursor : grabbing  ; ' ;
        });

        element.addEventListener('mouseup' , () => {
        	isDown = false;
        })

        element.addEventListener('mouseleave' , () => {
        	isDown = false ;
        })

        element.addEventListener('mousemove' , (e) => {
        	if (isDown) {
                e.preventDefault()
                // console.log(childOfElement)
        		// childOfElement.style = 'cursor : grabbing ' ;	
        		let x = e.pageX - e.target.offsetLeft ;
        		let calc = (x -  startX) * volocityOfscroll ;
        		element.scrollLeft = scrollLeft - calc ;
        		
            
        	}
        
        })


    }
}


export { Event };