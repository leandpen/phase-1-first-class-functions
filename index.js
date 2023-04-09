function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction (returnFunction) {
    return function returnsANamedFunction(){
        
    }
} 


function returnsAnAnonymousFunction(){
    return function () {};
}