const helper = require("../src/helper");

describe("test helper", () => {
  test("should return empty array", () => {
    const TEST_CARDS = [];
    const labelResults = helper.summarizeLabels(TEST_CARDS);
    expect(labelResults).toEqual([]);
  });

  test("should return a label & count is 1", () => {
    const TEST_CARDS = [
      {
        id: "testtask",
        name: "wonderful task",
        labels: [
          {
            id: "djsafjseifajiefheifew",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト",
            color: "red"
          }
        ]
      }
    ];
    const labelResults = helper.summarizeLabels(TEST_CARDS);
    expect(labelResults).toEqual([{ name: "テスト", count: 1 }]);
  });

  test("should return 2 labels & count each labels", () => {
    const TEST_CARDS = [
      {
        id: "testtask",
        name: "wonderful task",
        labels: [
          {
            id: "djsafjseifajiefheifew",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト",
            color: "red"
          },
          {
            id: "4918073481274987134",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト２",
            color: "blue"
          }
        ]
      }
    ];
    const labelResults = helper.summarizeLabels(TEST_CARDS);
    const expectedResult = [
      { name: "テスト", count: 1 },
      { name: "テスト２", count: 1 }
    ];
    expect(labelResults).toEqual(expectedResult);
  });

  test("should return 2 label when 2 cards", () => {
    const TEST_CARDS = [
      {
        id: "testtask",
        name: "wonderful task",
        labels: [
          {
            id: "djsafjseifajiefheifew",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト",
            color: "red"
          }
        ]
      },
      {
        id: "cardcardcard",
        name: "good job :)",
        labels: [
          {
            id: "djsafjseifajiefheifew",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト",
            color: "red"
          },
          {
            id: "nueqiowfoweofba",
            idBoard: "h412h4j23rh3kb23rh",
            name: "テスト２",
            color: "green"
          }
        ]
      }
    ];
    const labelResults = helper.summarizeLabels(TEST_CARDS);
    const expectedResult = [
      { name: "テスト", count: 2 },
      { name: "テスト２", count: 1 }
    ];
    expect(labelResults).toEqual(expectedResult);
  });
});
