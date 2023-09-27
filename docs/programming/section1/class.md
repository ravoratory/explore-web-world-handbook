# クラス

クラス(class)は式や関数の集合体です。クラスは新しい型になることができます。過去に`type()`関数で文字列の型を確認したときに`<class 'str'>`とついていたと思いますが、文字列型というのは(Pythonでは)クラスで定義されています。

一般にクラスを用いて作成された変数をインスタンスと呼び、クラスで定義されている変数を（インスタンスの）プロパティ（Pythonでは単に変数）、関数を（インスタンスの）メソッドと呼びます。

```python
class Dog:
    name = "Pochi"
    def bark(self):
        print("wan!")

d = Dog()
print(type(a), d.name)
d.bark()
```

上のコードでは犬の名前を"Pochi"と決めつけていますが、そうじゃない家庭の方が圧倒的に多いです。nameをインスタンス作成時に決められるようにしたいですね。
実はインスタンス作成時に`__init__()`メソッドがあれば呼び出されます。なので`__init__`メソッドを定義してみましょう。自分自身を指すとき、Pythonでは`self`を使います。

```python
class Dog:
    def __init__(self, name):
        self.name = name

d = Dog("Goro")
print(d.name)
```

## 継承
継承なくしてクラスは語れません。クラスはあるクラスのプロパティやメソッドを引き継いで自分のものにすることができます。これを継承と呼びます。継承元のクラスをスーパークラス、継承先のクラスをサブクラスと呼びます。
```python
class Super:
    name = "class"
class Sub(Super):
    pass

s = Sub()
print(s.name)
```
しれっと出ていますが`pass`は「なにもしない」を表す式です。覚えておいてください。
## 演習
クラス`Animal`を定義します。

- インスタンス変数に`name`,インスタンスメソッドに`bark()`を定義してください。名前はインスタンス作成時に定義できるようにしてください。`bark()`は呼び出してもなにも起こらないようにしてください。
- Animalクラスのサブクラス`Dog`と`Cat`を定義してください。`bark()`は`Dog`なら`wan!`,`Cat`なら`nya-!`が出力されるようにしてください。

定義した`Dog`クラスと`Cat`クラスのインスタンスを作成し、`bark()`メソッドや`name`プロパティが正常に定義されていることを確認しましょう。


::: details 答え
```python
class Animal:
    def __init__(self, name):
        self.name = name
    def bark(self):
        pass

class Dog(Animal):
    def bark(self):
        print("wan!")

class Cat(Animal):
    def bark(self):
        print("nya-!")

d = Dog("pochi")
c = Cat("tama")
print(d.name, c.name)
d.bark()
c.bark()
```
:::
