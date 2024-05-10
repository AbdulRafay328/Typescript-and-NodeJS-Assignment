function makeshirt (size: string , text: string = " i like small shirts"): void{
    console.log(`you ordered a ${size} shirt that says ${text}`);
}
makeshirt("large")
makeshirt("medium")
makeshirt("small", " i need a big shirt to wear")