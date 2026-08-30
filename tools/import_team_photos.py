"""Turn whatever headshots are dropped in incoming-photos/ into site avatars.

Each photo is centre-cropped to a square and written to public/team/ under the
filename the site already points at, so the page needs no edit once this has
run. Matching is by first name where the filename gives one, and by leading
number otherwise.

    python tools/import_team_photos.py
"""

import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
DROP = ROOT / "incoming-photos"
OUT = ROOT / "public" / "team"
SIZE = 640

# The order here is the order the numbered fallback uses.
PEOPLE = [
    ("ravindu-subasingha", ("ravindu", "subasingha")),
    ("nimthera-gunasena", ("nimthera", "gunasena")),
    ("hamna-rahmathullah-hakeem", ("hamna", "rahmathullah", "hakeem")),
    ("malith-bandara", ("malith", "bandara")),
]

SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif", ".tif", ".tiff"}


def photos():
    """Every image in the drop folder, in a stable order."""
    found = [p for p in sorted(DROP.iterdir()) if p.suffix.lower() in SUFFIXES]
    return found


def match(files):
    """Pair each person with a file, by name first and by position second."""
    pairs = {}
    left = list(files)

    for slug, names in PEOPLE:
        for path in list(left):
            stem = path.stem.lower()
            if any(name in stem for name in names):
                pairs[slug] = path
                left.remove(path)
                break

    # Anything still unmatched falls back to a leading number, then to order.
    numbered = sorted(
        (p for p in left if re.match(r"^\s*[1-4]\b", p.stem)),
        key=lambda p: p.stem,
    )
    rest = [p for p in left if p not in numbered]
    queue = numbered + rest

    for slug, _ in PEOPLE:
        if slug in pairs:
            continue
        if queue:
            pairs[slug] = queue.pop(0)
    return pairs


def square(path, target):
    """Centre-crop to a square, correct the orientation, and save."""
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        side = min(im.size)
        left = (im.width - side) // 2
        # Faces sit above centre in a headshot, so bias the crop upwards.
        top = max(0, (im.height - side) // 2 - round(side * 0.06))
        im = im.crop((left, top, left + side, top + side))
        im = im.resize((SIZE, SIZE), Image.LANCZOS)
        im.save(target, "JPEG", quality=92, optimize=True, progressive=True)


def main():
    if not DROP.is_dir():
        sys.exit(f"There is no {DROP}. Create it and drop the four photos in.")

    files = photos()
    if not files:
        sys.exit(f"No images found in {DROP}. Drop the four headshots in first.")

    pairs = match(files)
    OUT.mkdir(parents=True, exist_ok=True)

    for slug, names in PEOPLE:
        source = pairs.get(slug)
        if not source:
            print(f"  no photo matched {slug} - the placeholder stays")
            continue
        square(source, OUT / f"{slug}.jpg")
        print(f"  {source.name} -> public/team/{slug}.jpg")

    missing = [slug for slug, _ in PEOPLE if slug not in pairs]
    if missing:
        print(f"\nStill on a placeholder: {', '.join(missing)}")
    else:
        print("\nAll four photos are in.")


if __name__ == "__main__":
    main()
