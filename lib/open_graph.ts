// import og from "open-graph-scraper";
export const fetchOpenGraph = async (url: string): Promise<string> => {
  const response = await (await fetch(url)).text();
  return response;
  // const response = await og({ url: url });
  // console.log(response);
  // return response.result;
};
