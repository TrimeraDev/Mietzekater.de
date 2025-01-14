from PIL import Image
import os

# Input and output paths
input_image = 'assets/MietzekaterIcon.webp'
output_dir = 'assets/favicons'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Open the image
img = Image.open(input_image)

# Favicon sizes
sizes = [
    16, 32, 48,  # .ico standard sizes
    180,  # Apple touch icon
    192,  # Android
    512   # Large app icon
]

# Generate PNG favicons
for size in sizes:
    favicon = img.copy()
    favicon.thumbnail((size, size), Image.Resampling.LANCZOS)
    favicon.save(f'{output_dir}/favicon-{size}x{size}.png')

# Generate .ico file with multiple sizes
ico_sizes = [16, 32, 48]
ico_images = []
for size in ico_sizes:
    favicon = img.copy()
    favicon.thumbnail((size, size), Image.Resampling.LANCZOS)
    ico_images.append(favicon)

ico_images[0].save(
    f'{output_dir}/favicon.ico', 
    format='ICO', 
    sizes=[(im.width, im.height) for im in ico_images]
)

# Generate SVG (copy of original if it's an SVG, or create a simple SVG)
print("Favicon generation complete!")
