/**
 * Trelloカードのラベル/件数サマリーを導出する.
 * @param {Array} cards Trelloカードの配列
 * @returns {String} labelResults.name ラベル名
 * @returns {Number} labelResults.count ラベル件数
 */
function summarizeLabels(cards) {
  // 全てのラベルを重複込みで配列に入れる
  let labelLists = [];
  cards.map(card => {
    card.labels.forEach(label => labelLists.push(label.name));
  });
  // 配列内のラベル一覧を重複削除で取り出す
  const labelSet = new Set(labelLists);
  // ラベルごとの件数を配列とラベル一覧から導出
  let labelResults = [];
  for (let targetLabel of labelSet) {
    const labelCount =
      labelLists.filter(cardLabel => cardLabel == targetLabel).length || 0;
    labelResults.push({ name: targetLabel, count: labelCount });
  }
  return labelResults;
}

module.exports = {
  summarizeLabels
};
