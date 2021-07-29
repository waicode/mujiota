---
title: メルマガバックナンバーブログの作り方
author: aiza_wai
type: post
date: 2011-08-01T23:00:18+09:00
url: /309/making-mailmgblog/
featured_image: /wp-content/uploads/2011/09/bf1f92a628497135b174dfbb1915e0d5.png
wordbooker_options:
  - 'a:27:{s:23:"wordbook_default_author";s:1:"1";s:23:"wordbook_extract_length";s:3:"256";s:26:"wordbooker_publish_default";s:2:"on";s:21:"wordbooker_like_width";s:3:"250";s:25:"wordbook_fbshare_location";s:3:"top";s:24:"wordbook_fblike_location";s:3:"top";s:22:"wordbook_fblike_action";s:9:"recommend";s:27:"wordbook_fblike_colorscheme";s:4:"dark";s:20:"wordbook_fblike_font";s:5:"arial";s:22:"wordbook_fblike_button";s:12:"button_count";s:21:"wordbook_fblike_faces";s:5:"false";s:20:"wordbook_fblike_send";s:5:"false";s:18:"wordbook_attribute";s:12:"無印発信";s:29:"wordbook_republish_time_frame";s:2:"10";s:29:"wordbooker_status_update_text";s:35:": New blog post :  %title% - %link%";s:19:"wordbook_actionlink";s:3:"300";s:27:"wordbook_search_this_header";s:2:"on";s:32:"wordbook_description_meta_length";s:3:"350";s:20:"wordbook_comment_get";s:2:"on";s:21:"wordbook_comment_push";s:2:"on";s:18:"wordbook_page_post";s:15:"148216695246471";s:18:"wordbook_orandpage";s:1:"2";s:24:"wordbooker_comment_email";s:18:"aiaiaiya@gmail.com";s:18:"wordbook_noncename";s:10:"e788868d03";s:27:"wordbooker_publish_override";s:2:"on";s:23:"wordbook_scheduled_post";s:1:"0";s:17:"wordbook_new_post";s:1:"0";}'
pvc_views:
  - 15057
wordbooker_thumb:
  - http://64.der.tools/wp-content/uploads/2011/08/email.jpg
wordbooker_extract:
  - |
    無印発信は、ブログに加えてメルマガも配信しているのですが、
    加えて、メルマガバックナンバーブログとして、
    メルマガの配信メールを記事としてどんどん蓄積しています。
    
    今日は、このメルマガバックナンバーブログの
    作り方をご紹介します！
    
    
    
    メルマガは、 ...
topsy_short_url:
  - http://bit.ly/nBTlvy
scc_share_count_twitter:
  - -1
scc_share_count_facebook:
  - -1
scc_share_count_pocket:
  - 5
scc_share_count_hatebu:
  - 1
scc_share_count_crawldate:
  - 2020/02/11 07:38:28
scc_share_count_total:
  - 6
categories:
  - WordPress

---
無印発信は、ブログに加えて**メルマガ**も配信しているのですが、加えて、**メルマガバックナンバーブログ**としてメルマガの配信メールを記事としてどんどん蓄積しています。今日は、このメルマガバックナンバーブログの作り方をご紹介します！

<!--more-->

メルマガは、ある種、皆さんに読んでもらって既読メールになったらおしまいの刹那的なフロー媒体ですが、バックナンバーブログとして蓄積すれば、<span class="underline">ストック媒体としてWEB上に資産を残す事が可能</span>です。

無印発信の場合は、ブログ版のサブディレクトリとしてバックナンバーブログを構築しています。（追記：現在は公開、更新を停止しています。）

  * <del><a href="https://mujiota.com/mailmg/" target="_blank">無印発信メルマガバックナンバーブログ</a></del>

WordPressを利用して構築しているこのバックナンバーブログですが、メルマガを配信したタイミングで自動的に記事が作成されて、おまけにカテゴリ・タグ指定も可能、URLも自動変換してくれる優れもの。

特に難しい実装は必要無く、**WordPressのプラグイン**を利用して構築しています。以下、詳細についてご紹介。

### カテゴリ・タグ指定可能なバックナンバーブログの作り方 {.m60-t.m40-b}

無印発信メルマガバックナンバーブログの核を成すプラグインは、以下の3つです。

  * <a href="http://wppluginsj.sourceforge.jp/ktai_entry/" target="_blank">Ktai Entry</a>
  * <a href="http://fuzzmaster.jp/wp/2009/11/17/1860/" target="_blank">Advanced-Make-Clickable</a>
  * <a href="http://camcam.info/wordpress/101" target="_blank">brBrbr</a>

メール投稿⇒記事作成は「**Ktai Entry**」が可能にします。

「Ktai Entry」は、メール投稿用のメールアドレスを指定し、そのメールアドレスにメールが配信されると、そのメール本文を、そのままブログの記事として投稿してくれるプラグインです。この「Ktai Entry」が、言ってみればメルマガバックナンバーブログの「生命線」であり、このプラグインの機能はフル活用しています。

カテゴリーやタグ指定も、このプラグインの機能を使って実現可能です。

文頭に「CAT:」や「TAG:」の指定を入れることで、カテゴリー指定やタグ指定が可能となります。（無印発信は、現在はタグ指定のみ利用しています。）「Ktai Entry」の詳細な使い方についてはここでは記載を省きますが、利用する際は、<a href="http://wppluginsj.sourceforge.jp/ktai_entry/" target="_blank">プラグイン解説ページ</a>を参考に設定を行ってください。

続いて、「**Advanced-Make-Clickable**」ですが、このプラグインは、メルマガ上に記載するURLを自動的にリンク化してくれる機能を持ちます。メルマガに「＜a href=&#8221;～&#8221;＞＜/a＞」のリンクタグを書くわけにはいかないですが、これでメルマガ上の紹介URLも機能してくれるというわけです。

最後に、「**brBrbr**」ですが、これはメルマガ上の「改行」を「見たまま」に表示してくれるプラグインです。実は、WordPressは<span class="underline">改行が2つ以上</span>あると、デフォルトの状態では自動的に改行を削除して表示する仕様となっています。普段なら、まぁ、そこまで気にならないのですが、メルマガだと「改行」は体裁を整えるためには無くてはならない存在なので、このプラグインを使って、配信メールの状態をそのままを記事として投稿しています。

ざっくりと書いたものの、メルマガバックナンバーブログを作るためのエッセンスは以上となります。思った以上に、簡単ではないでしょうか？あとは、メルマガの配信先に「Ktai Entry」で設定したメールアドレスを登録すれば、メルマガが配信されたタイミングで、どんどん記事が蓄積されていきます。

プラスアルファで、手間暇かけずに<span class="underline">WEB上に独自の資産を構築できるお得な方法</span>ですので、もしも、メルマガを配信している場合は、是非とも試してみてください。

* * *

追記です。（ 2016年4月）

現在は無印発進のメルマガバックナンバーブログの公開・更新は停止しています。方法としては現在でも有効ですので、記事自体はそのまま残しておきます。