import { NumbersCollection } from "./NumbersCollection"
import { CharacterCollection } from "./CharacterCollections"
import { LinkedList } from "./LinkedList"

const numberList = new NumbersCollection([4, -3, 10, 2])
numberList.sort()
console.log(numberList.data)

const characters = new CharacterCollection("sadqwe")
characters.sort()
console.log(characters.data)

const linkedList = new LinkedList()
linkedList.add(5)
linkedList.add(2)
linkedList.add(3)
linkedList.sort()
linkedList.print()
