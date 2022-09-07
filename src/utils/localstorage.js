function setToLocalStorage(name, value) {
    // if localStorage is Empty
    console.log(localStorage)
    if (localStorage.length === 0) {
        localStorage.setItem(name , [value] )
        return
    }
    // check if item in array 
    if (localStorage.getItem(name).includes(value) ) {
        return
    } else {

        const prv = localStorage.getItem(name);
        localStorage.setItem(name , [...[prv] , value] )
    }
}

function getToLocalStorage(name) {

    return localStorage.getItem(name);
}

export {setToLocalStorage , getToLocalStorage} 
