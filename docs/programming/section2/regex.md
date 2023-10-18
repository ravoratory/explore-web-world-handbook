# 正規表現

プログラミングというわけではないのですが、正規表現(Regular Expression)について学習しておきましょう。

正規表現とは、ある文字列に一致するようなパターンを表す文字列のことです。

- `.`: 任意の1文字を表します。
- `^`: 行頭を表します。
- `$`: 行末を表します。
- `()`: 特定のパターンの集合を表します。
- `[]`: 囲まれたうちのいずれかに一致することを表します。
  - `[0-9]`で数字を表します。
  - `[A-Z]`でアルファベットの大文字を表します。
  - `[a-z]`でアルファベットの小文字を表します。
- `|`: `A|B`でAまたはBを表します。
- `*`: あるパターンの0回以上の繰り返しを表します。
- `+`: あるパターンの1回以上の繰り返しを表します。
- `?`: あるパターンの0回または1回の繰り返しを表します。
- `{n}`: n回の繰り返しを表します。
- `\`メタ文字(`.`や`?`など)を指定したい際に使います。

## 演習

[正規表現チェッカー](https://weblabo.oscasierra.net/tools/regex/)を使います。

1. 郵便番号の正規表現を書いてみましょう。
::: details 答え
`^[0-9]{3}-[0-9]{4}$`
:::
2. YAMLドキュメントは.yamlまたは.ymlという拡張子をしています。これを正規表現で書いてみましょう。
::: details 答え
`\.ya?ml$`, `\.(yaml|yml)$`など
:::
::: warning
正規表現に似たものとしてワイルドカードというものがありますが、`*`単体で正規表現でいう`.*`に相当します。間違えないように注意しましょう。
:::

## 参考
- [正規表現](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions)