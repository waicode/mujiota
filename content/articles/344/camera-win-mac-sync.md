---
id: 344
slug: camera-win-mac-sync
title: デジカメとWindowsとMacの写真を「同期」する方法
description: カメラとPCの写真の同期方法について書きます。「Eye-Fi」を使って自動同期しています。
createdAt: 2011-09-24T23:30:33+09:00
updatedAt: 2017-09-06T11:12:11+09:00
imageFormat: png
category: 生活術
tags:
  - 生活術
---

（追記：残念ながらEye-Fiは2016年9月にサービスが終了してしまいました。この記事で書かれている方法は、現在は利用できません。個人的にはそこそこメジャーなサービスだと思っていただけに、突然のサービス終了はちょっと驚きでした。）

11日間のギリシャ旅行から帰ってきて、一週間が経ちました。フォルムに一目惚れして購入した「COOLPIX P300」で約2000枚撮った写真を少しずつ整理しています。こんなに写真を撮ったのは、初めて。

この方法を実践すれば、デジカメ[^1]とWindows/Mac[^2]で写真を完全同期する事が可能です。

[^1]: ここで言う「デジカメ」はSDCard挿しっ放しのデジカメを意味し、カード内のデータをPCと同期します。  
[^2]: WindowsとMacで無くても複数PC間で同期が可能です。

利用するのは、以下の2つのアイテム及びサービス。（Eye-Fiは有料です。SugarSyncは無料で使えます。）

* Eye-Fi（追記：残念ながらEye-Fiはサービス終了してしました…。）
* <a href="http://www.sugarsync.jp/" target="_blank" rel="noopener">SugarSync</a>

## カメラからPCへの画像転送はEye-fiで

ご存知の方も多いかとは思いますが、Eye-Fiとは<strong>「画像転送機能を持ったSDカード」</strong>です。

設定しているwi-fiの無線範囲内に入り、かつ、その範囲内に転送対象PCが存在すると、自動的に画像をPCへつぎつぎと転送してくれます。

この時、同時に<a href="https://picasaweb.google.com/home" target="_blank" rel="noopener">PicasaWeb</a>などの画像管理Webサービスにも画像を転送する事ができます。

Pro版（8GB）を使って、PCとPicasaWebに転送する設定で利用しています。

PRO版は若干値が張りますが、ジオタグ（位置情報）を付与する機能があったり、Wi-Fi環境が無くても機器同士で直接転送（アドホック転送）できる機能があるので、数千円程度の違いならとこちらを購入しました。

ただし、使ってみての感想を書くと、ジオタグはWi-Fiを利用したWPS (Wi-Fi Positioning System)を使っていて、GPSのものと比べると若干精度が悪いです。（ギリシャで撮影した写真にも、ほとんど付与されていなかった…）

直接転送機能も旅行中にこれは便利と思い使ってみたものの、数千枚の写真を順番に一気に転送する仕様となっており、画像が選べない＆転送速度が遅いため使い物になりませんでした。ある特定の画像だけ選択して直接転送できれば、iPhoneに1つだけ画像転送してそれをFaceBookにアップするなど、使い道が広がるのに惜しい所です。

よってこれから購入を検討している方は、安価版のConnect（4GB）かMobile（8GB）で個人的には十分かと思います。

このEye-Fi、使ってみると予想以上にその便利さを実感できます。写真を撮って、家の中にカメラを置いておけばいつの間にかPCの中に写真が入っています。

* カードを挿し替えて
* データを移動させて

という二手間が省けるので、ブログやSNSへの写真アップロードがとても楽になります。

ちなみに、Eye-Fiにはエンドレス転送モードという<strong>古くなった転送済データを自動削除してくれる機能</strong>があるので、一度カメラに入れたら、ずーっと挿しっぱなしでも問題ありません。

## PC同士のファイル転送はSugarSyncで

この大変便利なEye-Fiですが<strong>画像転送対象PCは1つだけしか設定できない</strong>ので、この弱点を「ファイル同期サービス」を利用して補います。

<strong>「SugarSync」</strong>の登場です。

<capture-image article-id="344" img-file-name="20110922_sugarsync.jpg" caption="SugarSync"></capture-image>

* <a href="https://www1.sugarsync.com/jp/" target="_blank" rel="noopener">SugarSync</a>

こちらもすでに有名なサービスですが、簡単に内容を説明します。

SugarSyncはWEB上にファイル保存スペース（オンラインストレージ）を借りて、複数のPC間で設定したフォルダ内のファイルを同期できるWEBサービスです。しかも、2011年9月現在では5GBまでは無料で利用できるという太っ腹ぶりです。

以下のキャプチャ画像の様に、同期対象フォルダを指定してやれば、PCが稼働している時に同期を行いいつの間にか同期が完了しています。

<capture-image article-id="344" img-file-name="20110922_picSync.png" caption="SugarSyncの同期設定"></capture-image>

同様のサービスで<strong>「DropBox」</strong>もあります。こちらも併用して使っています。

<capture-image article-id="344" img-file-name="20110922_dropbox1.jpg" caption="DropBox"></capture-image>

* <a href="https://www.dropbox.com/" target="_blank" rel="noopener">DropBox</a>

DropBoxも連携サービスが豊富で大変便利ですが、こちらは同期対象フォルダを指定できません。（「DropBox」という専用のフォルダのみ、同期対象となります。）

2011年9月現在では無料で使える初期容量が2GBという事もあり、「マイピクチャ」フォルダを同期させたい場合はSugarSyncの方が使い勝手が良いです。

ファイル同期サービスも大変便利なサービスですので、使った事が無い方は、是非とも試してみる事をお勧めします。とても便利でフル活用しているファイル同期サービスですが、最近はSugarSyncもDropBoxも容量オーバー気味で、整理に頭を抱えています。

有料版にするとぐっと容量は増えますが、年間に5000円～10000円程度の費用が嵩むことになるので悩ましい所です。SugarSyncやDropBoxは、<strong>紹介制度による容量増加サービス</strong>を行っており、紹介経由で登録をした場合には、紹介した人、紹介された人共に容量が増える仕組みになっています。

* <a href="https://www.sugarsync.com/referral?rf=e2vsykvvo3682&utm_source=txemail&utm_medium=email&utm_campaign=referral" target="_blank" rel="noopener">SugarSync（紹介リンク）</a>
* <a href="http://db.tt/SWQUWv1" target="_blank" rel="noopener">DropBox（紹介リンク）</a>

この記事を読んで、使ってみようかなと思った方は、上記のご紹介リンクからご登録頂ければ幸いです。SugarSyncは有料プラン説明画像の右下の方にある「無料5GBプランはこちら」から登録できます。ちょっと分かりにくいですね。
