const baseURL = process.env.REACT_APP_BASE_URL;

const getData = async (URL = "") => {
  const result = await fetch(`${baseURL}/${URL}`);
  const elephantData = await result.json();
  const { data } = elephantData;

  return data;
};
export default getData;
