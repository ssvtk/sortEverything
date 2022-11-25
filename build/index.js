"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollectio_1 = require("./NumbersCollectio");
const numbersCol = new NumbersCollectio_1.NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter_1.Sorter(numbersCol);
sorter.sort();
console.log(numbersCol.data);
