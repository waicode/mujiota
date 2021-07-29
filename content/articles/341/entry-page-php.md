---
title: WordPressの個別記事ページにphpタグを表示させる方法
author: aiza_wai
type: post
date: 2011-09-21T13:30:12+09:00
url: /341/entry-page-php/
featured_image: /wp-content/uploads/2016/04/110921_wp_php_728x448.png
wordbooker_options:
  - 'a:27:{s:23:"wordbook_default_author";s:1:"1";s:23:"wordbook_extract_length";s:3:"256";s:26:"wordbooker_publish_default";s:2:"on";s:21:"wordbooker_like_width";s:3:"250";s:25:"wordbook_fbshare_location";s:3:"top";s:24:"wordbook_fblike_location";s:3:"top";s:22:"wordbook_fblike_action";s:9:"recommend";s:27:"wordbook_fblike_colorscheme";s:4:"dark";s:20:"wordbook_fblike_font";s:5:"arial";s:22:"wordbook_fblike_button";s:12:"button_count";s:21:"wordbook_fblike_faces";s:5:"false";s:20:"wordbook_fblike_send";s:5:"false";s:18:"wordbook_attribute";s:12:"無印発信";s:29:"wordbook_republish_time_frame";s:2:"10";s:29:"wordbooker_status_update_text";s:35:": New blog post :  %title% - %link%";s:19:"wordbook_actionlink";s:3:"300";s:27:"wordbook_search_this_header";s:2:"on";s:32:"wordbook_description_meta_length";s:3:"350";s:20:"wordbook_comment_get";s:2:"on";s:21:"wordbook_comment_push";s:2:"on";s:18:"wordbook_page_post";s:15:"148216695246471";s:18:"wordbook_orandpage";s:1:"2";s:24:"wordbooker_comment_email";s:18:"aiaiaiya@gmail.com";s:18:"wordbook_noncename";s:10:"d637c83acf";s:23:"wordbook_scheduled_post";s:1:"0";s:27:"wordbooker_publish_override";s:2:"on";s:17:"wordbook_new_post";s:1:"0";}'
pvc_views:
  - 7897
wordbooker_thumb:
  - http://64.der.tools/wp-content/uploads/2011/09/20110921_pic.png
wordbooker_extract:
  - |
    サイドバーにある3Dタグクラウドがとても重い…
    そこで、個別記事ページに移動させ、
    全ページに表示させないようにしました。
    
    
    
    
    
    
    
    
    
    
    この3Dタグクラウドは、
    「wp-cumulus」というプラグインを利用し、
    phpタグ記述で表示しています。
    ※フラッ ...
topsy_short_url:
  - http://bit.ly/owiFEO
page_layout:
  - col1
scc_share_count_twitter:
  - -1
scc_share_count_facebook:
  - -1
scc_share_count_crawldate:
  - 2020/02/11 07:38:26
categories:
  - WordPress

---
サイドバーにある**3Dタグクラウド**がとても重い…そこで個別記事ページに移動させ、全ページに表示させないようにしました。そのために使ったのが、個別記事ページにphpタグを表示させるためのプラグインです。

<!--more-->

この3Dタグクラウドは、「**wp-cumulus**」というプラグインを利用し、phpタグ記述で表示しています。（フラッシュを使っています。）

  * <a href="http://wordpress.org/extend/plugins/wp-cumulus/" target="_blank">wp-cumulus</a>

よって、<span class="underline">phpタグを個別記事内に記述する必要</span>がありますが、WordPressはデフォルトの設定だと個別記事ページにphpタグを記述することができません。そこで、ちょっとしたプラグインをインストールしました。いくつか種類があるようですが、おそらく最も有名であろう「**Exec-PHP**」をインストール。

  * <a href="http://wordpress.org/extend/plugins/exec-php/" target="_blank">Exec-PHP</a>

設定はすごく簡単、というか設定不要で、インストールするだけで個別記事内のphpタグを読み取り表示できるようになります。

ちなみに「wp-cumulus」はそのままだと日本語化されないので、利用を考えている方は以下のページから日本語化されたswfファイルをダウンロードしてみてください。

  * <a href="http://darts-team.com/dartsblog/archives/391" target="_blank">WP-Cumulusの日本語版swf</a>

（ダウンロードしたtagcloud.swfをWP-Cumulusフォルダのtagcloud.swfに上書きすればOK）

いろいろプラグインをくっつけた結果、まだまだ大分重いので定期的にメンテナンスしていかなければ…！

* * *

追記です。（2016年4月28日）

「wp-cumulus」はWPプラグインリストから姿を消してしまったようなので、「**WP Category Tag Cloud**」というプラグインに切り替えています。こちらは、ショートコードを使って個別記事に挿入できるので、PHPタグの記載が必要ありません。また、フラッシュを使っていないため、スマートフォンのブラウザでも3Dで表示されます。正直、見た目は「wp-cumulus」の方が美しかったのですが、実用性を考えると現在は「WP Category Tag Cloud」が最良の選択でしょう。

  * <a href="https://ja.wordpress.org/plugins/wp-category-tag-could/" target="_blank">WP Category Tag Cloud</a>

&nbsp;