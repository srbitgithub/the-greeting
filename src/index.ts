export class Greeting {
  receivedName:string = ''
  result:string = ''

  constructor(_receivedName?:string){
    if (_receivedName) this.receivedName = _receivedName
    else this.receivedName = 'my friend'
    this.main()
  }
  main(){
    this.result = `Hello ${this.receivedName}`
  }
};
  