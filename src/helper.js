/**
 * Trelloカードのラベル/件数サマリーを導出する.
 * @param {Array} cards Trelloカードの配列
 * @returns {String} labelResults.name ラベル名
 * @returns {Number} labelResults.count ラベル件数
 */
function summarizeLabels(cards) {
  // 全てのラベルを重複込みで配列に入れる
  const labelLists = cards.map(card => {
    return card.labels.map(label => label.name);
  });
  // 配列内のラベル一覧を取り出す
  const labelSet = new Set(labelLists);
  console.log(labelSet);
  // ラベルごとの件数を配列とラベル一覧から計算
  let labelResults = [];
  for (let targetLabel of labelSet) {
    const labelCount =
      labelLists.filter(cardLabel => cardLabel == targetLabel).length || 0;
    labelResults.push({ name: label, count: labelCount });
  }
  console.log(labelResults);
  // labelResults = [
  //   { name: "aaa", count: 1 },
  //   { name: "bbb", count: 2 },
  //   { name: "ccc", count: 3 }
  // ];
  return labelResults;
}

module.export = {
  summarizeLabels
};
