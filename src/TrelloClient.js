("use strict");

const axios = require("axios");
const qs = require("querystring");

/**
 * Trelloのカードを操作する.
 */
export default class TrelloClient {
  constructor(params) {
    this.baseUrl = params.TRELLO_URL || "https://api.trello.com/1";
    this.apiKey = params.TRELLO_API_KEY || "eb55e1ecb866812369556237f37b8b75";
    this.token =
      params.TRELLO_TOKEN ||
      "f3f17fa1292cffd861424a672f3cfa976c70502a187ecc4b18986786d6353b2b";
  }

  /**
   * 完了済みタスクの一覧を取得する.
   * @param {String} listId 完了リストのID
   * @returns {Promise} 完了済みタスクのJSON配列
   */
  getCompletedTasks(listId) {
    const reqParams = qs.stringify({
      key: this.apiKey,
      token: this.token,
      fields: "id,name,dateLastActivity,due,dueComplete"
    });
    const TRELLO_URL_GET_COMPLETED_TASKS = `${
      this.baseUrl
    }/lists/${listId}/cards?${reqParams}`;
    return axios.get(TRELLO_URL_GET_COMPLETED_TASKS).then(response => {
      return response.data || {};
    });
  }
}
