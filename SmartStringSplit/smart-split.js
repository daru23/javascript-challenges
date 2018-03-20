let string = "{{{{{daniela{ruiz}{tiffany}kenetemann{this}is{a}{test}}}}";

console.log(string);

let words = [].concat.apply([], (string.split("{")).map((x, i) => {

    let last = x.slice(-1);

    if (last === "}")
        return [{"value" : x.slice(0, -1), "type" : "datafield"}];

    let w = (x.split("}")).filter(z => z !== '' );
    if (w.length === 1){
        return [{"value" : w[0], "type" : "text"}];
    }

    if (w.length !== 0)
        return [{"value" : w[0], "type" : "datafield"}, {"value" : w[1], "type" : "text"}];

    return []

}));

console.log(words);