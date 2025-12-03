import os
import requests
from urllib.parse import quote
import time
from concurrent.futures import ThreadPoolExecutor

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")

def download_logo(company_name, output_dir):
    try:
        # Clean company name for the filename
        clean_name = company_name.lower().replace('&', 'and').replace(' ', '_')
        output_path = os.path.join(output_dir, f"{clean_name}.png")
        
        # Skip if already downloaded
        if os.path.exists(output_path):
            print(f"Skipping {company_name} - already exists")
            return True

        # Use Clearbit Logo API
        url = f"https://logo.clearbit.com/{quote(company_name.lower().replace(' ', ''))}.com"
        response = requests.get(url, stream=True)
        
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"✅ Downloaded logo for {company_name}")
            return True
        else:
            print(f"❌ Failed to download logo for {company_name} - Status code: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Error downloading logo for {company_name}: {str(e)}")
        return False

def main():
    # List of companies from portfolioData.ts
    companies = [
        "TD Smart Interior", "Studio Ardete", "Sculpt Design", "The Thekedaar",
        "AND Studio", "iDesign", "MySpace", "Urbanscape", "Design Forum",
        "Qube Health", "DocOnline", "MediBuddy", "Zava", "K Health", "Ada Health",
        "Chumbak", "The Postbox", "Jaypore", "Double J", "Wolf & Badger",
        "The Frankie Shop", "Marine Serre", "NBNW", "Bloni", "Ka-sha", "Khatie",
        "Wandler", "Khaitan & Co", "AZB & Partners", "Nishith Desai Associates",
        "LKS Legal", "Argus Partners", "Economic Laws Practice", "Clifford Chance",
        "Baker McKenzie", "DLA Piper", "Chargebee", "Hiver", "Icertis", "MoEngage",
        "Airtable", "ClickUp", "goSTOPS", "Savaari", "Treebo", "Hopper",
        "GetYourGuide", "Klook", "Poddar Housing", "Tridhaatu", "Rustomjee",
        "Bosa Properties", "Third & Urban", "Hines", "Cube Wealth", "Kuvera",
        "Scripbox", "Wealthsimple", "Nutmeg", "Stash"
    ]

    # Create output directory
    output_dir = os.path.join('src', 'assets', 'CL')
    create_directory(output_dir)

    # Download logos using thread pool for faster downloads
    with ThreadPoolExecutor(max_workers=5) as executor:
        results = list(executor.map(lambda company: download_logo(company, output_dir), companies))

    # Print summary
    successful = sum(1 for r in results if r)
    print(f"\nDownload Summary:")
    print(f"Total companies: {len(companies)}")
    print(f"Successfully downloaded: {successful}")
    print(f"Failed: {len(companies) - successful}")

if __name__ == "__main__":
    main() 