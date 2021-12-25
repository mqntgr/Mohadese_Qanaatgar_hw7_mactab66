function subject(className , classUnit , classCapacity) {
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity
    this.getfullcourse = function() {
        console.log(`{className:${this.className},classunit:${this.classUnit},classCapacity:${this.classCapacity}}`)
    }
}
const soft = new subject("softEngineering",3,50)
soft.book = "data"
soft.getfullcourse()
console.log(soft)
const network = new subject("network",3,30)
network.project = true
network.getfullcourse()
console.log(network)