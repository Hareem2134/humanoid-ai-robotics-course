import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def get_openai_client():
    client = OpenAI(api_key=OPENAI_API_KEY)
    return client
