<<<<<<< Updated upstream
import og from "open-graph-scraper";
export const fetchOpenGraph = async (url: string) => {
  const response = await og({ url: url });
  console.log(response);
  return response.result;
=======
import { OpenGraph } from "./types";

// import og from "open-graph-scraper";
export const fetchOpenGraph = async (
  url: string
): Promise<OpenGraph | null> => {
  let response: string = "";
  const requestInit: RequestInit = {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ url: url }),
  };
  //
  try {
    response = await (await fetch(url, requestInit)).text();
    console.log(response);
  } catch (err) {
    console.log(err);
    return null;
  }
  const openGraph = parseOpenGraph(response, url);
  return openGraph;
};

const querySelectors: OpenGraph = {
  image: 'meta[property="og:image"]',
  description: 'meta[property="og:description"]',
  title: 'meta[property="og:title"]',
  url: 'meta[property="og:url"]',
  type: 'meta[property="og:type"]',
};

///
export const parseOpenGraph = (data: string, url: string): OpenGraph => {
  const dom = new DOMParser().parseFromString(data, "text/html");
  const ogMap: OpenGraph = {
    title: `${dom.querySelector(`meta[property="og:title"]`)}`,
    url: `${dom.querySelector(`meta[property="og:url"]`)}`,
    description: `${dom.querySelector(`meta[property="og:description"]`)}`,
    image: `${dom.querySelector(`meta[property="og:image"]`)}`,
  };
  console.log(ogMap);
  return ogMap;
>>>>>>> Stashed changes
};
