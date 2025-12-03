import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import time

# Create the ClientLogos directory if it doesn't exist
os.makedirs('src/assets/ClientLogos', exist_ok=True)

# List of websites and their corresponding logo filenames
websites = {
    'https://tdsmartinterior.com/': 'tdsmartinterior.png',
    'https://studioardete.com/': 'studioardete.png',
    'https://sculptdesignstudio.com/': 'sculpt.png',
    'https://www.qubehealth.com/': 'qubehealth.png',
    'https://www.doconline.com/': 'doconline.png',
    'https://www.medibuddy.in/': 'medibuddy.png',
    'https://www.chumbak.com/': 'chumbak.png',
    'https://www.jaypore.com/': 'jaypore.png',
    'https://www.marineserre.com/': 'marineserre.png',
    'https://www.khaitanco.com/': 'khaitan.png',
    'https://www.lakshmisri.com/': 'lks.png',
    'https://www.azbpartners.com/': 'azb.png',
    'https://www.cubewealth.com/': 'cube.png',
    'https://kuvera.in/': 'kuvera.png',
    'https://www.scripbox.com/': 'scripbox.png',
    'https://www.poddarhousing.com/': 'poddar.png',
    'https://www.rustomjee.com/': 'rustomjee.png',
    'https://www.gostops.com/': 'gostops.png',
    'https://www.savaari.com/': 'savaari.png',
    'https://www.vedantu.com/': 'vedantu.png',
    'https://classplusapp.com/': 'classplus.png',
    'https://www.chargebee.com/': 'chargebee.png',
    'https://hiverhq.com/': 'hiver.png',
}

# Additional logos to download from specific URLs
additional_logos = {
    'amity': ('https://amity.edu/assets/images/logo-amity.png', 'amity.png'),
    'aditaybirla': ('https://www.adityabirla.com/assets/images/logo.png', 'aditaybirla.png'),
    'saturn': ('https://www.saturnconsulting.com/wp-content/themes/saturn/images/logo.png', 'saturn.png')
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def download_logo(url, filename):
    try:
        # Get the webpage
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Look for common logo elements
        logo_selectors = [
            'img[src*="logo"]',
            'img[alt*="logo"]',
            'img[class*="logo"]',
            'img[id*="logo"]',
            '.logo img',
            '#logo img'
        ]
        
        logo_url = None
        for selector in logo_selectors:
            logo_element = soup.select_one(selector)
            if logo_element and logo_element.get('src'):
                logo_url = logo_element['src']
                break
        
        if logo_url:
            # Make the URL absolute if it's relative
            if not logo_url.startswith(('http://', 'https://')):
                logo_url = urljoin(url, logo_url)
            
            # Download the logo
            logo_response = requests.get(logo_url, headers=headers, timeout=10)
            logo_response.raise_for_status()
            
            # Save the logo
            with open(f'src/assets/ClientLogos/{filename}', 'wb') as f:
                f.write(logo_response.content)
            print(f'Successfully downloaded {filename}')
        else:
            print(f'Could not find logo on {url}')
    
    except Exception as e:
        print(f'Error downloading logo from {url}: {str(e)}')

# Download logos from websites
for website_url, logo_filename in websites.items():
    print(f'Downloading logo from {website_url}...')
    download_logo(website_url, logo_filename)
    time.sleep(1)  # Be nice to the servers

# Download additional logos
for name, (logo_url, filename) in additional_logos.items():
    print(f'Downloading {name} logo...')
    try:
        response = requests.get(logo_url, headers=headers, timeout=10)
        response.raise_for_status()
        with open(f'src/assets/ClientLogos/{filename}', 'wb') as f:
            f.write(response.content)
        print(f'Successfully downloaded {filename}')
    except Exception as e:
        print(f'Error downloading {name} logo: {str(e)}')
    time.sleep(1)

print('Logo download process completed!') 