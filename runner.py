import requests
import os

#Webhook of my channel. Click on edit channel --> Webhooks --> Creates webhook
url = os.environ['DISCORD_WEBHOOK']

data = {"content": 'https://weekly.antarcticsolutions.ca/'}
response = requests.post(url, json=data)