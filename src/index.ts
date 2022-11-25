import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharacterCollection } from "./CharacterCollections"

const charList = new CharacterCollection("Xaaaa")
const sorterForChars = new Sorter(charList)
sorterForChars.sort()
console.log(charList.data)

const numberList = new NumbersCollection([4, -3, 10, 2])
const sorterForNumbers = new Sorter(numberList)
sorterForNumbers.sort()
console.log(numberList.data)
