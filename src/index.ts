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
    const lowerCaseStrings:string[] = []
    const upperCaseStrings:string[] = []

    if (this.receivedArrayNames.length === 1)
      this.result = `Hello ${this.receivedArrayNames[0]}`
    if (this.receivedArrayNames.length > 1) this.separateByUpperCaseAndLowerCase()
    if (this.receivedArrayNames.length > 0 && this.receivedArrayNames[0] === this.receivedArrayNames[0].toUpperCase())
      this.result = this.result.toUpperCase()
  }

  textToReturnLowerCase(arrayNames:string[]):string{
    //console.log(arrayNames)
    let item:string = ''
    let variousItems: string[] = []
    let textToReturn:string = "Hello"
    for (let i:number = 0; i < arrayNames.length - 1; i++){
      //item = arrayNames[i]
      //console.log('item: ' + item)
      textToReturn = textToReturn + ", " + arrayNames[i]
    }
    textToReturn = textToReturn + " and " + arrayNames[arrayNames.length - 1]
    return textToReturn
  }

  textToReturnUpperCase(arrayNames:string[]):string{
    let textToReturn:string = ". AND HELLO"
    for (let i:number = 0; i < arrayNames.length - 1; i++){
      textToReturn = textToReturn + ", " + arrayNames[i]
    }
    if (arrayNames.length == 1) textToReturn = textToReturn + " " + arrayNames[arrayNames.length - 1]
    if (arrayNames.length > 1) textToReturn = textToReturn + " AND " + arrayNames[arrayNames.length - 1]

    return textToReturn
  }

  separateByUpperCaseAndLowerCase(){
    let IS_UPPERCASE:boolean = true
    let IS_LOWERCASE:boolean = false
    let continueProgram:boolean = true

    const lowerCaseStrings:string[] = []
    const upperCaseStrings:string[] = []

    let textToSetInResult:string = ''

    let multipleNames:string[] = []

    this.receivedArrayNames.forEach(item => {
      if (item.includes(',')){
        multipleNames = item.split(',')
        multipleNames.forEach(element => {
          if (element.substring(0,1) === " ") element = element.substring(1)
          if (element === element.toUpperCase()) upperCaseStrings.push(element)
          else lowerCaseStrings.push(element)
        });
        continueProgram = false
      }
      if (continueProgram)
      {
        if (item === item.toUpperCase()) upperCaseStrings.push(item)
        else lowerCaseStrings.push(item)
      }
      continueProgram = true
    });
    if (lowerCaseStrings.length > 0) textToSetInResult = textToSetInResult + this.textToReturnLowerCase(lowerCaseStrings)
    if (upperCaseStrings.length > 0) textToSetInResult = textToSetInResult + this.textToReturnUpperCase(upperCaseStrings)

    this.result = textToSetInResult
  }
}

