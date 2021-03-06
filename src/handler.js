("use strict");

const TrelloClient = require("./TrelloClient");
const helper = require("./helper");

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
      .then(tasks => resolve(createResponse(tasks)))
      .catch(err => {
        console.log(err);
      });
  });
}

/**
 * レスポンスを生成する.
 * @param {Array} tasks Trelloの完了済みタスク配列
 * @returns {Object} レスポンスオブジェクト
 */
function createResponse(tasks) {
  let responseText = "";
  // 全体件数
  responseText += "Good Job!! Here is your completed tasks in this week.";
  responseText += `\n*[Total]*`;
  responseText += `\n> Number of Completed Tasks : ${tasks.length || 0}`;

  // ラベルごと件数
  // カードの重複含むラベルごと件数の総和は全体件数と一致しない
  const labels = helper.summarizeLabels(tasks);
  if (labels.length > 0) {
    responseText += `\n*[Labels]*`;
    labels.map(label => {
      responseText += `\n> ${label.name} : ${label.count}tasks`;
    });
  }

  return { text: responseText };
}

exports.main = main;
