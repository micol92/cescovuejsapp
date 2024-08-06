import axios from "axios";

const baseURL = "core_api_token_exchg/odata/v4/catalog";

const instance = axios.create({
  baseURL,
});

export const getTableData = async (params = { $top: 20, $skip: 0 }) => {
  const { data } = await instance.get("/Books", {
    params,
  });

  return data.d?.results || data.d || data.value;
};
