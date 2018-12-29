("use strict");

const TrelloClient = require("./TrelloClient");

/**
 * 実行エントリーポイント
 * @param {String} params.TRELLO_URL TrelloのベースURL
 * @param {String} params.TRELLO_API_KEY TrelloのAPI Key
 * @param {String} params.TRELLO_TOKEN Trelloの認証トークン
 * @param {String} params.TRELLO_LIST TrelloのリストID
 */
function main(params) {
  return new Promise((resolve, reject) => {
    // Trelloから完了済みのカード一覧を取得
    const trelloClient = new TrelloClient(params);
    trelloClient
      .getCompletedTasks()
      .then(response => {
        // 結果のリストから件数算出
        const complatedNum = response.length || 0;
        resolve({ text: `Number of Completed Tasks : ${complatedNum}` });
      })
      .catch(err => {
        console.log(err);
      });
  });
}

exports.main = main;
