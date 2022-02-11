---
title: Wikipediaの JavaScriptに関する説明抜粋
date: "2021-02-06T23:39:00.000+09:00"
---

JavaScript（ジャバスクリプト）とは、プログラミング言語のひとつである。JavaScript はプロトタイプベースのオブジェクト指向スクリプト言語であるが、クラスなどのクラスベースに見られる機能も取り込んでいる。

利用される場面は Web サイト・Web アプリ・バックエンド・デスクトップアプリ・モバイルアプリなど、ブラウザからサーバ、デスクトップからスマートフォンまで多岐にわたっている。
Java と似た名称を持つが、異なるプログラミング言語である（#歴史を参照）。

（中略）

## 基本的な文法

JavaScript の変数は var, let および const キーワードを使用して宣言できる。

```javascript
var x // 変数xの宣言。値が未指定のため、特殊な値である undefined が入った状態となる。
var y = 2 // 変数yの宣言。同時に 2 が代入される。
```

上記例のスラッシュ 2 文字以降はコメントである。
JavaScript は言語仕様に I/O が組み込まれておらず、それらは実行環境により提供される。ECMAScript 5.1 の仕様では以下のように言及されている。

> この仕様の中では外部データの入力または計算結果の出力は供給しない。
>
> (… indeed, there are no provisions in this specification for input of external data or output of computed results.)

（中略）

再帰関数は以下のように書ける。

```javascript
function factorial(n) {
  if (n == 0) {
    return 1
  }
  return n * factorial(n - 1)
}
```

出典： [JavaScript - Wikipedia](https://ja.wikipedia.org/wiki/JavaScript)
