import os
from cairosvg import svg2png

def convert_svg_to_png(svg_path):
    try:
        # Read the SVG file
        with open(svg_path, 'rb') as f:
            svg_data = f.read()
        
        # Convert to PNG with transparency
        png_data = svg2png(bytestring=svg_data, output_width=500, output_height=500)
        
        # Save the PNG
        with open(svg_path, 'wb') as f:
            f.write(png_data)
        
        print(f"Successfully converted {os.path.basename(svg_path)}")
    except Exception as e:
        print(f"Error converting {os.path.basename(svg_path)}: {str(e)}")

# List of SVG files with .png extension
svg_files = [
    'src/assets/ClientLogos/classplus.png',
    'src/assets/ClientLogos/vedantu.png',
    'src/assets/ClientLogos/qubehealth.png',
    'src/assets/ClientLogos/azb.png',
    'src/assets/ClientLogos/kuvera.png'
]

# Process each SVG file
for file_path in svg_files:
    if os.path.exists(file_path):
        convert_svg_to_png(file_path)
    else:
        print(f"File not found: {file_path}") 