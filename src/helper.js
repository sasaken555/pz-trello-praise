const _ = require("lodash");

/**
 * 名称ごとの出現数を集計する.
 * @param {Object} stat 集計値
 * @param {String} name 集計キー ... 配列内の個々の値が入る
 */
const gatherNames = (stat, name) => {
  if (_.isUndefined(stat[name])) {
    stat[name] = { name: name, count: 0 };
  }
  stat[name].count++;
  return stat;
};

/**
 * Trelloカードのラベル/件数サマリーを導出する.
 * @param {Array} cards Trelloカードの配列
 * @returns {String} labelResults.name ラベル名
 * @returns {Number} labelResults.count ラベル件数
 */
function summarizeLabels(cards) {
  // 全てのラベルを重複込みで配列に入れる
  let labelResults = _.chain(cards)
    .flatMap(_.property("labels")) // ... (1)
    .map(label => label.name)
    .reduce(gatherNames, {}) // ... (2)/(3)
    .values()
    .value(); // ... これを呼び出して初めて上記の関数チェーンが実行される
  return labelResults;
}

module.exports = {
  summarizeLabels
};
