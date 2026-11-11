"""Build the public static site without shipping Heroku or editor files."""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "dist"
PUBLIC_SUFFIXES = {".html", ".css", ".js", ".map", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico", ".webmanifest", ".woff", ".woff2", ".pdf"}
PUBLIC_DIRECTORIES = {"css", "js", "img", "products", "pricing", "terms"}


def build():
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    count = 0
    for source in ROOT.rglob("*"):
        relative = source.relative_to(ROOT)
        if any(part.startswith(".") for part in relative.parts):
            continue
        if len(relative.parts) > 1 and relative.parts[0] not in PUBLIC_DIRECTORIES:
            continue
        if not source.is_file() or source.suffix.lower() not in PUBLIC_SUFFIXES:
            continue
        destination = OUTPUT / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)
        count += 1
    (OUTPUT / "_redirects").write_text("/index.php / 301\n", encoding="utf-8")
    (OUTPUT / "404.html").write_text(
        '<!doctype html><html lang="ja"><meta charset="utf-8">'
        '<title>404 Not Found</title><h1>404 Not Found</h1>'
        '<p><a href="/">トップページへ</a></p></html>\n', encoding="utf-8"
    )
    print(f"Built {count} static files in {OUTPUT}")


if __name__ == "__main__":
    build()
