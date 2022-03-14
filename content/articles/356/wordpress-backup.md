---
id: 356
slug: wordpress-backup
title: WordPressでDBとソースのバックアップをとる方法
description: 記事数が増えてきたので、今まで積み重ねてきた大切なデータを守るため「WordPressのバックアップ環境」を整えました。プラグインを使って行うバックアップのやり方を説明します。
createdAt: 2011-09-21T13:30:12+09:00
imageFormat: png
category: ブログカスタマイズ
tags:
  - ブログカスタマイズ
---

データのバックアップと言えば投稿記事の文字情報等が保存されている「DBデータの保存・復元」がまず頭に思い浮かぶと思います。くわえて、WordPressの場合はブログの外観（テーマ）やプラグインもカスタマイズできるので、DB以外のデータもバックアップ対象です。

バックアップに使えるプラグインは数多く出ていますが、先人達の知恵をお借りし、以下の2つを選択・設定しました。

* <a href="http://wordpress.org/extend/plugins/wp-dbmanager/" target="_blank" rel="noopener">WP-DBManager</a>
* <a href="http://www.blogtrafficexchange.com/wordpress-backup/" target="_blank" rel="noopener">WordPress Backup (by BTE)</a>

## DBデータのバックアップはWP-DBManager

まず、DBのバックアップは「**WP-DBManager**」を使っています。WordPressのバックアップと言えば「WP-DBManager」と言っても過言では無い位、有名なプラグインみたいです。DBのバックアップのみならず、<strong>DBの最適化</strong>も実施してくれます。私もWordPressブログ開設当初からインストールだけはしていましたが、今まで未設定状態のままでしたので、この度、週に1回バックアップをとるように設定しました。

「WP-DBManager」の素晴らしい点をいくつか書いてみます。

* バックアップファイルの圧縮（<em>.gzip</em>）or非圧縮（<em>.sql</em>）を選択可能。（バックアップファイルがSQLってのは、ちょっと新鮮でした。）
* サーバ上に保存しておくバックアップファイルの数を自由に設定でき、サーバー容量を圧迫し過ぎる心配が無い。（設定数を超過した場合は、古い物から優先的に改廃してくれます。）
* バックアップしたタイミングで、バックアップファイルをメール転送でき、別サーバーに保存が可能。（サーバーのデータが丸ごと消失したら元も子も無いので、自動的に別の場所に保存できる点は、機能として素敵ですね。）

「WP-DBManager」の機能詳細や設定方法については、以下の記事が参考になるかと思います。

* <a href="http://wordpress.org/plugins/wp-dbmanager/" target="_blank" rel="noopener">バックアップ用プラグイン WP-DBManager</a>
* <a href="http://www.ttcbn.net/no_second_life/archives/8281" target="_blank" rel="noopener">WordPressのバックアップと最適化！ WP-DBManagerが最高すぎる件！！</a>

## ソースのバックアップはWordpress Backup (by BTE)

DBデータ以外のバックアップは<strong>「WordPress Backup (by BTE)」</strong>の力を借りました。

このプラグインを使うと、以下3点のバックアップが可能となります。

* WordPressテーマ（_themes.zip_）
* 画像（_uploads.zip_）
* プラグイン（_plugin.zip_）

こちらもまた、メールでバックアップファイルを転送可能な優れもの。

ただし、<strong>サーバ上に保存される各Zipファイルは常に1つ</strong>であり、バックアップされる度に改廃される点は「WP-DBManager」と異なります。最短で1時間毎にバックアップファイルを最新化する事もできますが、あまり頻繁にやりすぎても、メール転送先の容量を圧迫してしまうため、私の場合は「WP-DBManager」と合わせて、週1でバックアップをとって転送するように設定しました。

「Wordpress Backup (by BTE)」の詳細については、以下が参考になるかと思います。（「WP-DBManager」と比較すると、WEB上の解説ページ数が圧倒的に少ないので貴重です。）

* <a href="http://www.ttcbn.net/no_second_life/archives/10840" target="_blank" rel="noopener">テーマや画像、プラグインをバックアップしてくれる守護神！ その名も”WordPress Backup”</a>

普通なら骨が折れそうな「バックアップ環境構築」ですが、プラグイン利用によってものの数分で成し遂げてしまうあたり、やはりWordPressは秀逸だと思います。

* * *

追記です。（2021年8月）

Vue/Nuxt化に伴い、このブログではWordPressのバックアップ用プラグインは使わなくなりました。WordPressでバックアップする場合、最近は「All-in-One WP Migration」しか使っていないです。

* <a href="https://ja.wordpress.org/plugins/all-in-one-wp-migration/" target="_blank" rel="noopener">All-in-One WP Migration</a>

1クリックでサイトを移動、転送、コピー、移行、バックアップできる優れ物。ただし、移行元と移行先でWordPress本体のバージョンが違い過ぎると失敗する可能性はありますのでご注意ください。
