---
title: WordPressでDBとソースのバックアップをとる方法
author: aiza_wai
type: post
date: 2011-10-02T01:32:20+09:00
url: /356/wordpress-backup/
featured_image: /wp-content/uploads/2016/04/f33cef694476e5e0e1b17b0f008a6cc8.png
wordbooker_options:
  - 'a:34:{s:23:"wordbook_default_author";s:1:"1";s:23:"wordbook_extract_length";s:3:"256";s:26:"wordbooker_publish_default";s:2:"on";s:25:"wordbooker_like_share_too";s:2:"on";s:27:"wordbooker_like_button_show";s:2:"on";s:21:"wordbooker_like_width";s:3:"512";s:32:"wordbooker_like_button_frontpage";s:2:"on";s:31:"wordbooker_like_button_category";s:2:"on";s:27:"wordbooker_like_button_page";s:2:"on";s:27:"wordbooker_like_button_post";s:2:"on";s:28:"wordbooker_share_button_page";s:2:"on";s:28:"wordbooker_share_button_post";s:2:"on";s:25:"wordbook_fbshare_location";s:6:"bottom";s:24:"wordbook_fblike_location";s:6:"bottom";s:22:"wordbook_fblike_action";s:4:"like";s:27:"wordbook_fblike_colorscheme";s:5:"light";s:20:"wordbook_fblike_font";s:7:"verdana";s:22:"wordbook_fblike_button";s:8:"standard";s:21:"wordbook_fblike_faces";s:5:"false";s:20:"wordbook_fblike_send";s:4:"true";s:18:"wordbook_attribute";s:12:"無印発信";s:29:"wordbook_republish_time_frame";s:2:"10";s:27:"wordbooker_publish_override";s:2:"on";s:29:"wordbooker_status_update_text";s:35:": New blog post :  %title% - %link%";s:19:"wordbook_actionlink";s:3:"300";s:32:"wordbook_description_meta_length";s:3:"350";s:20:"wordbook_comment_get";s:2:"on";s:21:"wordbook_comment_push";s:2:"on";s:18:"wordbook_page_post";s:15:"148216695246471";s:18:"wordbook_orandpage";s:1:"2";s:24:"wordbooker_comment_email";s:18:"aiaiaiya@gmail.com";s:18:"wordbook_status_id";s:4:"-100";s:18:"wordbook_noncename";s:10:"b83b1db2c2";s:17:"wordbook_new_post";s:1:"0";}'
pvc_views:
  - 45723
wordbooker_thumb:
  - http://64.der.tools/wp-content/uploads/2011/10/20111002_wp_backup_logo.png
wordbooker_extract:
  - |
    記事数が、ある程度増えてきた事もあり、
    今までコツコツ積み重ねてきた大切なデータを守るため、
    WordPressのバックアップ環境を整えました！
    
    
    
    データのバックアップと言えば、
    投稿記事の文字情報等が保存されている
    「DBデータの復元」がまず頭に思い浮 ...
topsy_short_url:
  - http://bit.ly/rudqC6
page_layout:
  - col1
scc_share_count_twitter:
  - -1
scc_share_count_facebook:
  - -1
scc_share_count_crawldate:
  - 2020/02/11 07:23:27
categories:
  - WordPress

---
記事数がある程度増えてきた事もあり、今までコツコツ積み重ねてきた大切なデータを守るため**WordPressのバックアップ環境**を整えました。プラグインを使って行うWordPressのバックアップ方法についてお伝えします。

<!--more-->

データのバックアップと言えば投稿記事の文字情報等が保存されている「<span class="b">DBデータの保存・復元</span>」がまず頭に思い浮かぶかと思います。しかし、WordPressの場合は<span class="b">ブログの外観</span>や<span class="b">プラグイン</span>もカスタマイズできるので、<span class="underline">DB以外のデータ</span>も「守る」必要があります。

バックアップに使えるプラグインは数多く出ていますが、先人達の知恵をお借りし、以下の2つを選択・設定しました！

  * <a href="http://wordpress.org/extend/plugins/wp-dbmanager/" target="_blank">WP-DBManager</a>
  * <a href="http://www.blogtrafficexchange.com/wordpress-backup/" target="_blank">WordPress Backup (by BTE)</a>

### DBデータのバックアップはWP-DBManager {.m60-t.m40-b}

まず、DBのバックアップは「**WP-DBManager**」を使っています。WordPressのバックアップと言えば「WP-DBManager」と  
言っても過言では無い位、有名なプラグインみたいです。DBのバックアップのみならず、<span class="b">DBの最適化</span>も実施してくれます。

私もWordPressブログ開設当初からインストールだけはしていましたが、今まで未設定状態のままでしたので、この度、週に1回バックアップをとるように設定しました。

「WP-DBManager」の素晴らしい点をざっくり書くと…

<p class="m30-t m20-b">
  バックアップファイルの圧縮（<em>.gzip</em>）or非圧縮（<em>.sql</em>）を選択可能。（バックアップファイルがSQLってのは、ちょっと新鮮でした。）
</p>

<p class="m20-t m20-b">
  サーバ上に保存しておくバックアップファイルの数を自由に設定でき、サーバー容量を圧迫し過ぎる心配が無い。（設定数を超過した場合は、古い物から優先的に改廃してくれます。）
</p>

<p class="m20-t m30-b">
  バックアップしたタイミングで、バックアップファイルをメール転送でき、別サーバーに保存が可能。（サーバーのデータが丸ごと消失したら元も子も無いので、自動的に別の場所に保存できる点は、機能として素敵ですね。）
</p>

「WP-DBManager」の機能詳細や設定方法については、以下の記事が参考になるかと思います。

  * <a href="http://wordpress.org/plugins/wp-dbmanager/" target="_blank">バックアップ用プラグイン WP-DBManager</a>
  * <a href="http://www.ttcbn.net/no_second_life/archives/8281" target="_blank">WordPressのバックアップと最適化！ WP-DBManagerが最高すぎる件！！</a>

### ソースのバックアップはWordpress Backup (by BTE) {.m60-t.m40-b}

DBデータ以外のバックアップは「**WordPress Backup (by BTE)**」の力を借りました。

このプラグインを使うと、以下3点のバックアップが可能となります。

  * WordPressテーマ（_themes.zip_）
  * 画像（_uploads.zip_）
  * プラグイン（_plugin.zip_）

こちらもまた、メールでバックアップファイルを転送可能な優れもの。

但し、<span class="underline">サーバ上に保存される各Zipファイルは常に1つ</span>であり、バックアップされる度に改廃される点は「WP-DBManager」と異なります。最短で1時間毎にバックアップファイルを最新化する事もできますが、あまり頻繁にやりすぎても、メール転送先の容量を圧迫してしまうため、私の場合は「WP-DBManager」と合わせて、週1でバックアップをとって転送するように設定しました。

「Wordpress Backup (by BTE)」の詳細については、以下が参考になるかと思います。（「WP-DBManager」と比較すると、WEB上の解説ページ数が圧倒的に少ないので貴重です。）

  * <a href="http://www.ttcbn.net/no_second_life/archives/10840" target="_blank">テーマや画像、プラグインをバックアップしてくれる守護神！ その名も”WordPress Backup”</a>

普通なら骨が折れそうな「バックアップ環境構築」ですが、プラグイン利用によってものの数分で成し遂げてしまうあたり、やはりWordPressは秀逸だと思います。