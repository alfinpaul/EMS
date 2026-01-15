
import commonAPI from "./CommonApi";
import { ServerUrl } from "./ServerUrl";

/* ===================== AUTH ===================== */

// LOGIN
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${ServerUrl}/users/login`, reqBody);
};

// REGISTER
export const registerAPI = async (reqBody) => {
  return await commonAPI("POST", `${ServerUrl}/users/register`, reqBody);
};

/* ===================== EMPLOYEES ===================== */

// GET ALL EMPLOYEES
export const getEmployeesAPI = async () => {
  return await commonAPI("GET", `${ServerUrl}/employees`);
};

// GET SINGLE EMPLOYEE
export const getEmployeeAPI = async (id) => {
  return await commonAPI("GET", `${ServerUrl}/employees/${id}`);
};

// ADD EMPLOYEE
export const addEmployeeAPI = async (reqBody) => {
  return await commonAPI("POST", `${ServerUrl}/employees`, reqBody);
};

// UPDATE EMPLOYEE
export const updateEmployeeAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${ServerUrl}/employees/${id}`, reqBody);
};

// DELETE EMPLOYEE
export const deleteEmployeeAPI = async (id) => {
  return await commonAPI("DELETE", `${ServerUrl}/employees/${id}`);
};
