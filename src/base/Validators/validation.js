export const requered = (value) =>{
    if(!value)
       return "Это поле обязательно";
    return undefined; 
}
export const maxLenghtCreate = (lengthNum) => (value="")=>{
    if(value.length > lengthNum)
    return `максимальная длинна ${lengthNum} символов`;
return undefined;
}
    