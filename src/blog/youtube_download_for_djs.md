---
title: "Automate YouTube Playlist Downloads with yt-dlp for DJ Work"
blurb: "A quick script to download audio and videos from YouTube playlists onto your Mac, ready for VJing and DJing"
image: "/blog/images/youtube_download_terminal.png"
date: 2023-04-17
popularity: 3
published: true
---

*Updated 2026: this post now uses `uv` to install everything — it's faster, works on older Macs, and there's no more waiting on Homebrew.*

Hey all, to improve my workflow when playing around with DJ ideas, I download audio files from multiple YouTube playlists to use in my work. I've created a simple script to automate this process on your Mac. It will create separate folders for each playlist and download the files in the appropriate formats. Please note that the YouTube playlists must be set as either public or unlisted for this script to work.

![Here's what it looks like in Terminal](/blog/images/youtube_download_terminal.png "Here's what it looks like in Terminal") 

Before we start, let's talk a little about Terminal. Terminal is a command-line interface on macOS that allows you to interact with your computer using text commands. We will use Terminal to install some tools and run the script.

First, we need to install a couple of tools (once each command starts running just leave it and wait — though these are quick, usually done in seconds):
1. **uv** : A tool that installs and manages command-line programs for you (it even brings its own Python, so it doesn't matter how old your Mac is). Install it by pasting the following command into your Terminal and hitting Enter:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Once it finishes, close and reopen Terminal so your Mac can find the newly installed tools.

 
2. **yt-dlp** : A command-line program to download videos from YouTube and other sites. You can install it with uv:

```bash
uv tool install yt-dlp
```



Now, let's create a folder on your desktop called `youtube_downloads` and navigate into it:

```bash
mkdir -p ~/Desktop/youtube_downloads
cd ~/Desktop/youtube_downloads
```

(`mkdir` stands for 'make directory' and `cd` stands for 'change directory')


Next, create a new file called `download_playlists.sh` in the `youtube_downloads` folder:

```bash
touch download_playlists.sh
```

(`touch` creates a new file)


Open the `download_playlists.sh` file with your favorite text editor and paste the following script, replace the youtube playlist URLs with your own youtube playlists:

```bash
#!/bin/bash

# Define a list of playlist URLs
playlist_urls=(
"https://www.youtube.com/playlist?list=PLcduW1K6eOtn8mIAArqAjonxvYviQ6ZAa"
"https://www.youtube.com/playlist?list=PLcduW1K6eOtluf6V9mlTqYlxE8pdI8TSe"
)

# Loop through each playlist URL
for playlist_url in "${playlist_urls[@]}"; do
    # Get the playlist title
    playlist_title=$(yt-dlp --flat-playlist --print "%(playlist_title)s" --playlist-items 1 "$playlist_url")

    # Replace characters that are not allowed in folder names
    safe_playlist_title=$(echo "$playlist_title" | tr '/\\:*?"<>|' '_')

    # Create a subfolder for this playlist if it doesn't exist
    if [ ! -d "audio/${safe_playlist_title}" ]; then
        mkdir -p "audio/${safe_playlist_title}"
    fi

    # Download audio files
    yt-dlp --ignore-errors --no-warnings \
        --format "bestaudio[ext=m4a]/bestaudio" \
        --output "audio/${safe_playlist_title}/%(title)s [%(id)s].%(ext)s" \
        --yes-playlist "$playlist_url" \
        --download-archive "audio/${safe_playlist_title}/downloaded_audio.txt"

done
```

Save the file and close the text editor. To access the script, open Terminal and navigate to the `youtube_downloads` folder:

```bash
cd ~/Desktop/youtube_downloads
```



Make the script executable by typing the following command in Terminal:

```bash
chmod +x download_playlists.sh
```

(`chmod` changes file permissions
)

Now, you can run the script by typing:

```bash
./download_playlists.sh
```

The script will loop through each playlist URL and download the audio files. It first gets the playlist title and creates a "safe" version of it by replacing characters that are not allowed in folder names. Then, it creates a separate folder for each playlist if it doesn't already exist.

Next, the script downloads the audio as m4a files, exactly as YouTube serves them — no conversion step. djay, rekordbox and Serato all read m4a natively, and it's actually *better* quality than a converted mp3 would be. Each filename also ends with the video's ID in square brackets, which keeps a permanent link between the file and its YouTube video. The script saves everything in the "audio" subfolder and keeps a record of downloaded files in a text file, so re-running it only fetches whatever's new.

To add more playlists to the script, simply edit the `download_playlists.sh` file and add more playlist URLs to the `playlist_urls` array, following the same format as the existing URLs.

Oh and last thing, to re-run the script quickly, if you have put the folder on your desktop as I suggested - just open a terminal and run
```bash
./Desktop/youtube_downloads/download_playlists.sh
```

## If it suddenly stops working

If the script has been working fine for months and then starts failing with weird errors, the likely cause is that YouTube has changed the way it does things, and your copy of yt-dlp is too old to keep up. The fix is to update your tools — this one command updates everything uv has installed:

```bash
uv tool upgrade --all
```

If it's still failing after that, reinstall yt-dlp from scratch:

```bash
uv tool uninstall yt-dlp
uv tool install yt-dlp
```

## Want mp3s (or the videos) anyway?

M4a files should work in most DJ software, but if you want mp3s, or the video files themselves (for VJing), you'll need **FFmpeg**, which is easiest to install with Homebrew (paste each line and hit Enter — you may need to enter your password (hint: when entering your password it won't show the amount of letters you type, but don't worry - just hit enter when done and it will work)):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install ffmpeg
```

One caveat: Homebrew needs a Mac on a recent version of macOS. On older machines it ends up building FFmpeg from source, which is slow and often unreliable.

For mp3s, swap the audio download command in the script for this one (converts to mp3 at 160Kbps):

```bash
yt-dlp --ignore-errors --no-warnings --format bestaudio --extract-audio --audio-format mp3 --audio-quality 160K --output "audio/${safe_playlist_title}/%(title)s [%(id)s].%(ext)s" --yes-playlist "$playlist_url" --download-archive "audio/${safe_playlist_title}/downloaded_audio.txt"
```

For the video files (max 1080p quality, .mov format with H.264 video codec and AAC audio codec), add this command to the script inside the loop, along with a matching `mkdir -p "video/${safe_playlist_title}"` line:

```bash
yt-dlp --ignore-errors --no-warnings --format "bestvideo[height<=1080]+bestaudio" --merge-output-format mov --output "video/${safe_playlist_title}/%(title)s [%(id)s].%(ext)s" --yes-playlist "$playlist_url" --download-archive "video/${safe_playlist_title}/downloaded_video.txt" --postprocessor "FFmpegVideoConvertor" --postprocessor-args "-c:v libx264 -c:a aac"
```

I hope this script helps you quickly download audio files from YouTube playlists for your DJ work!