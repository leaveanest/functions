# Functions from L 製品案内サイト

2026年11月27日の公開終了に伴い、https://functions.lne.st/ のすべてのパスを https://k.lne.st/service/ に301転送する。製品ページ、料金、利用規約、旧静的資産への直接アクセスにも同じ転送を適用する。

Cloudflare Pages の `functions-lk` は `main` への push で `python3 build_cloudflare.py` を実行し、`dist/_redirects` を配備する。ホスティングは ask@k.lne.st、lne.st の DNS は info@lne.st で管理する。

再公開が必要な場合はこの変更を revert して再配備する。直前の本番ソースは `2ad69e1b939ad9bacdced59e2421f5943cfca600`。
