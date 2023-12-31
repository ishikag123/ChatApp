import React from "react";
import axios from "axios";

export const newConvo = async (data) => {
  try {
    let res = await axios.post("http://localhost:5000/conversation/add", data);
    return res.data;
  } catch (error) {
    console.log("error in newConvo API", error.message);
  }
};
export const getConvo = async (data) => {
  try {
    let res = await axios.get("http://localhost:5000/conversation/get", data);
    return res.data;
  } catch (error) {
    console.log("error in getConvo API", error.message);
  }
};

export const getConvos = async (data) => {
  try {
    let res = await axios.post("http://localhost:5000/conversation/get", data);
    return res.data;
  } catch (error) {
    console.log("error in getConvo API", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post("http://localhost:5000/message/add", data);
    return response.data;
  } catch (error) {
    console.log("error in newMessage API", error.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`http://localhost:5000/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while getMessage API", error.message);
  }
};
