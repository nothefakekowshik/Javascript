import e from "express";
import {adder,subtractor} from "./export_demo.js";

console.log(adder(1,2));
console.log(subtractor(2,1));

import exp from "./exportDefault.js";

exp()