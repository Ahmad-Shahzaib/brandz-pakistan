from pathlib import Path
from PIL import Image, ImageEnhance

SOURCE = Path(r"C:\Users\PRECIS~1\AppData\Local\Temp\codex-clipboard-23d1312c-6ad4-4882-887c-b29385f3ba24.png")
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "assets" / "logos"

slugs = [
    "fri-chiks", "roosters", "timmys", "chicken-spot",
    "time-out", "yummy-36", "toasters", "paratha-express",
    "blenders", "coffeetea", "wimpy", "rice-platter",
    "fritou", "rallys", "shamana", "khadim",
    "whata-shawarma", "whata-pizza", "rolly", "dagwoods",
    "checkers", "besteiro", "chicago-pizza", "mangal",
    "14th-street-pizza", "lassi-bar", "shakes", "chaska",
    "darwish", "euro-cafe", "spice-village", "haveli",
    "melty-brothers", "haji-sahib", "mirchi", "sweet-temptations",
    "zombies", "chick-queen", "cock-n-bull", "mama-chicken",
]

# Logo cells in the supplied 453x794 reference sheet. Category labels beneath
# the cells are intentionally excluded.
x_positions = [14, 124, 234, 344]
y_positions = [5, 83, 160, 238, 315, 393, 471, 548, 626, 703]

image = Image.open(SOURCE).convert("RGB")
OUTPUT.mkdir(parents=True, exist_ok=True)

for index, slug in enumerate(slugs):
    row, column = divmod(index, 4)
    x, y = x_positions[column], y_positions[row]
    logo = image.crop((x + 2, y + 2, x + 91, y + 59))
    logo = logo.resize((534, 342), Image.Resampling.LANCZOS)
    logo = ImageEnhance.Sharpness(logo).enhance(1.3)
    logo.save(OUTPUT / f"{slug}.png", optimize=True)

print(f"Extracted {len(slugs)} logos to {OUTPUT}")
