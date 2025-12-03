from PIL import Image, ImageDraw, ImageFont
import os

# Create the ClientLogos directory if it doesn't exist
os.makedirs('src/assets/ClientLogos', exist_ok=True)

# List of missing logos
missing_logos = [
    'studioardete.png',
    'medibuddy.png',
    'marineserre.png',
    'cube.png',
    'scripbox.png',
    'amity.png',
    'aditaybirla.png',
    'saturn.png'
]

def create_placeholder_logo(filename, text):
    # Create a new image with a white background
    width = 200
    height = 100
    image = Image.new('RGB', (width, height), 'white')
    draw = ImageDraw.Draw(image)
    
    # Draw a border
    draw.rectangle([0, 0, width-1, height-1], outline='black')
    
    # Add text
    draw.text((width/2, height/2), text, fill='black', anchor='mm')
    
    # Save the image
    image.save(f'src/assets/ClientLogos/{filename}')
    print(f'Created placeholder for {filename}')

# Create placeholder logos
for logo in missing_logos:
    company_name = logo.replace('.png', '').title()
    create_placeholder_logo(logo, company_name)

print('Placeholder logos created successfully!') 