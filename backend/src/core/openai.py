import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def get_openai_client():
    """
    Initializes and returns an OpenAI client.

    Returns:
        OpenAI: An initialized OpenAI client instance.
    """
    if not OPENAI_API_KEY:
        raise ValueError("OPENAI_API_KEY environment variable not set.")
    client = OpenAI(api_key=OPENAI_API_KEY)
    return client
