import og from "open-graph-scraper";
export const fetchOpenGraph = async (url: string) => {
  const response = await og({ url: url });
  console.log(response);
  return response.result;
};
