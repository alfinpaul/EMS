import commonAPI from "./CommonApi";
import { ServerUrl } from "./ServerUrl";

/* ===================== AUTH ===================== */

// LOGIN
export const loginAPI = async (reqBody) => {
  try {
    const response = await commonAPI("POST", `${ServerUrl}/users/login`, reqBody);
    return {
      success: true,
      data: response.data,
      message: "Login successful"
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
      data: null
    };
  }
};

// REGISTER
export const registerAPI = async (reqBody) => {
  try {
    const response = await commonAPI("POST", `${ServerUrl}/users/register`, reqBody);
    return {
      success: true,
      data: response.data,
      message: "Registration successful"
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
      data: null
    };
  }
};


export const getEmployeesAPI = async () => {
  return await commonAPI("GET", `${ServerUrl}/employees`);
};

export const addEmployeeAPI = async (reqBody) => {
  return await commonAPI("POST", `${ServerUrl}/employees`, reqBody);
};

export const updateEmployeeAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${ServerUrl}/employees/${id}`, reqBody);
};

export const deleteEmployeeAPI = async (id) => {
  return await commonAPI("DELETE", `${ServerUrl}/employees/${id}`);
};