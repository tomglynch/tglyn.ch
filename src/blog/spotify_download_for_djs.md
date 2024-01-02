---
title: "Download Spotify Playlists on Your Mac with spotDL"
blurb: "Easily download your favorite Spotify playlists to your Mac, enhancing your music collection and DJ sets. This guide also includes an optional method for higher bitrate downloads."
image: "/blog/images/spotdl_download_terminal.png"
date: 2024-01-02
popularity: 3
published: true
---

Welcome, music enthusiasts! This guide is designed to help you easily download Spotify playlists to your Mac using `spotdl spotify-downloader`, even if you're new to using command-line tools.

![Here's what it looks like in Terminal](../images/spotdl_download_terminal.png "Here's what it looks like in Terminal") 

## Understanding the Basics

### What is Terminal?
- Terminal is a Mac application used for executing text commands.
- **To Open Terminal**: Go to Applications > Utilities > Terminal.

### Navigating Folders in Terminal
- Folders in Terminal are called 'directories'. Use `ls` to list items and `cd` to change directories. The Tab key can be used for auto-complete.

## Pre-requisites
First we'll teach you how to install the following:

1. **Python & pip**: Usually pre-installed on Macs. [Python](https://www.python.org/downloads/)
2. **FFmpeg**: Required for processing audio files. [FFmpeg](https://ffmpeg.org/download.html)
3. **Homebrew**: A package manager for Mac. [Homebrew](https://brew.sh/)

## Installing Homebrew (If not already installed)
Homebrew simplifies the installation of software on Mac.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
- Follow the on-screen instructions.

## Installing FFmpeg
Install FFmpeg using Homebrew:

```bash
brew install ffmpeg
```

## Creating a Download Folder
Choose between Terminal and Finder to create your download folder.

- **Using Terminal**: `mkdir SpotifyDownloads` in your desired location.
- **Using Finder**: Manually create a new folder.

## Installing spotDL
Now, let's get `spotdl spotify-downloader` set up on your Mac.

- In Terminal, type the following command:
  ```bash
  pip install spotdl
  ```
- **Note for Python 3 Users**: If your Mac uses Python 3, you might need to use `pip3` instead of `pip`. You can check your Python version by typing `python --version` (or `python3 --version`) in Terminal. If it shows Python 3.x and `pip` doesn't work, try:
  ```bash
  pip3 install spotdl
  ```
  This ensures that `spotdl` is installed for the correct version of Python.

- If you encounter any issues during installation, make sure pip is up-to-date by running `pip install --upgrade pip` (or `pip3 install --upgrade pip` for Python 3).

- [spotDL GitHub](https://github.com/spotDL/spotify-downloader)

## Downloading a Spotify Playlist
Ready to download your playlists!

1. To get the Spotify playlist URL, go to the playlist, click the three dots, 'Share', then 'Copy link to playlist'. Edit the link to remove everything after the "?".
   - Example: `https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M`
2. In Terminal (in your SpotifyDownloads folder), type:

   ```bash
   spotdl [Clean Spotify Playlist Link]
   ```
   Replace `[Clean Spotify Playlist Link]` with your link.

## Troubleshooting Common Issues
Encountered an issue? Here's some help:

- **No matches found**: Ensure your spotify link has removed anything after and including the '?'.
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