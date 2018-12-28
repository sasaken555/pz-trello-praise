("use strict");

const axios = require("axios");
const qs = require("querystring");

function main(params) {
  return new Promise((resolve, reject) => {
    // Trelloから完了済みのカード一覧を取得
    getCompletedTasks()
      .then(response => {
        // 結果のリストから件数算出
        const complatedNum = response.length || 0;
        resolve({ text: `Number of Completed : ${complatedNum}` });
      })
      .catch(err => {
        console.log(err);
      });
  });
}

const getCompletedTasks = () => {
  const TRELLO_COMPLETED_CARDS_URL = process.env.TRELLO_URL || "Set URL";
  const TRELLO_API_KEY = process.env.TRELLO_API_KEY || "Set API Key";
  const TRELLO_TOKEN = process.env.TRELLO_TOKEN || "Set Token";
  const reqParams = qs.stringify({
    key: TRELLO_API_KEY,
    token: TRELLO_TOKEN,
    fields: "id,name,dateLastActivity,due,dueComplete"
  });
  return axios
    .get(`${TRELLO_COMPLETED_CARDS_URL}?${reqParams}`)
    .then(response => {
      return response.data || {};
    });
};

exports.main = main;
