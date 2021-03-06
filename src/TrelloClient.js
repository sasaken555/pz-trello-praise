("use strict");

const axios = require("axios");
const qs = require("querystring");

/**
 * Trelloのカードを操作する.
 */
class TrelloClient {
  constructor(params) {
    this.baseUrl = params.TRELLO_URL || "https://api.trello.com/1";
    this.apiKey = params.TRELLO_API_KEY || "API KEY";
    this.token = params.TRELLO_TOKEN || "TOKEN";
    this.listId = params.TRELLO_LIST || "LIST_ID";
  }

  /**
   * 完了済みタスクの一覧を取得する.
   * @param {String} listId 完了リストのID
   * @returns {Promise} 完了済みタスクのJSON配列
   */
  getCompletedTasks() {
    const reqParams = qs.stringify({
      key: this.apiKey,
      token: this.token,
      fields: "id,name,labels"
    });
    const TRELLO_URL_GET_COMPLETED_TASKS = `${this.baseUrl}/lists/${
      this.listId
    }/cards?${reqParams}`;
    return axios.get(TRELLO_URL_GET_COMPLETED_TASKS).then(response => {
      return response.data || {};
    });
  }
}

module.exports = TrelloClient;
