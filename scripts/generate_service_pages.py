#!/usr/bin/env python3
"""
Script to generate all service pages for the website
"""

import os
import re
from pathlib import Path

# Service page configurations
SERVICE_PAGES = {
    # SEO & Lead Generation
    'ChatOptimization': {
        'title': 'Generative Engine & Chat Optimization Delhi | Best Chat Optimization Company NCR',
        'description': 'Leading generative engine and chat optimization in Delhi NCR. Best chat optimization company in Delhi offering comprehensive AI chat optimization. Professional chat optimization services India with proven results.',
        'keywords': [
            'Chat Optimization Delhi',
            'Best chat optimization company in Delhi',
            'Chat optimization services NCR',
            'Best chat optimization services in India',
            'Professional chat optimization services India',
            'Chat optimization experts in Delhi NCR',
            'Chat optimization company India',
            'SEO services in Delhi',
            'AI chat optimization Delhi',
            'Generative engine optimization India'
        ],
        'url': '/services/seo-lead-generation/chat-optimization',
        'section': 'Chat Optimization',
        'tags': ['Chat Optimization', 'AI Chat', 'Generative Engine', 'Chatbot Optimization', 'AI Optimization'],
        'image': '/images/chat-optimization.webp',
        'hero_title': 'Generative Engine & Chat Optimization in Delhi',
        'hero_subtitle': 'Best chat optimization company in Delhi NCR offering comprehensive AI chat optimization. Professional chat optimization services India with proven results and ROI.',
        'cta_text': 'Get Chat Optimization Quote',
        'stats': [
            {'value': '₹800M+', 'label': 'Revenue Generated for Clients'},
            {'value': '350%', 'label': 'Average Chat Performance Increase'},
            {'value': '97%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EnterprisePPC': {
        'title': 'Enterprise PPC Management Services Delhi | Best Enterprise PPC Agency NCR',
        'description': 'Leading enterprise PPC management services in Delhi NCR. Best enterprise PPC agency in Delhi offering comprehensive PPC management. Professional enterprise PPC services India with proven results.',
        'keywords': [
            'Enterprise PPC Management Delhi',
            'Best enterprise PPC agency in Delhi',
            'Enterprise PPC services NCR',
            'Best enterprise PPC services in India',
            'Professional enterprise PPC services India',
            'Enterprise PPC experts in Delhi NCR',
            'Enterprise PPC company India',
            'SEO services in Delhi',
            'PPC management Delhi',
            'Enterprise advertising India'
        ],
        'url': '/services/seo-lead-generation/enterprise-ppc',
        'section': 'Enterprise PPC Management',
        'tags': ['Enterprise PPC', 'PPC Management', 'Enterprise Advertising', 'Google Ads', 'PPC Optimization'],
        'image': '/images/enterprise-ppc.webp',
        'hero_title': 'Enterprise PPC Management Services in Delhi',
        'hero_subtitle': 'Best enterprise PPC agency in Delhi NCR offering comprehensive PPC management. Professional enterprise PPC services India with proven results and ROI.',
        'cta_text': 'Get Enterprise PPC Quote',
        'stats': [
            {'value': '₹1.5B+', 'label': 'Revenue Generated for Clients'},
            {'value': '280%', 'label': 'Average ROI for Enterprise PPC'},
            {'value': '96%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'SocialMediaAds': {
        'title': 'Social Media Advertising Delhi | Best Social Media Ads Agency NCR',
        'description': 'Leading social media advertising services in Delhi NCR. Best social media ads agency in Delhi offering comprehensive social media advertising. Professional social media ads services India with proven results.',
        'keywords': [
            'Social Media Advertising Delhi',
            'Best social media ads agency in Delhi',
            'Social media advertising services NCR',
            'Best social media advertising services in India',
            'Professional social media ads services India',
            'Social media advertising experts in Delhi NCR',
            'Social media ads company India',
            'SEO services in Delhi',
            'Social media marketing Delhi',
            'Social media advertising India'
        ],
        'url': '/services/seo-lead-generation/social-media-ads',
        'section': 'Social Media Advertising',
        'tags': ['Social Media Advertising', 'Social Media Ads', 'Facebook Ads', 'Instagram Ads', 'Social Media Marketing'],
        'image': '/images/social-media-ads.webp',
        'hero_title': 'Social Media Advertising in Delhi',
        'hero_subtitle': 'Best social media ads agency in Delhi NCR offering comprehensive social media advertising. Professional social media ads services India with proven results and ROI.',
        'cta_text': 'Get Social Media Ads Quote',
        'stats': [
            {'value': '₹900M+', 'label': 'Revenue Generated for Clients'},
            {'value': '320%', 'label': 'Average ROI for Social Media Ads'},
            {'value': '95%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EnterpriseSocialAds': {
        'title': 'Enterprise Social Media Advertising Delhi | Best Enterprise Social Ads Agency NCR',
        'description': 'Leading enterprise social media advertising services in Delhi NCR. Best enterprise social ads agency in Delhi offering comprehensive enterprise social media advertising. Professional enterprise social ads services India with proven results.',
        'keywords': [
            'Enterprise Social Media Advertising Delhi',
            'Best enterprise social ads agency in Delhi',
            'Enterprise social media advertising services NCR',
            'Best enterprise social media advertising services in India',
            'Professional enterprise social ads services India',
            'Enterprise social media advertising experts in Delhi NCR',
            'Enterprise social ads company India',
            'SEO services in Delhi',
            'Enterprise social media marketing Delhi',
            'Enterprise social media advertising India'
        ],
        'url': '/services/seo-lead-generation/enterprise-social-ads',
        'section': 'Enterprise Social Media Advertising',
        'tags': ['Enterprise Social Media Advertising', 'Enterprise Social Ads', 'Enterprise Social Media Marketing', 'Facebook Ads', 'LinkedIn Ads'],
        'image': '/images/enterprise-social-ads.webp',
        'hero_title': 'Enterprise Social Media Advertising in Delhi',
        'hero_subtitle': 'Best enterprise social ads agency in Delhi NCR offering comprehensive enterprise social media advertising. Professional enterprise social ads services India with proven results and ROI.',
        'cta_text': 'Get Enterprise Social Ads Quote',
        'stats': [
            {'value': '₹1.2B+', 'label': 'Revenue Generated for Clients'},
            {'value': '380%', 'label': 'Average ROI for Enterprise Social Ads'},
            {'value': '97%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'ProgrammaticAds': {
        'title': 'Programmatic Advertising Services Delhi | Best Programmatic Ads Agency NCR',
        'description': 'Leading programmatic advertising services in Delhi NCR. Best programmatic ads agency in Delhi offering comprehensive programmatic advertising. Professional programmatic ads services India with proven results.',
        'keywords': [
            'Programmatic Advertising Services Delhi',
            'Best programmatic ads agency in Delhi',
            'Programmatic advertising services NCR',
            'Best programmatic advertising services in India',
            'Professional programmatic ads services India',
            'Programmatic advertising experts in Delhi NCR',
            'Programmatic ads company India',
            'SEO services in Delhi',
            'Programmatic advertising Delhi',
            'Programmatic ads India'
        ],
        'url': '/services/seo-lead-generation/programmatic-ads',
        'section': 'Programmatic Advertising',
        'tags': ['Programmatic Advertising', 'Programmatic Ads', 'RTB', 'Display Advertising', 'Programmatic Marketing'],
        'image': '/images/programmatic-ads.webp',
        'hero_title': 'Programmatic Advertising Services in Delhi',
        'hero_subtitle': 'Best programmatic ads agency in Delhi NCR offering comprehensive programmatic advertising. Professional programmatic ads services India with proven results and ROI.',
        'cta_text': 'Get Programmatic Ads Quote',
        'stats': [
            {'value': '₹600M+', 'label': 'Revenue Generated for Clients'},
            {'value': '420%', 'label': 'Average ROI for Programmatic Ads'},
            {'value': '94%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'Geofencing': {
        'title': 'Geofencing Services Delhi | Best Geofencing Agency NCR',
        'description': 'Leading geofencing services in Delhi NCR. Best geofencing agency in Delhi offering comprehensive geofencing solutions. Professional geofencing services India with proven results.',
        'keywords': [
            'Geofencing Services Delhi',
            'Best geofencing agency in Delhi',
            'Geofencing services NCR',
            'Best geofencing services in India',
            'Professional geofencing services India',
            'Geofencing experts in Delhi NCR',
            'Geofencing company India',
            'SEO services in Delhi',
            'Geofencing Delhi',
            'Location-based advertising India'
        ],
        'url': '/services/seo-lead-generation/geofencing',
        'section': 'Geofencing Services',
        'tags': ['Geofencing', 'Location-based Advertising', 'Mobile Advertising', 'Geofencing Marketing', 'Location Marketing'],
        'image': '/images/geofencing.webp',
        'hero_title': 'Geofencing Services in Delhi',
        'hero_subtitle': 'Best geofencing agency in Delhi NCR offering comprehensive geofencing solutions. Professional geofencing services India with proven results and ROI.',
        'cta_text': 'Get Geofencing Quote',
        'stats': [
            {'value': '₹400M+', 'label': 'Revenue Generated for Clients'},
            {'value': '550%', 'label': 'Average ROI for Geofencing'},
            {'value': '96%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'ConnectedTV': {
        'title': 'Connected TV & OTT Advertising Delhi | Best CTV Ads Agency NCR',
        'description': 'Leading Connected TV and OTT advertising services in Delhi NCR. Best CTV ads agency in Delhi offering comprehensive CTV and OTT advertising. Professional CTV ads services India with proven results.',
        'keywords': [
            'Connected TV Advertising Delhi',
            'Best CTV ads agency in Delhi',
            'OTT advertising services NCR',
            'Best CTV advertising services in India',
            'Professional CTV ads services India',
            'Connected TV advertising experts in Delhi NCR',
            'CTV ads company India',
            'SEO services in Delhi',
            'OTT advertising Delhi',
            'Connected TV advertising India'
        ],
        'url': '/services/seo-lead-generation/connected-tv',
        'section': 'Connected TV & OTT',
        'tags': ['Connected TV', 'OTT Advertising', 'CTV Ads', 'Streaming Advertising', 'TV Advertising'],
        'image': '/images/connected-tv.webp',
        'hero_title': 'Connected TV & OTT Advertising in Delhi',
        'hero_subtitle': 'Best CTV ads agency in Delhi NCR offering comprehensive CTV and OTT advertising. Professional CTV ads services India with proven results and ROI.',
        'cta_text': 'Get CTV Ads Quote',
        'stats': [
            {'value': '₹300M+', 'label': 'Revenue Generated for Clients'},
            {'value': '480%', 'label': 'Average ROI for CTV Ads'},
            {'value': '95%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EcommerceSEO': {
        'title': 'Ecommerce SEO Services Delhi | Best Ecommerce SEO Agency NCR',
        'description': 'Leading ecommerce SEO services in Delhi NCR. Best ecommerce SEO agency in Delhi offering comprehensive ecommerce SEO optimization. Professional ecommerce SEO services India with proven results.',
        'keywords': [
            'Ecommerce SEO Services Delhi',
            'Best ecommerce SEO agency in Delhi',
            'Ecommerce SEO services NCR',
            'Best ecommerce SEO services in India',
            'Professional ecommerce SEO services India',
            'Ecommerce SEO experts in Delhi NCR',
            'Ecommerce SEO company India',
            'SEO services in Delhi',
            'Ecommerce SEO Delhi',
            'Ecommerce SEO optimization India'
        ],
        'url': '/services/seo-lead-generation/ecommerce-seo',
        'section': 'Ecommerce SEO Services',
        'tags': ['Ecommerce SEO', 'Ecommerce Optimization', 'Online Store SEO', 'Product SEO', 'Ecommerce Marketing'],
        'image': '/images/ecommerce-seo.webp',
        'hero_title': 'Ecommerce SEO Services in Delhi',
        'hero_subtitle': 'Best ecommerce SEO agency in Delhi NCR offering comprehensive ecommerce SEO optimization. Professional ecommerce SEO services India with proven results and ROI.',
        'cta_text': 'Get Ecommerce SEO Quote',
        'stats': [
            {'value': '₹1.8B+', 'label': 'Revenue Generated for Clients'},
            {'value': '650%', 'label': 'Average ROI for Ecommerce SEO'},
            {'value': '98%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EcommercePPC': {
        'title': 'Ecommerce PPC Services Delhi | Best Ecommerce PPC Agency NCR',
        'description': 'Leading ecommerce PPC services in Delhi NCR. Best ecommerce PPC agency in Delhi offering comprehensive ecommerce PPC campaigns. Professional ecommerce PPC services India with proven results.',
        'keywords': [
            'Ecommerce PPC Services Delhi',
            'Best ecommerce PPC agency in Delhi',
            'Ecommerce PPC services NCR',
            'Best ecommerce PPC services in India',
            'Professional ecommerce PPC services India',
            'Ecommerce PPC experts in Delhi NCR',
            'Ecommerce PPC company India',
            'SEO services in Delhi',
            'Ecommerce PPC Delhi',
            'Ecommerce PPC campaigns India'
        ],
        'url': '/services/seo-lead-generation/ecommerce-ppc',
        'section': 'Ecommerce PPC Services',
        'tags': ['Ecommerce PPC', 'Ecommerce Advertising', 'Shopping Ads', 'Product PPC', 'Ecommerce Marketing'],
        'image': '/images/ecommerce-ppc.webp',
        'hero_title': 'Ecommerce PPC Services in Delhi',
        'hero_subtitle': 'Best ecommerce PPC agency in Delhi NCR offering comprehensive ecommerce PPC campaigns. Professional ecommerce PPC services India with proven results and ROI.',
        'cta_text': 'Get Ecommerce PPC Quote',
        'stats': [
            {'value': '₹2.1B+', 'label': 'Revenue Generated for Clients'},
            {'value': '720%', 'label': 'Average ROI for Ecommerce PPC'},
            {'value': '97%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EcommerceSocial': {
        'title': 'Ecommerce Social Media Advertising Delhi | Best Ecommerce Social Ads Agency NCR',
        'description': 'Leading ecommerce social media advertising services in Delhi NCR. Best ecommerce social ads agency in Delhi offering comprehensive ecommerce social media advertising. Professional ecommerce social ads services India with proven results.',
        'keywords': [
            'Ecommerce Social Media Advertising Delhi',
            'Best ecommerce social ads agency in Delhi',
            'Ecommerce social media advertising services NCR',
            'Best ecommerce social media advertising services in India',
            'Professional ecommerce social ads services India',
            'Ecommerce social media advertising experts in Delhi NCR',
            'Ecommerce social ads company India',
            'SEO services in Delhi',
            'Ecommerce social media marketing Delhi',
            'Ecommerce social media advertising India'
        ],
        'url': '/services/seo-lead-generation/ecommerce-social',
        'section': 'Ecommerce Social Media Advertising',
        'tags': ['Ecommerce Social Media Advertising', 'Ecommerce Social Ads', 'Ecommerce Social Media Marketing', 'Facebook Shopping', 'Instagram Shopping'],
        'image': '/images/ecommerce-social.webp',
        'hero_title': 'Ecommerce Social Media Advertising in Delhi',
        'hero_subtitle': 'Best ecommerce social ads agency in Delhi NCR offering comprehensive ecommerce social media advertising. Professional ecommerce social ads services India with proven results and ROI.',
        'cta_text': 'Get Ecommerce Social Ads Quote',
        'stats': [
            {'value': '₹1.5B+', 'label': 'Revenue Generated for Clients'},
            {'value': '580%', 'label': 'Average ROI for Ecommerce Social Ads'},
            {'value': '96%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'B2BEcommerce': {
        'title': 'B2B Ecommerce Enablement Delhi | Best B2B Ecommerce Agency NCR',
        'description': 'Leading B2B ecommerce enablement services in Delhi NCR. Best B2B ecommerce agency in Delhi offering comprehensive B2B ecommerce solutions. Professional B2B ecommerce services India with proven results.',
        'keywords': [
            'B2B Ecommerce Enablement Delhi',
            'Best B2B ecommerce agency in Delhi',
            'B2B ecommerce services NCR',
            'Best B2B ecommerce services in India',
            'Professional B2B ecommerce services India',
            'B2B ecommerce experts in Delhi NCR',
            'B2B ecommerce company India',
            'SEO services in Delhi',
            'B2B ecommerce Delhi',
            'B2B ecommerce enablement India'
        ],
        'url': '/services/seo-lead-generation/b2b-ecommerce',
        'section': 'B2B Ecommerce Enablement',
        'tags': ['B2B Ecommerce', 'B2B Ecommerce Enablement', 'B2B Online Sales', 'B2B Digital Commerce', 'B2B Ecommerce Platform'],
        'image': '/images/b2b-ecommerce.webp',
        'hero_title': 'B2B Ecommerce Enablement in Delhi',
        'hero_subtitle': 'Best B2B ecommerce agency in Delhi NCR offering comprehensive B2B ecommerce solutions. Professional B2B ecommerce services India with proven results and ROI.',
        'cta_text': 'Get B2B Ecommerce Quote',
        'stats': [
            {'value': '₹900M+', 'label': 'Revenue Generated for Clients'},
            {'value': '450%', 'label': 'Average ROI for B2B Ecommerce'},
            {'value': '95%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'ShoppingFeeds': {
        'title': 'Shopping Feed Automation Delhi | Best Shopping Feed Agency NCR',
        'description': 'Leading shopping feed automation services in Delhi NCR. Best shopping feed agency in Delhi offering comprehensive shopping feed automation. Professional shopping feed services India with proven results.',
        'keywords': [
            'Shopping Feed Automation Delhi',
            'Best shopping feed agency in Delhi',
            'Shopping feed services NCR',
            'Best shopping feed services in India',
            'Professional shopping feed services India',
            'Shopping feed experts in Delhi NCR',
            'Shopping feed company India',
            'SEO services in Delhi',
            'Shopping feed automation Delhi',
            'Product feed optimization India'
        ],
        'url': '/services/seo-lead-generation/shopping-feeds',
        'section': 'Shopping Feed Automation',
        'tags': ['Shopping Feed Automation', 'Product Feed Optimization', 'Shopping Ads', 'Feed Management', 'Product Feed'],
        'image': '/images/shopping-feeds.webp',
        'hero_title': 'Shopping Feed Automation in Delhi',
        'hero_subtitle': 'Best shopping feed agency in Delhi NCR offering comprehensive shopping feed automation. Professional shopping feed services India with proven results and ROI.',
        'cta_text': 'Get Shopping Feed Quote',
        'stats': [
            {'value': '₹600M+', 'label': 'Revenue Generated for Clients'},
            {'value': '520%', 'label': 'Average ROI for Shopping Feeds'},
            {'value': '94%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EcommerceMarketing': {
        'title': 'Ecommerce Digital Marketing Services Delhi | Best Ecommerce Marketing Agency NCR',
        'description': 'Leading ecommerce digital marketing services in Delhi NCR. Best ecommerce marketing agency in Delhi offering comprehensive ecommerce digital marketing. Professional ecommerce marketing services India with proven results.',
        'keywords': [
            'Ecommerce Digital Marketing Services Delhi',
            'Best ecommerce marketing agency in Delhi',
            'Ecommerce digital marketing services NCR',
            'Best ecommerce digital marketing services in India',
            'Professional ecommerce marketing services India',
            'Ecommerce digital marketing experts in Delhi NCR',
            'Ecommerce marketing company India',
            'SEO services in Delhi',
            'Ecommerce digital marketing Delhi',
            'Ecommerce marketing India'
        ],
        'url': '/services/seo-lead-generation/ecommerce-marketing',
        'section': 'Ecommerce Digital Marketing Services',
        'tags': ['Ecommerce Digital Marketing', 'Ecommerce Marketing', 'Online Store Marketing', 'Ecommerce Strategy', 'Digital Marketing'],
        'image': '/images/ecommerce-marketing.webp',
        'hero_title': 'Ecommerce Digital Marketing Services in Delhi',
        'hero_subtitle': 'Best ecommerce marketing agency in Delhi NCR offering comprehensive ecommerce digital marketing. Professional ecommerce marketing services India with proven results and ROI.',
        'cta_text': 'Get Ecommerce Marketing Quote',
        'stats': [
            {'value': '₹2.5B+', 'label': 'Revenue Generated for Clients'},
            {'value': '680%', 'label': 'Average ROI for Ecommerce Marketing'},
            {'value': '98%', 'label': 'Client Satisfaction Rate'}
        ]
    },
    'EcommerceResources': {
        'title': 'Ecommerce Marketing Resources Delhi | Best Ecommerce Resources Agency NCR',
        'description': 'Leading ecommerce marketing resources in Delhi NCR. Best ecommerce resources agency in Delhi offering comprehensive ecommerce marketing resources. Professional ecommerce resources services India with proven results.',
        'keywords': [
            'Ecommerce Marketing Resources Delhi',
            'Best ecommerce resources agency in Delhi',
            'Ecommerce marketing resources NCR',
            'Best ecommerce marketing resources in India',
            'Professional ecommerce resources services India',
            'Ecommerce marketing resources experts in Delhi NCR',
            'Ecommerce resources company India',
            'SEO services in Delhi',
            'Ecommerce marketing resources Delhi',
            'Ecommerce resources India'
        ],
        'url': '/services/seo-lead-generation/ecommerce-resources',
        'section': 'Ecommerce Marketing Resources',
        'tags': ['Ecommerce Marketing Resources', 'Ecommerce Resources', 'Ecommerce Guides', 'Ecommerce Education', 'Ecommerce Training'],
        'image': '/images/ecommerce-resources.webp',
        'hero_title': 'Ecommerce Marketing Resources in Delhi',
        'hero_subtitle': 'Best ecommerce resources agency in Delhi NCR offering comprehensive ecommerce marketing resources. Professional ecommerce resources services India with proven results and ROI.',
        'cta_text': 'Get Ecommerce Resources Quote',
        'stats': [
            {'value': '₹400M+', 'label': 'Revenue Generated for Clients'},
            {'value': '380%', 'label': 'Average ROI for Ecommerce Resources'},
            {'value': '93%', 'label': 'Client Satisfaction Rate'}
        ]
    }
}

def generate_service_page(page_name, config):
    """Generate a service page based on the template"""
    
    # Read the template
    template_path = Path('src/pages/services/seo-lead-generation/LocalServicesAds.tsx')
    with open(template_path, 'r', encoding='utf-8') as f:
        template_content = f.read()
    
    # Replace the component name
    template_content = template_content.replace('LocalServicesAds', page_name)
    template_content = template_content.replace('local-services-ads', config['url'].split('/')[-1])
    
    # Replace SEO config
    seo_config_pattern = r'const seoConfig = \{[\s\S]*?\};'
    new_seo_config = f"""const seoConfig = {{
    title: '{config['title']}',
    description: '{config['description']}',
    keywords: [
      {', '.join([f"'{keyword}'" for keyword in config['keywords']])}
    ],
    url: '{config['url']}',
    type: 'service',
    publishedAt: '2024-01-01',
    modifiedAt: '2024-12-01',
    author: 'Ritik Kumar Poddar',
    section: '{config['section']}',
    tags: {config['tags']},
    image: '{config['image']}'
  }};"""
    
    template_content = re.sub(seo_config_pattern, new_seo_config, template_content)
    
    # Replace hero section
    hero_title_pattern = r'Google Local Services Ads Management in Delhi'
    template_content = template_content.replace(hero_title_pattern, config['hero_title'])
    
    hero_subtitle_pattern = r'Best local services agency in Delhi NCR offering comprehensive Google Local Services Ads management\. \n                 Professional local services management India with proven results and ROI\.'
    template_content = template_content.replace(hero_subtitle_pattern, config['hero_subtitle'])
    
    cta_text_pattern = r'Get Local Services Quote'
    template_content = template_content.replace(cta_text_pattern, config['cta_text'])
    
    # Replace stats
    stats_pattern = r'<div className="text-4xl font-bold text-purple-600 mb-2">₹1\.2B\+</div>\s*<div className="text-gray-600">Revenue Generated for Clients</div>'
    new_stats = f'<div className="text-4xl font-bold text-purple-600 mb-2">{config["stats"][0]["value"]}</div>\n                <div className="text-gray-600">{config["stats"][0]["label"]}</div>'
    template_content = re.sub(stats_pattern, new_stats, template_content)
    
    stats_pattern2 = r'<div className="text-4xl font-bold text-purple-600 mb-2">450%</div>\s*<div className="text-gray-600">Average ROI for Local Services</div>'
    new_stats2 = f'<div className="text-4xl font-bold text-purple-600 mb-2">{config["stats"][1]["value"]}</div>\n              <div className="text-gray-600">{config["stats"][1]["label"]}</div>'
    template_content = re.sub(stats_pattern2, new_stats2, template_content)
    
    stats_pattern3 = r'<div className="text-4xl font-bold text-purple-600 mb-2">98%</div>\s*<div className="text-gray-600">Client Satisfaction Rate</div>'
    new_stats3 = f'<div className="text-4xl font-bold text-purple-600 mb-2">{config["stats"][2]["value"]}</div>\n              <div className="text-gray-600">{config["stats"][2]["label"]}</div>'
    template_content = re.sub(stats_pattern3, new_stats3, template_content)
    
    # Replace section titles
    section_titles = [
        ('Local Services Ads Deliverables', f'{config["section"]} Deliverables'),
        ('Local Services Ads Packages', f'{config["section"]} Packages'),
        ('Local Services Technology', f'{config["section"]} Technology'),
        ('Local Services Case Studies', f'{config["section"]} Case Studies'),
        ('Local Services Approach', f'{config["section"]} Approach'),
        ('Local Services FAQs', f'{config["section"]} FAQs')
    ]
    
    for old_title, new_title in section_titles:
        template_content = template_content.replace(old_title, new_title)
    
    # Replace CTA section
    cta_title_pattern = r'Ready to Transform Your Local Services\?'
    template_content = template_content.replace(cta_title_pattern, f'Ready to Transform Your {config["section"]}?')
    
    cta_subtitle_pattern = r'Best local services agency in Delhi NCR offering comprehensive Google Local Services Ads management\. \n               Get started with professional local services management India today\.'
    template_content = template_content.replace(cta_subtitle_pattern, f'Best {config["section"].lower()} agency in Delhi NCR offering comprehensive {config["section"].lower()} services. \n               Get started with professional {config["section"].lower()} services India today.')
    
    cta_button_pattern = r'Get Local Services Quote'
    template_content = template_content.replace(cta_button_pattern, config['cta_text'])
    
    # Write the new file
    output_path = Path(f'src/pages/services/seo-lead-generation/{page_name}.tsx')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template_content)
    
    print(f"Generated {page_name}.tsx")

def main():
    """Main function to generate all service pages"""
    
    # Create directories if they don't exist
    os.makedirs('src/pages/services/seo-lead-generation', exist_ok=True)
    
    # Generate all service pages
    for page_name, config in SERVICE_PAGES.items():
        generate_service_page(page_name, config)
    
    print(f"Generated {len(SERVICE_PAGES)} service pages")

if __name__ == "__main__":
    main() 