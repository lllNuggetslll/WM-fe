export const getParams = (param, location) => {
  const searchParams = new URLSearchParams(location);

  return searchParams.get(param) || "";
};

export const setParams = ({ param, query = "", location }) => {
  const searchParams = new URLSearchParams(location);

  searchParams.append(param, query);

  return searchParams.toString();
};

export const deleteParams = ({ param, location }) => {
  const searchParams = new URLSearchParams(location);

  searchParams.delete(param);

  return searchParams.toString();
};
