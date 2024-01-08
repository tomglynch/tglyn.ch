---
title: "Download Spotify Playlists on Your Mac with spotDL"
blurb: "Easily download your favorite Spotify playlists to your Mac, enhancing your music collection and DJ sets. This guide also includes an optional method for higher bitrate downloads."
image: "/blog/images/spotdl_download_terminal.png"
date: 2024-01-02
popularity: 3
published: true
---

Welcome, music enthusiasts! This guide is designed to help you easily download Spotify playlists to your Mac using `spotdl spotify-downloader`, even if you're new to using command-line tools.

![Here's what it looks like in Terminal](../images/spotdl_download_terminal.png "Terminal View") 

## Understanding the Basics

### What is Terminal?
Terminal is a Mac application used for executing text commands.
- **To Open Terminal**: Go to Applications > Utilities > Terminal.

### Navigating Folders in Terminal
Folders in Terminal are called 'directories'. Use `ls` to list items and `cd` to change directories. The Tab key can be used for auto-complete.

## Pre-requisites
First, we'll walk you through installing the following:
1. **Python & pip**: Usually pre-installed on Macs. [Python](https://www.python.org/downloads/)
2. **FFmpeg**: Required for processing audio files. [FFmpeg](https://ffmpeg.org/download.html)
3. **Homebrew**: A package manager for Mac. [Homebrew](https://brew.sh/)

## Installing Homebrew (If not already installed)
Homebrew simplifies the installation of software on Mac.
- Open Terminal and enter the command:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Follow the on-screen instructions.
- **Final Step**: Homebrew requires you to add it to your PATH. After installation, you'll see two commands in the Terminal. Copy and paste the entire lines, including the brackets, for each command:
  1. ```bash
     (echo; echo 'eval "$(/usr/local/bin/brew shellenv)"') >> /Users/your_username/.profile
     ```
  2. ```bash
     eval "$(/usr/local/bin/brew shellenv)"
     ```
  Replace `/Users/your_username/` with your actual username. This step integrates Homebrew into your system.

## Installing FFmpeg
Install FFmpeg using Homebrew:
- In Terminal, type:
  ```bash
  brew install ffmpeg
  ```

## Creating a Download Folder
Instead of using Terminal, you can create a folder in Finder where you want your music downloaded. Right-click on this folder and select 'New Terminal at Folder' to open Terminal directly in this folder. This approach is user-friendly and helps organize your downloads.

## Installing spotDL
Let's install `spotdl spotify-downloader`. It will be installed on your entire system, allowing you to use it from any directory in Terminal.
- In Terminal, type:
  ```bash
  pip install spotdl
  ```
  For Python 3 users, if `pip` doesn't work, try `pip3 install spotdl`.
- **Note**: If you encounter issues during installation, update pip by running `pip install --upgrade pip` (or `pip3 install --upgrade pip` for Python 3).
- [spotDL GitHub](https://github.com/spotDL/spotify-downloader)

## Downloading a Spotify Playlist
Ready to download your playlists!
1. Get the Spotify playlist URL by clicking the three dots on the playlist in Spotify, 'Share', then 'Copy link to playlist'. Edit the link to remove anything after the "?".
   - Example: `https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M`
2. In Terminal, type:
   ```bash
   spotdl [Clean Spotify Playlist Link]
   ```
   Replace `[Clean Spotify Playlist Link]` with your link.

## Troubleshooting Common Issues
- **No matches found**: Ensure the Spotify link has removed anything after and including the '?'.
- **Command Not Found**: Make sure `spotdl` is installed and restart Terminal.
- **Download Problems**: Check your internet connection or playlist link.

## Conclusion
Congratulations! You've downloaded Spotify playlists to your Mac. Any questions or issues? Feel free to comment below. Enjoy your music!


## Optional: Downloading Higher Bitrate Music using YouTube Music

For better sound quality, `spotdl` enables downloads from YouTube Music at 256kbps.

### Requirements
- **YouTube Music or YouTube Premium**: A premium account is required for high-quality streaming.
- **High-Quality Streaming Setting**: Adjust YouTube Music settings to stream at the highest quality.

### Obtaining Cookies
- **Extracting Cookies via Developer Tools**:
  - Open YouTube Music and sign in.
  - Access the developer tools (Cmd + Option + I on Mac).
  - Navigate to the 'Application' tab and find the cookies under the 'Storage' section. 
  - Look for cookies related to YouTube or YouTube Music login and save them in a text file.

### Setting Up for High-Quality Downloads
1. **Change Quality Settings** in YouTube Music.
2. Use the `--cookie-file` option in your `spotDL` command, pointing to your cookies file.
3. Select **M4A** or **OPUS** format with the `--format` option.
4. Use `--bitrate disable` to skip bitrate conversion.

### Example Command
```bash
spotdl --cookie-file path/to/your/cookies.txt --bitrate disable --audio youtube-music --format=m4a [Spotify Playlist Link]
```
- Replace `path/to/your/cookies.txt` with the actual path to your cookies file, and `[Spotify Playlist Link]` with your playlist link.

For more details, check the [spotDL documentation](https://github.com/spotDL/spotify-downloader/blob/master/docs/usage.md#audio-formats-and-quality).