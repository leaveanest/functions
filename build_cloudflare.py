"""Build the Cloudflare Pages redirects for the retired product site."""

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "dist"


def build():
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    (OUTPUT / "_redirects").write_text(
        "/* https://k.lne.st/service/ 301\n", encoding="utf-8"
    )


if __name__ == "__main__":
    build()
