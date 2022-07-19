import validator from "validator";

export const validateMobile = (number: string) =>
  validator.isMobilePhone(number, "fa-IR");
