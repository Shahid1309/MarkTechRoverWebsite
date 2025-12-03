import requests
import os

# Create the ClientLogos directory if it doesn't exist
os.makedirs('src/assets/ClientLogos', exist_ok=True)

# Direct URLs for missing logos (updated with different URLs)
missing_logos = {
    'studioardete.png': 'https://media.licdn.com/dms/image/C510BAQGhGYy3OB7T0g/company-logo_200_200/0/1519899796206?e=2147483647&v=beta&t=ZX9kWYtQ8K1J1KZ1J1J1KZ1J1KZ1J1J1KZ1J1KZ1',
    'medibuddy.png': 'https://play-lh.googleusercontent.com/CmrQhZzQGnwDxUTyQ5JHv9-uKuHgzCxNmxKD5Ja-nBxZGWuk1PCTGiXVh6xjviQq7A=w240-h480-rw',
    'marineserre.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Marine_Serre_logo.svg/1200px-Marine_Serre_logo.svg.png',
    'cube.png': 'https://play-lh.googleusercontent.com/Mq1ZkUf8SlXHDSKOMg7v6tr1qGzHQZ0rqnm7yY-DPQlEqw8DKZnZPTi_17ghHiqVYw=w240-h480-rw',
    'scripbox.png': 'https://play-lh.googleusercontent.com/Mf_EG_nL3OJVGVxPzGXwBbj2XXZ8J5NOFJn-h-lX9BC_xvHnzuBH0VQHYBVzBFXkDOI=w240-h480-rw',
    'chargebee.png': 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=w240-h480-rw',
    'amity.png': 'https://play-lh.googleusercontent.com/GzY-3JYo4Om7Z7hKPz4kS5M2n-SdRm7aPE-dAqxN9R3Z_Ue-UWWK0MQNWQHVcRLvuQ=w240-h480-rw',
    'aditaybirla.png': 'https://www.adityabirlacapital.com/abc_cms/media/images/abc_logo.png',
    'saturn.png': 'https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=2147483647&v=beta&t=ZrCa_mhLO48T4u_3fSmKTjE_yHM7-EhVNpwsz06f-Fo'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for filename, url in missing_logos.items():
    print(f'Downloading {filename}...')
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        with open(f'src/assets/ClientLogos/{filename}', 'wb') as f:
            f.write(response.content)
        print(f'Successfully downloaded {filename}')
    except Exception as e:
        print(f'Error downloading {filename}: {str(e)}')
    
print('Missing logos download process completed!') 