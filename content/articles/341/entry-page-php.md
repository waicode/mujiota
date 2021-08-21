---
id: 341
slug: entry-page-php
title: WordPressの個別記事ページにphpタグを表示させる方法
description: サイドバーに置いた「3Dタグクラウド」がとても重いので、全ページに表示させないようにしました。そのために使ったのが個別記事ページにphpタグを表示させるためのプラグインです。
createdAt: 2011-09-21T13:30:12+09:00
updatedAt: 2016-04-28T9:32:11+09:00
imageFormat: png
category: ブログカスタマイズ
tags:
  - ブログカスタマイズ
---

この3Dタグクラウドは<strong>「wp-cumulus」</strong>というプラグインを利用し、phpタグ記述で表示しています。（フラッシュを利用）

* <a href="http://wordpress.org/extend/plugins/wp-cumulus/" target="_blank">wp-cumulus</a>

よって<strong>phpタグを個別記事内に記述する必要</strong>がありますが、WordPressはデフォルトの設定だと個別記事ページにphpタグを記述することができません。そこで、ちょっとしたプラグインをインストールしました。いくつか選択肢がありますが、おそらく最も有名であろう<strong>「Exec-PHP」</strong>をインストール。

* <a href="http://wordpress.org/extend/plugins/exec-php/" target="_blank">Exec-PHP</a>

設定はすごく簡単。というか設定不要で、インストールするだけで個別記事内のphpタグを読み取り表示できるようになります。

ちなみに「wp-cumulus」はそのままだと日本語化されないので、利用を考えている方は以下のページから日本語化されたswfファイルをダウンロードしてみてください。

* <a href="http://darts-team.com/dartsblog/archives/391" target="_blank">WP-Cumulusの日本語版swf</a>

ダウンロードしたtagcloud.swfをWP-Cumulusフォルダのtagcloud.swfに上書きすればOKです。

いろいろプラグインをくっつけた結果、まだまだ大分重いので定期的にメンテナンスしていかなければ。

* * *

追記です。（2016年4月）

「wp-cumulus」はWPプラグインリストから姿を消してしまったようなので<strong>「WP Category Tag Cloud」</strong>というプラグインに切り替えています。こちらはショートコードを使って個別記事に挿入できるので、PHPタグの記載が必要ありません。また、フラッシュを使っていないため、スマートフォンのブラウザでも3Dで表示されます。

* <a href="https://ja.wordpress.org/plugins/wp-category-tag-could/" target="_blank">WP Category Tag Cloud</a>

正直、見た目は「wp-cumulus」の方が美しかったのですが、実用性を考えると現在は「WP Category Tag Cloud」が最良の選択でしょう。

* * *

追記です。（2021年8月）

Vue/Nuxt化に伴い、タグクラウドを外しました。
