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
//@ts-ignore
const xlsx_to_json_1 = __importDefault(require("xlsx-to-json"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const models_1 = require("../src/models");
const convertXlsxToJson = (filepath, name) => {
    (0, xlsx_to_json_1.default)({
        input: filepath,
        output: path_1.default.join(__dirname, name + ".json"),
    }, function (err, result) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(result);
        }
    });
};
// convertXlsxToJson(path.join(__dirname, "tblChurches.xlsx"), "churches");
// convertXlsxToJson(path.join(__dirname, "Conventions.xlsx"), "conventions");
// convertXlsxToJson(path.join(__dirname, "Delegates.xlsx"), "delegates");
const uploadChurchDataToDb = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //read file
        const file = fs_1.default.readFileSync(filepath, "utf-8");
        //parse file
        const parsedFile = JSON.parse(file);
        parsedFile.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, city, state, email, phone } = item;
            const address = city + ", " + state;
            const newChurch = yield models_1.Church.create({
                name,
                address,
                city,
                state,
                // email,
                phone,
            });
            //   console.log(item);
            console.log(newChurch === null || newChurch === void 0 ? void 0 : newChurch.toJSON());
        }));
    }
    catch (error) {
        console.log(error);
    }
});
// uploadChurchDataToDb(path.join(__dirname, "churches.json"));
const uploadDelegateDataToDb = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = fs_1.default.readFileSync(filepath, "utf-8");
        const parsedFile = JSON.parse(file);
        parsedFile.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
            const { surname, firstname, middlename, phone, address, age_group } = item;
            const gender = item.gender.toLocaleUpperCase() == "M"
                ? "male"
                : item.gender.toLocaleUpperCase() == "F"
                    ? "female"
                    : "other";
            const newDelegate = yield models_1.Delegate.create({
                surname,
                firstname,
                middlename,
                phone,
                address,
                // city,
                gender,
                age_group,
            });
            console.log(newDelegate === null || newDelegate === void 0 ? void 0 : newDelegate.toJSON());
        }));
    }
    catch (error) {
        console.log(error);
    }
});
// uploadDelegateDataToDb(path.join(__dirname, "delegates.json"));
