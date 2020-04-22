import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const getData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeableUrl);
  return { confirmed, recovered, deaths, lastUpdate };
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(`${url}/daily`);
  const modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    reportDate: dailyData.reportDate,
  }));
  return modifiedData;
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);

  return countries.map((country) => country.name);
};
