import requests
import os
from dotenv import load_dotenv

load_dotenv()

BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost:8000")

def test_chat_query():
    print("--- Testing /api/chat/query ---")
    url = f"{BACKEND_URL}/api/chat/query"
    payload = {
        "query": "What is ROS?",
        "selected_text": None,
        "conversation_id": None
    }
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # Raise an exception for bad status codes
        print("Status Code:", response.status_code)
        print("Response JSON:", response.json())
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        if e.response:
            print("Error Response:", e.response.text)

def test_chat_query_selection():
    print("\n--- Testing /api/chat/query_selection ---")
    url = f"{BACKEND_URL}/api/chat/query_selection"
    payload = {
        "query": "What is it?",
        "selected_text": "ROS 2 is a set of software libraries and tools that help you build robot applications.",
        "conversation_id": None
    }
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        print("Status Code:", response.status_code)
        print("Response JSON:", response.json())
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        if e.response:
            print("Error Response:", e.response.text)

if __name__ == "__main__":
    test_chat_query()
    test_chat_query_selection()
