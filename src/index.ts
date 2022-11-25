import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollectio"

const numbersCol = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(numbersCol)
sorter.sort()
console.log(numbersCol.data)
