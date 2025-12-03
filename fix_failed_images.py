from PIL import Image
import os

def fix_image(image_path):
    try:
        # Open the image
        img = Image.open(image_path)
        
        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Save with transparency
        img.save(image_path, 'PNG')
        print(f"Successfully fixed {os.path.basename(image_path)}")
    except Exception as e:
        print(f"Error fixing {os.path.basename(image_path)}: {str(e)}")

# List of failed images
failed_images = [
    'src/assets/ClientLogos/classplus.png',
    'src/assets/ClientLogos/vedantu.png',
    'src/assets/ClientLogos/qubehealth.png',
    'src/assets/ClientLogos/azb.png',
    'src/assets/ClientLogos/kuvera.png'
]

# Process each failed image
for image_path in failed_images:
    if os.path.exists(image_path):
        fix_image(image_path)
    else:
        print(f"File not found: {image_path}") 