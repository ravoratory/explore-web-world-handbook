# for文,if文
## for文
ある処理を繰り返し行いたいとき、for文というものを使うと便利です。

例えば、あるリストの中身を1つずつ表示したい時は
```python
for x in [1, 2, 3]:
    print(x)
```
と書くとできます。こういったリスト（や文字列）を返すもの（返す内容ではなく！）をイテレータ(iterator)と呼び、イテレータが呼び出せるようなものをイテラブル(iterable)であると呼びます。

## if文
条件分岐をしたいときは、if文を使います。条件に一致しない時の処理は`else`を使います。
`if`の後ろに書かれる式を条件式と呼びます。条件式はbool型の戻り値がある式です。以下に一般的な条件式の例を挙げます。

- `a`は`b`と等しい `a == b`
- `a`は`b`と等しくない `a != b`
- `a`は`b`よりも大きい`a > b`
- `a`は`b`よりも小さい`a < b`
- `a`は`b`以上である`a >= b`
- `a`は`b`以下である`a <= b`

```python
a = 1
if a < 2:
    print("a is less than 2")
else:
    print("a is not less than 2")
```
複数の条件分岐をしたいときは`elif`を使います。
```python
a = 2
if a < 2:
    print("a is less than 2")
elif a > 2:
    print("a is greater than 2")
else:
    print("a is 2")
```
2つ以上の条件のうち、ある1つだけを満たしていればいいときは各条件式を`or`で繋げます。
```python
if a > 2 or a < 2:
    print("a is less than 2 or greater than 2")
```
2つ以上の条件すべてを満たして欲しいときは各条件式を`and`で繋げます。
```python
a = 2
if a > 0 and a < 10:
    print("a is between 0 and 10")
```
ある条件ではないことを要求したい時は`not`をつけます。
```python
if not a == 2:
    print("a is not 2")
```

## 演習
1. 割り算の余りを計算する演算(aをbで割った余り)は`a % b`で表すことができます。ある`a`が3で割れるかどうか判断するプログラムを作ってみましょう。
::: details 答え
一例
```python
a = 2
if a % 3 == 0:
    print("aは3で割り切れます")
else:
    print("aは3で割り切れません")
```
:::
2. `range(start, end, step)`という関数を使うことで数列を作ることができます。たとえば、以下の3つはfor文で呼び出した時同じ挙動をします。
```
a = [0, 1, 2, 3, 4]
b = range(0, 5)
c = range(5)
```
では`range()`を用いて1から20までカウントするプログラムを作ってみましょう。

::: details 答え
```python
for i in range(1, 21):
    print(i)
```
:::

3. (チャレンジ!) 海外の遊びにFizzBuzzというものがあります。簡単に説明すると
- 数が3の倍数の時`Fizz`という。
- 数が5の倍数の時`Buzz`という。
- 数が3の倍数かつ5の倍数の時`FizzBuzz`という。
- 以上のどれでもないときは数そのものをいう。

例: 1~5までなら  
1, 2, Fizz, 4, Buzz

というルールです。1〜30までこのFizzBuzzゲームをするプログラムを作ってみましょう。
if文の条件分岐やrange()の終端に気をつけながら作りましょう。
::: tip こぼれ話
FizzBuzz問題はエンジニアの試験で有名な問題です。
これを自力でクリアできるとそこそこの自信がつくと思います。
:::
::: details 答え
一例
```python
for x in range(1, 31):
    if x % 3 == 0 and x % 5 == 0:
        print("FizzBuzz")
    elif x % 3 == 0:
        print("Fizz")
    elif x % 5 == 0:
        print("Buzz")
    else:
        print(x)
```
