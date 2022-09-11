function setToLocalStorage(name, value) {
    // if localStorage is Empty
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
    // return data as array
    // we converted data from String to Array 
    // using split() method
    if (!localStorage.getItem('list_movies')) {
        return false 
    }
    return localStorage.getItem(name).split(',');
}
function checkMovieOnList(id) {
    // return True of False
    if (!localStorage.getItem('list_movies')) {
        return 
    }
    if (localStorage.getItem('list_movies').includes(id)) {
        return true;
    } else {
        return false;
    }
}
export {
    setToLocalStorage,
    getToLocalStorage,
    checkMovieOnList
} 
