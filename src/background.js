chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const [baseUrl, queryString] = details.url.split("?");

    const queryParams = new URLSearchParams(queryString);
    queryParams.set("curr", "USD");

    return {
      redirectUrl: baseUrl + "?" + queryParams.toString(),
    };
  },
  {
    urls: [
      "*://google.com/travel/flights*",
      "*://www.google.com/travel/flights*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
