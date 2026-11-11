# Functions from L Webサイト SessionSave エージェントガイド

## 思考と出力
- 思考は英語、回答は日本語で行う。

## プロジェクト基本情報
- Webサイトの開発プロジェクトです
  - https://functions.lne.st/
- Githubリポジトリはこちら
  - https://github.com/leaveanest/functions
    - mainへのpushでCloudflare Pagesの `functions-lk` に自動配備されます
    - 配備先は ask@k.lne.st、lne.st のDNS管理は info@lne.st のCloudflareアカウントです
    - ビルドは `python3 build_cloudflare.py`、公開ディレクトリは `dist` です

## サイト構成
- シンプルなHTMLです。CMSは使っていません

## テストについて
- http://localhost:8000/index.html
  - ここで見ることができるようになっています
  - スクリーンショットを撮って、思った挙動をしているか確認してください
  - スクリーンショットはdocs/screenshot/ 内に格納すること

## mainにマージする際には
- 作業メモをdocs内に残してからマージをすること
- docsフォルダは.gitignoreに入れてpushされないようにしてください
- ユーザーから"push"と言われた場合は、作業ブランチをmainにマージしてGithubにpushしてください

## SessionSaveについて
- このリポジトリで開発されているアプリです
  - https://github.com/leaveanest/SessionSave
- このプロジェクトでは、このアプリの告知用サイトを作ります
  - サイトは functions.lne.st の製品の一つとして位置づけられます
  - URLはこちらの想定です
    - https://functions.lne.st/products/SessionSave/
  - アプリはAppleのApp Storeに公開されています。URLはこちらです
    - https://apps.apple.com/jp/app/sessionsave/id6751438786
    - インストール用のリンクなどはこれをつかってください
