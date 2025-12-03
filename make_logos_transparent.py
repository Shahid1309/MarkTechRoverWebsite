import os
from PIL import Image
from rembg import remove
from pathlib import Path

def make_transparent(input_path, output_path):
    # Read image
    input_image = Image.open(input_path)
    
    # Remove background
    output_image = remove(input_image)
    
    # Save with transparency
    output_image.save(output_path, format='PNG')

def process_logos():
    # Get the directory containing the logos
    logo_dir = Path('src/assets/ClientLogos')
    
    # Create a temporary directory for processed images
    temp_dir = Path('src/assets/ClientLogos_temp')
    temp_dir.mkdir(exist_ok=True)
    
    # Process each image
    for file_path in logo_dir.glob('*'):
        if file_path.suffix.lower() in ['.png', '.jpg', '.jpeg']:
            print(f"Processing {file_path.name}...")
            
            # Create output path
            output_path = temp_dir / f"{file_path.stem}.png"
            
            try:
                make_transparent(file_path, output_path)
                print(f"Successfully processed {file_path.name}")
            except Exception as e:
                print(f"Error processing {file_path.name}: {str(e)}")
    
    # Replace original files with processed ones
    for file_path in temp_dir.glob('*.png'):
        target_path = logo_dir / file_path.name
        os.replace(file_path, target_path)
    
    # Remove temporary directory
    temp_dir.rmdir()

if __name__ == "__main__":
    process_logos() 