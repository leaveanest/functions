# Functions from L Webサイト SessionSave エージェントガイド

## 思考と出力
- 思考は英語、回答は日本語で行う。

## プロジェクト基本情報
- Webサイトの開発プロジェクトです
  - https://functions.lne.st/
- Githubリポジトリはこちら
  - https://github.com/leaveanest/functions
    - mainにマージするとHeroku上で更新がかかり自動的にサイトが更新されます

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