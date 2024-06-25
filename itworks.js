const http = require("http");

const url = "http://127.0.0.1:3000/health_article/health.json";

http.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    try {
      const json = JSON.parse(data);
      console.log(JSON.stringify(json, null, 2)); 
    } catch (error) {
      console.log(error);
    }
  });
});
