function sandwich(...items: string[]): void{
    console.log("sandwich order:");
    for ( let i = 0 ; i < items.length; i++){
        console.log(` ${items[i]}`);
        
    }
    
}
console.log("enjoy your sandwich rafay");
sandwich("capsicum","tomato","chiken")
sandwich("beef","chiken")
sandwich("mayo sauce", " capsicum")
