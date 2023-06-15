//@ts-ignore
import xlsxjs from "xlsx-to-json";
import path from "path";
import fs from "fs";
import { Church, Delegate } from "../src/models";

const convertXlsxToJson = (filepath: string, name: string) => {
  xlsxjs(
    {
      input: filepath,
      output: path.join(__dirname, name + ".json"),
    },
    function (err: any, result: any) {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    }
  );
};

// convertXlsxToJson(path.join(__dirname, "tblChurches.xlsx"), "churches");
// convertXlsxToJson(path.join(__dirname, "Conventions.xlsx"), "conventions");
// convertXlsxToJson(path.join(__dirname, "Delegates.xlsx"), "delegates");

const uploadChurchDataToDb = async (filepath: string) => {
  try {
    //read file
    const file = fs.readFileSync(filepath, "utf-8");
    //parse file
    const parsedFile = JSON.parse(file);
    parsedFile.forEach(async (item: any) => {
      const { name, city, state, email, phone } = item;
      const address = city + ", " + state;
      const newChurch = await Church.create({
        name,
        address,
        city,
        state,
        // email,
        phone,
      });
      //   console.log(item);
      console.log(newChurch?.toJSON());
    });
  } catch (error) {
    console.log(error);
  }
};

// uploadChurchDataToDb(path.join(__dirname, "churches.json"));

const uploadDelegateDataToDb = async (filepath: string) => {
  try {
    const file = fs.readFileSync(filepath, "utf-8");
    const parsedFile = JSON.parse(file);
    parsedFile.forEach(async (item: any) => {
      const { surname, firstname, middlename, phone, address, age_group } =
        item;
      const gender =
        item.gender.toLocaleUpperCase() == "M"
          ? "male"
          : item.gender.toLocaleUpperCase() == "F"
          ? "female"
          : "other";

      const newDelegate = await Delegate.create({
        surname,
        firstname,
        middlename,
        phone,
        address,
        // city,
        gender,
        age_group,
      });
      console.log(newDelegate?.toJSON());
    });
  } catch (error) {
    console.log(error);
  }
};

// uploadDelegateDataToDb(path.join(__dirname, "delegates.json"));
