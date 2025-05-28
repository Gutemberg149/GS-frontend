import requests

# CONFIG (replace with your new values)
BOT_TOKEN = "8186523094:AAFSnrpO-PmY5w-vE2ivxdTE2FvUE_srTOs"  # From @BotFather
CHAT_ID = ""  # Leave empty to auto-detect

def setup_bot():
    # Auto-find chat ID if not specified
    if not CHAT_ID:
        updates = requests.get(f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates").json()
        if updates.get("result"):
            latest_chat = updates["result"][-1]["message"]["chat"]
            print(f"Detected Chat ID: {latest_chat['id']} (User: {latest_chat.get('username')})")
            return latest_chat["id"]
        raise Exception("No chats found. Message your bot first.")

    return CHAT_ID

def send_alert(message):
    try:
        chat_id = setup_bot()
        response = requests.post(
            f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage",
            json={
                "chat_id": chat_id,
                "text": message,
                "parse_mode": "HTML"
            }
        )
        if not response.json().get("ok"):
            print(f"Failed: {response.text}")
    except Exception as e:
        print(f"Error: {str(e)}")

# Test
send_alert("Alerta de calor, beba água.")