import requests
from bs4 import BeautifulSoup
import json
from urllib.parse import urljoin

def timesofindia_online_frauds():
    url = "https://timesofindia.indiatimes.com/topic/Cyber-crime/news"
    page_request = requests.get(url)
    data = page_request.content
    soup = BeautifulSoup(data, "html.parser")

    result_data = []

    for divtag in soup.find_all('div', {'class': 'uwU81'}):
        headline = divtag.find('div', {'class': 'fHv_i'}).text.strip()
        link = divtag.find('a')['href']
        
        # Construct the absolute URL
        absolute_link = urljoin(url, link)

        # Extract image link
        image_link = divtag.find('img')['src']

        # Check if the headline or summary mentions "cyber crime" or "scam"
        if "cyber crime" in headline.lower() or "scam" in headline.lower():
            # Fetch the article details and summary from the article's page
            article_page = requests.get(absolute_link)
            article_data = article_page.content
            article_soup = BeautifulSoup(article_data, "html.parser")
            
            # Find and extract the summary from the article page
            summary_tag = article_soup.find('meta', {'name': 'description'})
            summary = summary_tag['content'] if summary_tag else "Summary not available."
            
            # Append the data to the result list
            result_data.append({
                "headline": headline,
                "summary": summary,
                "link": absolute_link,
                "image_link": image_link
            })

    # Print the result_data in JSON format
    print(json.dumps(result_data, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    timesofindia_online_frauds()
