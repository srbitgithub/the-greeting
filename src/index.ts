interface StringArgument {
  name:string
}

interface StringArray {
  name:string[]
}

export class Greeting {
  receivedName:string = ''
  receivedArrayNames:string[] = []
  result:string = ''

  constructor(_receivedName?:any){
    if (!_receivedName) this.receivedArrayNames = ['my friend']
    if (_receivedName && (typeof _receivedName === 'string'))
      this.receivedArrayNames = [_receivedName]
    if (_receivedName && (Array.isArray(_receivedName)))
      this.receivedArrayNames = _receivedName
     
    this.main()
  }
  
  main(){
    if (this.receivedArrayNames.length === 1)
      this.result = `Hello ${this.receivedArrayNames[0]}`
    if (this.receivedArrayNames.length === 2) 
      this.result = `Hello ${this.receivedArrayNames[0]} and ${this.receivedArrayNames[1]}`
    if (this.receivedArrayNames.length > 0 && this.receivedArrayNames[0] === this.receivedArrayNames[0].toUpperCase())
      this.result = this.result.toUpperCase()
  }
}
