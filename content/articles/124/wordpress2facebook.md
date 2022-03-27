---
id: 124
slug: wordpress2facebook
title: WordPressとFacebookの連携はWordBookerで（追記：現在は利用不可）
description: WordBookerというプラグインを使ってWordPressとFacebookの連携に成功しました。
createdAt: 2011-04-26T14:00:36+09:00
updatedAt: 2016-05-08T12:12:16+09:00
imageFormat: jpg
category: ブログカスタマイズ
tags:
  - ブログカスタマイズ
---

（注意：現在は使えなくなったため、別の連携方法を記載しています。）

WordPressとTwitterの連携は、Tweetableで実現。こっちはプラグイン使って比較的簡単に設定できました。

<app-related-link id="69"></app-related-link>

facebookも色々プラグインが用意されていて、簡単にできるかと思いきや、何かと設定が複雑なものも多いです。以下のプラグインを試してみましたが、設定に不備があったようで、私の環境では連携する事ができませんでした。

* Status Updater
* WPBook

Status Updaterはアプリページとの連携がうまくいかず。WPBookについては、調べてみた結果、現時点の最新バージョンであるv2.2だと連携できなくなっているとのこと。（2011年4月時点）

で、試行錯誤の末に連携成功したプラグインがこちら。（追記：Facebook API の仕様変更に伴い、現在は使えません。）

* ~WordBooker~

WordBookerでプラグイン検索すればHITします。設定についても、Facebook側へアプリページを新規に作る必要が無いので、ものすごく簡単でした。

以下のページを参考にしました。詳細な設定方法は載っていませんが、連携自体の設定はとても簡単なので問題は無いはず。（ただし、設定画面は英語です）

* <a href="http://age-d.com/alog/2011/03/145wordpressxfacebook2/" target="_blank" rel="noopener">WordPressをFacebookと連携させてみた</a>

上記ページではWPBookerと表現していますが、現在の正式名称は**「WordBooker」**なのでご注意ください。これを使えば、Facebookとコメントまで連携可能です。簡単設定にも関わらず、かゆいところまで手が届いている素晴らしいプラグインだと思います。

現在は以下の設定で連携しています。

<app-capture-image article-id="124" img-file-name="wordbooker_help.png" caption="WordBookerの設定画面"></app-capture-image>

とりあえず、以下の2つにチェック入れとけば、facebookへの投稿とコメントの連携ができるかと思います。

* Default Publish Post to Facebook
* Enable Extended description for Share Link

* * *

追記です。

WordBookerで設定しているにも関わらず、どうもFaceBookへ投稿されていない時があるので調査してみました。

どうやら、予約公開の場合は投稿画面下のWordBooker設定エリアにある「Force Re-Publish Post to Facebook on Edit」にチェックを入れないと投稿されないようです。

今までこの投稿時設定の存在を意識していませんでしたが、ここで設定すればFanページへの同時投稿設定も可能です。

<app-capture-image article-id="124" img-file-name="facebooker_memo.png" caption="投稿画面下のWordBooker設定"></app-capture-image>

毎回チェックを入れるのが面倒な場合は、プラグイン設定画面からデフォルトでチェックを入れる設定にすることもできます。

<app-capture-image article-id="124" img-file-name="facebooker_memo_02.png" caption="Wodbookerのプラグイン設定画面"></app-capture-image>

ただし、この設定にすると記事を「更新」するたびに毎回Facebookに投稿されるようになるので、記事をちょっと直して更新、みたいな事を繰り返す時は要注意。チェックを外しておかないと、同じような記事がどんどんFacebookに投稿されてしまいます。

Fanページへの同時投稿設定もデフォルトでできたら嬉しいのですが、そちらはまだできない模様…プラグインのアップデートに期待です。

* * *

さらに追記です。

見落としていただけで、Fanページへの同時投稿設定もデフォルトで設定する事が可能でした！

「Blog Level Customisation」設定部分の下にある「User Level Customisation」で設定できます。

<app-capture-image article-id="124" img-file-name="20110922_wordbooker.png" caption="Fanページ投稿のデフォルト設定も可能"></app-capture-image>

上記のように設定すれば、投稿を新規追加時に、WordBooker設定パネルが初期状態でFanページへ同時投稿される設定となります。

当初、この記事を書いたのは2011年4月頃ですが、その頃から何度かアップデートを重ね、さらに使いやすくなっている（気がする）WordBooker。WordPress⇔Facebook連携の鉄板になりつつあるのではないでしょうか。

* * *

おそらく最後の追記です。（2016年5月）

便利だったWordBookerですが、Facebook APIの仕様変更に伴い、現在は使い物にならなくなっているようです。この手のプラグインは、サービス元の変化に柔軟かつ継続して対応していかなければならないので、プラグイン公開側も対応が大変ですね。

現在はFacebookが<a href="https://wordpress.org/plugins/facebook/" target="_blank" rel="noopener">公式プラグイン</a>を公開しているので、それを使うのが最も無難な選択でしょう。ただ、Facebook Developersへの登録が必須のため、導入の敷居は少し高いかもしれません。

WordPressの便利ツールをまとめた鉄板プラグインJetpackにもSNS連携機能（パブリサイズ共有機能）があり、これを利用するのも１つの手です。連携先のFacebookページさえ作っていれば、比較的かんたんに接続できます。

ただし、Jetpackのパブリサイズ共有機能には致命的な点が１つだけあります。それは、**最初の公開時のみSNS共有可能で過去記事や更新時は共有ができない**という点です。Jetpackは総じてすばらしいプラグインなのですが、パブリサイズ共有機能に限って言えばこの点が不便だったため、利用を見送っています。
