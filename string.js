const string = "neh%mahj%adwn&knado"
const newString = string.split("")
for(let n in newString){
    (newString[n]=='%'||newString[n]=='&')?newString[n]="0":null
}



console.log({
    slice1:string.slice(2,6),
    slice:string.slice(4),
    length:string.length,
    substring:string.substr(4),
    replace1: string.replace(/%/g,"@"),
    replace: string.replace(/a|h/g,"#"),
    lower:string.toLowerCase(),
    upper:string.toUpperCase(),
    trim:string.trim(),
    concate:string.concat(" ","concate"),
    split:string.split(""),
    join:newString.join("")
})