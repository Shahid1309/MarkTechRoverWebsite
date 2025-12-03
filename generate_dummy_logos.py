from PIL import Image, ImageDraw, ImageFont
import os

def create_dummy_logo(company_name, output_path, size=(200, 100)):
    # Create a transparent image
    image = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    
    # Get company initials
    initials = ''.join(word[0].upper() for word in company_name.split())
    
    # Draw a light background rectangle
    rect_color = (200, 200, 200, 50)  # Light gray with transparency
    draw.rectangle([(0, 0), size], fill=rect_color, outline=(150, 150, 150, 100))
    
    # Calculate text size and position
    font_size = min(size) // 2
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Get text size
    text_bbox = draw.textbbox((0, 0), initials, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    # Calculate center position
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    
    # Draw text
    draw.text((x, y), initials, fill=(100, 100, 100, 255), font=font)
    
    # Save the image
    image.save(output_path, 'PNG')

# List of company names
companies = [
    'Tech Solutions',
    'Digital Innovations',
    'Creative Design',
    'Web Services',
    'Cloud Computing',
    'Data Analytics',
    'Mobile Apps',
    'Software Solutions',
    'IT Consulting',
    'Network Systems',
    'Security Solutions',
    'Business Tech',
    'Smart Systems',
    'Digital Marketing',
    'Web Development',
    'AI Solutions',
    'Tech Consulting',
    'Cloud Services',
    'Data Systems',
    'IT Solutions'
]

# Create output directory if it doesn't exist
os.makedirs('src/assets/ClientLogos', exist_ok=True)

# Generate dummy logos for each company
for i, company in enumerate(companies, 1):
    output_path = f'src/assets/ClientLogos/company{i}.png'
    create_dummy_logo(company, output_path)
    print(f'Created dummy logo for {company}') 