type car = {
    manufacture : string
    model : string
    [key : string]:any;
}
function createcar(manufacture : string , model: String , optional: Record<string, any>):
car{
    return{
        manufacture,
        model,
        ...optional
    }
}
let mycar: car = createcar("toyota","bmw",{color: "grey", year: "2024"})
console.log(mycar);