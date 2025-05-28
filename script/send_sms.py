import requests

TELEGRAM_BOT_TOKEN = "7862148210:AAFNSrWr2OoYOawjihJ_MjZ75Sc2ALUWesw"
TELEGRAM_CHAT_ID = "1469255658"  # Your verified chat ID

def get_chat_id():
    """Fetch your latest chat ID (debug tool)"""
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/getUpdates"
    try:
        response = requests.get(url).json()
        if response.get("ok"):
            for update in response["result"]:
                if "message" in update:
                    print(f"Found chat ID: {update['message']['chat']['id']}")
                    return update["message"]["chat"]["id"]
        print("❌ No chats found. Send a message to your bot first.")
    except Exception as e:
        print(f"Error fetching updates: {str(e)}")
    return None

def send_telegram_alert(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    params = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }
    
    try:
        response = requests.post(url, json=params)
        if response.status_code == 200:
            print("✅ Alert sent to Telegram!")
        else:
            print(f"❌ Error: {response.text}")
    except Exception as e:
        print(f"🚨 Connection error: {e}")

# ======= DEBUG SECTION ======= 
# Uncomment these 3 lines if getting "chat not found" errors:
print("Fetching latest chat ID...")
TELEGRAM_CHAT_ID = get_chat_id() or TELEGRAM_CHAT_ID
print(f"Using chat ID: {TELEGRAM_CHAT_ID}")
# =============================

# Example usage
send_telegram_alert("🔥 <b>Test Message</b> 🔥")