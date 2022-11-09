import {URL} from "../constants.js";
export async function getData( callback) {
    try {
      await fetch(URL)
        .then((response) => {return response.json()})
        .then (newdata1=> newdata1.data)
        .then ((data)=>{callback(data)})     
  }
     catch (error) {
      console.log(error)
  }}