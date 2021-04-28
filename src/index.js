import { getEmpInfo } from "./es6test";

const employee = {
  name: "Kautilya",
  dob: "2015-09-12",
  gender: "male",
};

const address = {
  city: "Munich",
  country: "Germany",
};
const occupation = {
  profession: "engineer",
  location: "berlin",
};

const emp = getEmpInfo(employee, address, occupation);

console.log(emp);
