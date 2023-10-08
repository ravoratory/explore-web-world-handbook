const programmingSidebarItems = [
  {
    text: "はじめに",
    link: "/programming/",
  },
  {
    text: "準備編",
    link: "/programming/ready-for-programming",
  },
  {
    text: "Section1",
    link: "/programming/section1/",
    collapsed: true,
    items: [
      {
        text: "変数と型",
        link: "/programming/section1/value-and-type",
      },
      {
        text: "標準入出力",
        link: "/programming/section1/stdio",
      },
      {
        text: "演算",
        link: "/programming/section1/calc",
      },
      {
        text: "関数その1",
        link: "/programming/section1/function",
      },
      {
        text: "関数その2",
        link: "/programming/section1/function2",
      },
      {
        text: "配列",
        link: "/programming/section1/array",
      },
      {
        text: "for文、if文",
        link: "/programming/section1/for-if",
      },
      {
        text: "クラス",
        link: "/programming/section1/class",
      },
      {
        text: "モジュール",
        link: "/programming/section1/module",
      },
      {
        text: "おわりに",
        link: "/programming/section1/end",
      },
    ],
  },
  {
    text: "Section2",
    link: "/programming/section2/",
    collapsed: true,
    items: [
      {
        text: "スタックとキュー",
        link: "/programming/section2/stack-queue",
      },
      {
        text: "タプル",
        link: "/programming/section2/tuple",
      },
      {
        text: "ディクショナリ",
        link: "/programming/section2/dict",
      },
      {
        text: "正規表現",
        link: "/programming/section2/regex"
      },
      {
        text: "おわりに",
        link: "/programming/section2/end",
      },
    ],
  },
  {
    text: "Section3",
    collapsed: true,
    link: "/programming/section3/",
    items: [
      {
        text: "変数名",
        link: "/programming/section3/naming"
      },
      {
        text: "コメント",
        link: "/programming/section3/comment"
      },
      {
        text: "原則",
        link: "/programming/section3/principle"
      },
      {
        text: "テクニック",
        link: "/programming/section3/technic"
      },
      {
        text: "おわりに",
        link: "/programming/section3/books",
      },
    ],
  },
];

export default programmingSidebarItems;