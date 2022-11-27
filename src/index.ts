import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharacterCollection } from "./CharacterCollections"
import { LinkedList } from "./LinkedList"

const numberList = new NumbersCollection([4, -3, 10, 2])
numberList.sort()
console.log(numberList.data)

const characters = new CharacterCollection("sadqwe")
characters.sort()
console.log(characters)