---
id: 176
slug: linkwithin_wordpress
title: LinkWithin（WordPress版）で手軽に関連記事表示（追記：現在は使用不可）
description: 「この記事を読んだ人は、こんな記事も読んでいます。」の関連記事を簡単に表示できる「LinkWithin」を入れてみました。  
createdAt: 2011-05-15T13:00:49+09:00
updatedAt: 2011-05-15T13:00:49+09:00
imageFormat: png
category: ブログカスタマイズ
tags:
  - ブログカスタマイズ
---

導入はとっても簡単です。LinkWithinのサイトにアクセスします。（リンク切れのため、外しました）

* ~LinkWithin~

メールアドレスとブログURLを入力、ブログタイプを選択して、カラーモードを選択し、GetWidget!ボタンを押下するだけ。

<capture-image article-id="176" img-file-name="linkwithin.png" caption="LinkWithinの登録ページ"></capture-image>

無印発信の場合は、ブログタイプにWordPressを選択し、白背景がいいので「My blog has light text on a dark background」にはチェックを入れずに登録。（チェックを入れると、黒背景）

WordPress版の場合は、ボタン押下後のページでプラグインアップロード用のphpファイルを含んだzipファイルがダウンロードできるので、それをプラグインページでアップロードすれば導入完了です。

記事の下に、画像と共に関連記事が表示されるようになります。（但し、導入したばかりはまだ記事がインデックスされていないため表示は不安定です。）

導入はこれでおしまいですが、ちょっとカスタマイズすると、さらにいい感じになります。無印発信がカスタマイズしたのは、以下の2点。

* 英語表記を日本語表記に変更する。
* 個別ページにのみ、LinkWithinを表示させる。

初期設定だと、表示文字列が「You might also like：」という英語表記になっています。これはこれでカッコイイのですが、読みやすさを考慮して日本語にしてみました。設定には、プラグインにちょっとした編集を加える必要があります。

プラグインコードの直接編集は慣れていないと抵抗ありますが、以下を参考にすれば簡単にできるかと思います。

* <a href="http://www.abi-station.com/p/1129" target="_blank">「LinkWithin」をWordPressに入れて見出しの文字を変える方法</a>

表示箇所の設定ついては好みが分かれるところですが、TOPページに何個も並ぶのは見た目的にどうかなと思い、個別ページのみに表示するよう設定しました。プラグインの設定ページで、以下にチェックを入れればOK。

<capture-image article-id="176" img-file-name="linkwithin_settei.png" caption="LinkWithinの設定画面"></capture-image>

手軽で画像付きで広告なし。なかなか優れた関連記事表示サービスだと思います。

* * *

追記です。

LinkWithinは手軽に設定できてそこそこ気にっていたのですが…

* なかなかインデックスされない。（ずっと同じ記事表示のまま）
* デザインを統一したい。

上記の観点から、関連記事表示は別のWordPressプラグインである、

* <a href="http://wordpress.org/extend/plugins/similar-posts/" target="_blank">Similar Posts</a>

を使う事にしました。

細かい説明は省きますが、人気記事表示プラグインの WordPress Popular Post と設定方法がほぼ同じです。

* * *

更に追記です。（2016年5月）

現在は、利用しているテーマファイルと相性が良い「Yet Another Related Posts Plugin (YARPP)」を使っています。

* * *

最後の追記です。（2021年8月）

Vue/Nuxtへの移行に伴い、現在はWordPressのプラグインは使っていません。
