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
        

        const EventMousedown =  element.addEventListener('mousedown' , (e) => {
        	isDown = true ;
        	startX = e.pageX - e.target.offsetLeft;
            scrollLeft = element.scrollLeft;
            element.classList.remove('activeGrab');
            element.classList.add('activeGrabbing');
            
        });

        const EventMouseUp  =  element.addEventListener('mouseup' , (e) => {
            isDown = false;
            element.classList.remove('activeGrabbing');
            element.classList.add('activeGrab');
            
            // e.classList.add('activeGrabing') ;
        })

        element.addEventListener('mouseleave' , () => {
        	isDown = false ;
        })

        const EventMouseMove = element.addEventListener('mousemove', (e) => {
       
        	if (isDown) {
                e.preventDefault()
        		let x = e.pageX - e.target.offsetLeft ;
        		let calc = (x -  startX) * volocityOfscroll ;
        		element.scrollLeft = scrollLeft - calc ;
        		
                
        	}
            
        })

        function RemoveEvnetScrollXhorizontal() {
            element.removeEventListener('mousedown', EventMousedown);
            element.removeEventListener('mousemove', EventMouseMove);
            element.removeEventListener('mouseup' , EventMouseUp)
        }
        return {RemoveEvnetScrollXhorizontal}
    }
    
    ScrollYCircle(namePerent , nameChild , callBack =  null) {
        const getParent = document.querySelectorAll(namePerent)[0];
        const getChildes = document.querySelectorAll(nameChild);
        
        /*
        [1] Get Size of Element Parent
        */
       let WidthOfParent = getParent.offsetWidth; 
       let Helf = (WidthOfParent / 2) ;
       let sids = WidthOfParent / 4;
       
       // [2] Get size of imgs 
       
    //    getParent.scrollTo(510  , 0) 
       
       const ScrollEvent = getParent.addEventListener('scroll', () => {
           if (callBack != null) {
               
               callBack()
            //    console.log(getParent.scrollLeft)
            }
        
            getChildes.forEach((ele) => {
                // console.log('Add event is Working now')
                // console.log(getParent)
                if (ele.getBoundingClientRect().x < 170) {
                    ele.classList.add('activeTest');
                }
                if (ele.getBoundingClientRect().x > Helf) {
                    ele.classList.remove('activeRight')
                    ele.classList.add('activeTestTow')
                }
                if ((ele.getBoundingClientRect().x)  > sids && (ele.getBoundingClientRect().x) < Helf) {
                    // console.log("autoPaly here")
                    ele.classList.remove('activeTestTow')
                    ele.classList.remove('activeTest')
                    ele.classList.remove('activeRight');
                    ele.classList.add('activeCenter')
                } else {
                    ele.classList.add('activeRight');
                    ele.classList.remove('activeCenter');

                }

            })
        
        })  
        
        function RemoveEvnetScrollXcircle() {
           
            getParent.removeEventListener('scroll', ScrollEvent);
        }  
        
        return  {RemoveEvnetScrollXcircle}
    }
}


export { Event};