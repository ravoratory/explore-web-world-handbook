# 関数その2

関数には、デフォルト引数を与えることで引数を渡さなくてもよくすることができます。デフォルト引数が与えられていない引数を必須引数というのに対しデフォルト引数が与えられている引数をオプション（オプショナル）引数といいます。

また、キーワード引数(keyword arguments)というものがあり、`key=value`の形で特定のオプション引数を渡すことができます。`**kwargs`のように先頭に`**`をつけると定義されていないオプション引数を渡すこともできます。

::: danger
デフォルト引数の扱いには注意が必要です。ミュータブルな値をデフォルト引数に与えると関数の呼び出しごとにその値が変わることがあります。
:::

```python
def greet(name, message=""):
    print("Hello! My name is " + name + ". " + message)

greet("hoge")
greet("fuga", message="nice to meet you.")
```


最終系は

```python
def function(arg1, *args, **kwargs):
    return
```

の形になります。特に`*args`,`**kwargs`は今後出会うことがあると思うので覚えておきましょう。

