import axios from "axios";

axios.defaults.headers.post["x-api-key"] = "live_GQc6vsr3E61oBBuv80x95UJh0LJe2cG1LUWNi8RUSojfP7GqKlzSfvnSBhBkhMSj";
axios.defaults.headers.get["x-api-key"] = "live_GQc6vsr3E61oBBuv80x95UJh0LJe2cG1LUWNi8RUSojfP7GqKlzSfvnSBhBkhMSj";

export const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  Headers: {
    "x-api-key":
      "live_GQc6vsr3E61oBBuv80x95UJh0LJe2cG1LUWNi8RUSojfP7GqKlzSfvnSBhBkhMSj",
  },
});


