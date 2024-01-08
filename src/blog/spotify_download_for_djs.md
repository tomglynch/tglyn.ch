---
title: "Download Spotify Playlists on Your Mac with spotDL"
blurb: "Easily download your favorite Spotify playlists to your Mac, enhancing your music collection and DJ sets. This guide also includes an optional method for higher bitrate downloads."
image: "/blog/images/spotdl_download_terminal.png"
date: 2024-01-02
popularity: 3
published: true
---

Welcome, music enthusiasts! This guide is designed to help you easily download Spotify playlists to your Mac using `spotdl spotify-downloader`, even if you're new to using command-line tools.

## Understanding the Basics

### What is Terminal?
- Terminal is a Mac application used for executing text commands.
- **To Open Terminal**: Go to Applications > Utilities > Terminal.

### Navigating Folders in Terminal
- Folders in Terminal are called 'directories'. Use `ls` to list items and `cd` to change directories. The Tab key can be used for auto-complete.

## Pre-requisites
First, let's install the following essentials:

1. **Python & pip**: Usually pre-installed on Macs. [Python](https://www.python.org/downloads/)
2. **FFmpeg**: Required for processing audio files. [FFmpeg](https://ffmpeg.org/download.html)
3. **Homebrew**: A package manager for Mac. [Homebrew](https://brew.sh/)

## Installing Homebrew (If not already installed)
Homebrew simplifies the installation of software on Mac.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- Follow the on-screen instructions. At the end of the installation, Homebrew will instruct you to add it to your PATH. Copy and paste the following commands in Terminal (replace `/Users/your_username/` with your actual username):
  ```bash
  echo 'eval "$(/usr/local/bin/brew shellenv)"' >> /Users/your_username/.profile
  eval "$(/usr/local/bin/brew shellenv)"
  ```

## Installing FFmpeg
Install FFmpeg using Homebrew:

```bash
brew install ffmpeg
```

## Installing spotDL
Let's get `spotdl spotify-downloader` set up on your Mac:

```bash
pip install spotdl
```
- For Python 3 users, use `pip3 install spotdl` if `pip` doesn't work.
- [spotDL GitHub](https://github.com/spotDL/spotify-downloader)

## Creating a Download Folder
Now, create a folder for your downloads:

- **Using Finder**: Create a folder in your preferred location (e.g., Desktop).
- **Open Terminal in Your Folder**: Right-click on the folder and choose 'New Terminal at Folder' to open Terminal directly in your chosen folder.

## Downloading a Spotify Playlist
Now you're ready to download your Spotify playlists:

1. To get the Spotify playlist URL, go to the playlist in Spotify, click the three dots, 'Share', then 'Copy link to playlist'. Edit the link to remove everything after the "?".
2. In Terminal, type:
   ```bash
   spotdl [Clean Spotify Playlist Link]
   ```
   Replace `[Clean Spotify Playlist Link]` with your link.

## Troubleshooting Common Issues
- **No matches found**: Ensure your Spotify link has removed anything after and including the '?'.
- **Command Not Found**: Ensure `spotdl` is installed and restart Terminal.
- **Download Problems**: Check your internet connection or playlist link.

## Conclusion
Congratulations! You've now downloaded Spotify playlists to your Mac. Any questions or issues? Drop a comment below. Enjoy your music!

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
