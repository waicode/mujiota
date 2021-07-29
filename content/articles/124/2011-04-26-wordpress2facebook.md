---
title: WordPressとFacebookの連携はWordBookerで（追記：Facebook API の仕様変更に伴い使えなくなりました。現時点では公式プラグインを使うのが最も無難な選択です。）
author: aiza_wai
type: post
date: 2011-04-26T14:00:36+09:00
url: /124/wordpress2facebook/
featured_image: /wp-content/uploads/2011/04/110426_wordbooker_728x448.png
wordbooker_options:
  - 'a:10:{s:18:"wordbook_noncename";s:10:"d637c83acf";s:18:"wordbook_page_post";s:15:"148216695246471";s:18:"wordbook_orandpage";s:1:"2";s:23:"wordbook_default_author";s:1:"1";s:23:"wordbook_extract_length";s:3:"256";s:19:"wordbook_actionlink";s:3:"300";s:26:"wordbooker_publish_default";s:2:"on";s:18:"wordbook_attribute";s:12:"無印発信";s:29:"wordbooker_status_update_text";s:35:": New blog post :  %title% - %link%";s:20:"wordbook_comment_get";s:2:"on";}'
wordbooker_thumb:
  - http://64.der.tools/wp-content/uploads/2011/04/wp-fb.png
wordbooker_extract:
  - |
    設定が何かと面倒だったので先延ばしにしていたのですが、
    本日、WordPressとFacebookの連携に成功しました。
    
    WordPressとtwitterの連携は、tweetableで実現。
    こっちはプラグイン使って比較的簡単に設定できるのできました。
    
    
    Tweetableを入れてみた
    
    
    faceb ...
pvc_views:
  - 25239
views:
  - 31
topsy_short_url:
  - http://bit.ly/p9UXaQ
scc_share_count_twitter:
  - -1
scc_share_count_facebook:
  - -1
scc_share_count_pocket:
  - 2
scc_share_count_crawldate:
  - 2020/02/11 06:23:15
scc_share_count_total:
  - 2
categories:
  - WordPress

---
設定が何かと面倒だったので先延ばしにしていたのですが、本日「WordBooker」というプラグインを使ってWordPressとFacebookの連携に成功しました。（注意：現在は使えなくなったため、別の連携方法を記載しています。）

<!--more-->

WordPressとtwitterの連携は、tweetableで実現。こっちはプラグイン使って比較的簡単に設定できるのできました。

  * <a href="https://mujiota.com/69/tweetable%E3%82%92%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%BF%E3%81%9F/" target="_blank">Tweetableを入れてみた</a>

facebookも色々プラグインが用意されていて、簡単にできるかと思いきや、何かと設定が複雑なものも多いです。以下のプラグインを試してみましたが、設定に不備があったようで、私の環境では連携する事ができませんでした。

  * Status Updater
  * WPBook

Status Updater はアプリページとの連携がうまくいかず。WPBookについては、調べてみた結果、現時点の最新バージョンであるv2.2だと連携できなくなっているとのこと。 ※ 2011年4月時点です。

で、試行錯誤の末に連携成功したプラグインがこちら。（追記：Facebook API の仕様変更に伴い、現在は使えません。）

  * <a href="http://wordbooker.tty.org.uk/" target="_blank" class="broken_link">WordBooker</a>

**WordBooker**でプラグイン検索すればHITします。設定についても、Facebook側へアプリページを新規に作る必要が無いので、ものすごく簡単でした。

以下のページを参考にしました。詳細な設定方法は載っていませんが、連携自体の設定はとても簡単なので問題は無いはず。（但し、こればかりはどうしようも無いですが、設定画面は英語です。）

  * <a href="http://age-d.com/alog/2011/03/145wordpressxfacebook2/" target="_blank">WordPressをFacebookと連携させてみた</a>

上記ページではWPBookerと表現していますが、現在の正式名称は「**WordBooker**」なのでご注意ください。これを使えば、Facebookとコメントまで連携可能です。簡単設定にも関わらず、痒いところまで手が届いている素晴らしいプラグインだと思います。

現在は以下の設定で連携しています。

<div id="attachment_125" style="width: 311px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/04/wordbooker_help.png"><img aria-describedby="caption-attachment-125" class="size-medium wp-image-125" title="WordBookerの設定画面" src="https://mujiota.com/wp-content/uploads/2011/04/wordbooker_help-301x400.png" alt="WordBookerの設定画面" width="301" height="400" srcset="https://mujiota.com/wp-content/uploads/2011/04/wordbooker_help-301x400.png 301w, https://mujiota.com/wp-content/uploads/2011/04/wordbooker_help.png 692w" sizes="(max-width: 301px) 100vw, 301px" /></a>
  
  <p id="caption-attachment-125" class="wp-caption-text">
    設定画面（クリックで拡大）
  </p>
</div>

とりあえず、以下の2つにチェック入れとけば、facebookへの投稿とコメントの連携ができるかと思います。

  * Default Publish Post to Facebook
  * Enable Extended description for Share Link

* * *

追記です。

WordBookerで設定しているにも関わらず、どうもFaceBookへ投稿されていない時があるので調査してみました。

どうやら、予約公開の場合は投稿画面下のWordBooker設定エリアにある「Force Re-Publish Post to Facebook on Edit」にチェックを入れないと投稿されないようです。

今までこの投稿時設定の存在を意識していませんでしたが、ここで設定すればFanページへの同時投稿設定も可能です。

<div id="attachment_222" style="width: 410px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo.png"><img aria-describedby="caption-attachment-222" class="size-medium wp-image-222" title="投稿画面下のWordBooker設定" src="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo-400x146.png" alt="投稿画面下のWordBooker設定" width="400" height="146" srcset="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo-400x146.png 400w, https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo.png 871w" sizes="(max-width: 400px) 100vw, 400px" /></a>
  
  <p id="caption-attachment-222" class="wp-caption-text">
    投稿画面下のWordBooker設定
  </p>
</div>

毎回チェックを入れるのが面倒な場合は、プラグイン設定画面からデフォルトでチェックを入れる設定にすることもできます。

<div id="attachment_223" style="width: 410px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo_02.png"><img aria-describedby="caption-attachment-223" class="size-medium wp-image-223" title="Wodbookerのプラグイン設定画面" src="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo_02-400x215.png" alt="Wodbookerのプラグイン設定画面" width="400" height="215" srcset="https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo_02-400x215.png 400w, https://mujiota.com/wp-content/uploads/2011/04/facebooker_memo_02.png 689w" sizes="(max-width: 400px) 100vw, 400px" /></a>
  
  <p id="caption-attachment-223" class="wp-caption-text">
    Wodbookerのプラグイン設定画面
  </p>
</div>

但し、この設定にすると記事を「更新」するたびに毎回Facebookに投稿されるようになるので、記事をちょっと直して更新、みたいな事を繰り返す時は要注意。チェックを外しておかないと、同じような記事がどんどんFacebookに投稿されてしまいます。

Fanページへの同時投稿設定もデフォルトでできたら嬉しいのですが、そちらはまだできない模様…プラグインのアップデートに期待です。

* * *

さらに追記です。

私が見落としていただけで、  
Fanページへの同時投稿設定もデフォルトで設定する事が可能でした！

「Blog Level Customisation」設定部分の下にある、  
「**User Level Customisation**」で設定が可能でした。

<div id="attachment_352" style="width: 410px" class="wp-caption aligncenter">
  <a href="https://mujiota.com/wp-content/uploads/2011/04/20110922_wordbooker.png"><img aria-describedby="caption-attachment-352" class="size-medium wp-image-352" title="Fanページ投稿のデフォルト設定も可能！" src="https://mujiota.com/wp-content/uploads/2011/04/20110922_wordbooker-400x218.png" alt="Fanページ投稿のデフォルト設定も可能！" width="400" height="218" srcset="https://mujiota.com/wp-content/uploads/2011/04/20110922_wordbooker-400x218.png 400w, https://mujiota.com/wp-content/uploads/2011/04/20110922_wordbooker.png 718w" sizes="(max-width: 400px) 100vw, 400px" /></a>
  
  <p id="caption-attachment-352" class="wp-caption-text">
    Fanページ投稿のデフォルト設定も可能！
  </p>
</div>

上記のように設定すれば、投稿を新規追加時に、WordBooker設定パネルが初期状態でFanページへ同時投稿される設定となります。

当初、この記事を書いたのは2011年4月頃ですが、その頃から何度かアップデートを重ね、さらに使いやすくなっている（気がする）WordBooker。WordPress⇔Facebook連携の鉄板になりつつあるのではないでしょうか。

* * *

おそらく最後の追記です。（2016年5月）

便利だったWordBookerですが、Facebook APIの仕様変更に伴い、現在は使い物にならなくなっているようです。この手のプラグインは、サービス元の変化に柔軟かつ継続して対応していかなければならないので、プラグイン公開側も対応が大変ですね。

現在はFacebookが<a href="https://wordpress.org/plugins/facebook/" target="_blank">公式プラグイン</a>を公開しているので、それを使うのが最も無難な選択でしょう。但し、Facebook Developersへの登録が必須のため、導入の敷居は少し高いかもしれません。

WordPressの便利ツールをまとめた鉄板プラグインJetpackにもSNS連携機能（パブリサイズ共有機能）があり、これを利用するのも１つの手です。連携先のFacebookページさえ作っていれば、比較的ライトに接続できます。

但し、Jetpackのパブリサイズ共有機能には致命的な点が１つだけあります。それは、<span class="line-marker">最初の公開時のみSNS共有可能で過去記事や更新時は共有ができない</span>という点です。Jetpackは総じてすばらしいプラグインなのですが、パブリサイズ共有機能に限って言えばこの点が不便だったため、私は利用を見送っています。