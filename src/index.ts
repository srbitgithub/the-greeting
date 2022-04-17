export class Greeting {
  receivedArrayNames:string[] = []
  result:string = ''
  lowerCaseStrings:string[] = []
  upperCaseStrings:string[] = []


  AND_LOWERCASE:string = ' and '
  AND_UPPERCASE:string = ' AND '
  SPACE:string = ' '
  COMMA:string =','
  COMMA_AND_SPACE:string = ', '
  ZERO:number = 0
  ONE:number = 1

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
      this.result = `Hello ${this.receivedArrayNames[this.ZERO]}`

    if (this.receivedArrayNames.length > this.ONE) this.separateByUpperCaseAndLowerCase()

    if (this.receivedArrayNames.length > this.ZERO &&
      this.receivedArrayNames[this.ZERO] === this.receivedArrayNames[this.ZERO].toUpperCase())
      this.result = this.result.toUpperCase()
  }

  textToReturnLowerCase(arrayNames:string[]):string{
    let textToReturn:string = "Hello"
    for (let i:number = 0; i < arrayNames.length - 1; i++){
      textToReturn = textToReturn + this.COMMA_AND_SPACE + arrayNames[i]
    }
    textToReturn = textToReturn + this.AND_LOWERCASE + arrayNames[arrayNames.length - 1]
    return textToReturn
  }

  textToReturnUpperCase(arrayNames:string[]):string{
    let textToReturn:string = ". AND HELLO"
    for (let i:number = 0; i < arrayNames.length - 1; i++){
      textToReturn = textToReturn + this.COMMA_AND_SPACE + arrayNames[i]
    }
    if (arrayNames.length == this.ONE) textToReturn = textToReturn + this.SPACE + arrayNames[arrayNames.length - 1]
    if (arrayNames.length > this.ONE) textToReturn = textToReturn + this.AND_UPPERCASE + arrayNames[arrayNames.length - 1]

    return textToReturn
  }

  stringWithComma(stringToAnalize:string){

    let multipleNames:string[] = []
    multipleNames = stringToAnalize.split(this.COMMA)
    multipleNames.forEach(element => {
      if (element.substring(0,1) === this.SPACE) element = element.substring(this.ONE)
      if (element === element.toUpperCase()) this.upperCaseStrings.push(element)
      else this.lowerCaseStrings.push(element)
    })
    console.log('lowerCaseStrings: ' + this.lowerCaseStrings)
  }

  separateByUpperCaseAndLowerCase(){
    let continueProgram:boolean = true
    let textToSetInResult:string = ''

    this.receivedArrayNames.forEach(item => {
      if (item.includes(this.COMMA)){
        this.stringWithComma(item)
        continueProgram = false
      }
      if (continueProgram)
      {
        if (item === item.toUpperCase()) this.upperCaseStrings.push(item)
        else this.lowerCaseStrings.push(item)
      }
      continueProgram = true
    });
    if (this.lowerCaseStrings.length > this.ZERO) textToSetInResult = textToSetInResult + this.textToReturnLowerCase(this.lowerCaseStrings)
    if (this.upperCaseStrings.length > this.ZERO) textToSetInResult = textToSetInResult + this.textToReturnUpperCase(this.upperCaseStrings)

    this.result = textToSetInResult
  }
}
