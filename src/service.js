import axios from "axios";

const queryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};
// https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}
// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=eaf56fd1&app_key=1065767d1fdecd02cca3d707cb9e2dab

export const fetchData = async (query) => {
  const { app_id, app_key } = queryStrings;
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=eaf56fd1&app_key=1065767d1fdecd02cca3d707cb9e2dab`
    );

    return response.data;
  } catch (e) {
    console.log(e, "something went wrong");
    return e;
  }
};
