"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classeAnimal_1 = __importDefault(require("./classeAnimal"));
const tucano = new classeAnimal_1.default("1kg", "70cm");
console.log(tucano.peso);
console.log(tucano.altura);

