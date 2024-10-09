"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seed;
const user_json_1 = __importDefault(require("../user.json"));
const model_1 = __importDefault(require("./models/model"));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield model_1.default.deleteMany();
            yield model_1.default.insertMany(user_json_1.default);
            console.log("dataInserted");
        }
        catch (error) {
            console.log(error);
        }
    });
}
