// https://stackoverflow.com/a/12534361 - modified to support data type differences, see asterisks
export function updateObject(obj) {
    for (var i = 1; i < arguments.length; i++) {
        for (var prop in arguments[i]) {
            var val = arguments[i][prop];
            // DO NOT try to replace "obj[prop]" with a variable!!!!
            if (typeof val === typeof obj[prop]) { //*
                if (typeof val === "object") // this also applies to arrays or null!
                    {updateObject(obj[prop], val);} // Added brackets for readability
                else
                    {obj[prop] = val;}
            } //*
            else {obj[prop] = val;} //*
        }
    }
    return obj;
}