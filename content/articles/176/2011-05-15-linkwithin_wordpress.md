---
title: LinkWithin（WordPress版）で手軽に関連記事表示
author: aiza_wai
type: post
date: 2011-05-15T13:00:49+09:00
url: /176/linkwithin_wordpress/
featured_image: /wp-content/uploads/2011/05/5afb9fcff2eb303384ebc3bab5168b14.png
wordbooker_options:
  - 'a:10:{s:18:"wordbook_noncename";s:10:"5f81ee175a";s:18:"wordbook_page_post";s:4:"-100";s:18:"wordbook_orandpage";s:1:"2";s:23:"wordbook_default_author";s:1:"1";s:23:"wordbook_extract_length";s:3:"256";s:19:"wordbook_actionlink";s:3:"300";s:26:"wordbooker_publish_default";s:2:"on";s:18:"wordbook_attribute";s:12:"無印発信";s:29:"wordbooker_status_update_text";s:35:": New blog post :  %title% - %link%";s:20:"wordbook_comment_get";s:2:"on";}'
views:
  - 41
pvc_views:
  - 6166
topsy_short_url:
  - http://bit.ly/ldcrXt
wordbooker_thumb:
  - http://64.der.tools/wp-content/uploads/2011/05/linkwithin_top.png
scc_share_count_twitter:
  - -1
scc_share_count_facebook:
  - -1
scc_share_count_crawldate:
  - 2020/02/11 06:07:21
categories:
  - WordPress

---
「この記事を読んだ人は、こんな記事も読んでいます。」な**関連記事**を紹介してくれる**LinkWithin**を入れてみました。  
<!--more-->

導入はとっても簡単です。

  * <a href="http://www.linkwithin.com/learn?ref=widget" target="_blank">LinkWithin</a>

上記の**LinkWithin**のサイトにアクセスして、メールアドレスとブログURLを入力、ブログタイプを選択して、カラーモードを選択し、GetWidget!ボタンを押下するだけ。

<div id="attachment_178" style="width: 410px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/05/linkwithin.png"><img aria-describedby="caption-attachment-178" class="size-medium wp-image-178" title="LinkWithinの登録ページ" src="https://mujiota.com/wp-content/uploads/2011/05/linkwithin-400x278.png" alt="LinkWithinの登録ページ" width="400" height="278" srcset="https://mujiota.com/wp-content/uploads/2011/05/linkwithin-400x278.png 400w, https://mujiota.com/wp-content/uploads/2011/05/linkwithin.png 433w" sizes="(max-width: 400px) 100vw, 400px" /></a>
  
  <p id="caption-attachment-178" class="wp-caption-text">
    LinkWithinの登録ページ
  </p>
</div>

無印発信の場合は、ブログタイプに**WordPress**を選択し、白背景がいいので「My blog has light text on a dark background」にはチェックを入れずに登録。（チェックを入れると、黒背景）

WordPress版の場合は、ボタン押下後のページでプラグインアップロード用のphpファイルを含んだzipファイルがダウンロードできるので、それをプラグインページでアップロードすれば導入完了です。

記事の下に、画像と共に関連記事が表示されるようになります。（但し、導入したばかりはまだ記事がインデックスされていないため表示は不安定です。）

導入はこれでおしまいですが、ちょっとカスタマイズすると、さらにいい感じになります。無印発信がカスタマイズしたのは、以下の2点。

  * 英語表記を日本語表記に変更する。
  * 個別ページにのみ、LinkWithinを表示させる。

初期設定だと、表示文字列が「You might also like：」という英語表記になっています。これはこれでカッコイイのですが、読みやすさを考慮して日本語にしてみました。設定には、プラグインにちょっとした編集を加える必要があります。

プラグイン編集は慣れないとちょっと緊張しますが、以下を参考にすれば簡単にできるかと思います。

  * <a href="http://www.abi-station.com/p/1129" target="_blank">「LinkWithin」をWordPressに入れて見出しの文字を変える方法</a>

表示箇所の設定ついては好みが分かれるところですが、TOPページに何個も並ぶのは見た目的にどうかなと思い、個別ページのみに表示するよう設定しました。プラグインの設定ページで、以下にチェックを入れればOK。

<div id="attachment_177" style="width: 410px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/05/linkwithin_settei.png"><img aria-describedby="caption-attachment-177" class="size-medium wp-image-177" title="LinkWithinの設定画面" src="https://mujiota.com/wp-content/uploads/2011/05/linkwithin_settei-400x118.png" alt="LinkWithinの設定画面" width="400" height="118" srcset="https://mujiota.com/wp-content/uploads/2011/05/linkwithin_settei-400x118.png 400w, https://mujiota.com/wp-content/uploads/2011/05/linkwithin_settei.png 470w" sizes="(max-width: 400px) 100vw, 400px" /></a>
  
  <p id="caption-attachment-177" class="wp-caption-text">
    LinkWithinの設定画面
  </p>
</div>

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

更に追記です。（ 2016年5月）

現在は、利用しているテーマファイルと相性が良い「Yet Another Related Posts Plugin (YARPP)」を使っています。