import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharacterCollection } from "./CharacterCollections"
import { LinkedList } from "./LinkedList"
// const charList = new CharacterCollection("Xaayb")
// const sorterForChars = new Sorter(charList)
// sorterForChars.sort()
// console.log(charList.data)

// const numberList = new NumbersCollection([4, -3, 10, 2])
// const sorterForNumbers = new Sorter(numberList)
// sorterForNumbers.sort()
// console.log(numberList.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(5)
linkedList.add(-3)
linkedList.add(4)

const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()
