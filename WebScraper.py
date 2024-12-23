import yt_dlp
import json
from datetime import datetime

def format_date(date_str):
    try:
        date = datetime.strptime(date_str, "%Y%m%d")
        return date.strftime("%b %d, %Y")
    except:
        return "Unknown"

def get_channel_videos(channel_url, max_videos=None):
    ydl_opts = {
        'quiet': False,
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(channel_url, download=False)
            videos = info.get('entries', [])
            
            if max_videos:
                videos = videos[:max_videos]
            
            video_data = []
            for idx, video in enumerate(videos, start=1):
                video_data.append({
                    "id": idx,
                    "title": video.get("title", "No Title"),
                    "link": f"https://www.youtube.com/watch?v={video.get('id')}",
                    "date": format_date(video.get("upload_date", "Unknown")),
                    "thumbnail": f"https://img.youtube.com/vi/{video.get('id')}/maxresdefault.jpg",
                })
            
            return video_data
    except Exception as e:
        print(f"Error fetching channel videos: {e}")
        return []

def save_to_json(data, filename="videos.json"):
    try:
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Data successfully saved to {filename}")
    except Exception as e:
        print(f"Error saving data to JSON: {e}")

if __name__ == "__main__":
    channel_url = "https://www.youtube.com/@WECHEWGOOD"
    videos = get_channel_videos(channel_url, max_videos=150)
    save_to_json(videos, "videos.json")
