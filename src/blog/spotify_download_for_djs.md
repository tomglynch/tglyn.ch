---
title: "DJs, you can download Spotify Playlists on Your Mac with spotDL"
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

## Installation: Setting up the Essentials

First, let's install the necessary tools. We will install **Homebrew** first, as it simplifies the installation of **FFmpeg**.

### 1. Install Homebrew (The Package Manager)
Homebrew simplifies the installation of software on Mac. Run this in terminal by pasting it in and pressing enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
````

  - Follow the on-screen instructions. At the end of the installation, Homebrew will instruct you what to do to add it to your PATH. Copy each of the two commands and paste them in Terminal and hit enter. They will likely look like this (except with your username instead of `your_username`):
    ```bash
    echo 'eval "$(/usr/local/bin/brew shellenv)"' >> /Users/your_username/.profile
    eval "$(/usr/local/bin/brew shellenv)"
    ```

### 2\. Install FFmpeg (The Audio Processor)

FFmpeg is required by `spotdl` for processing audio files. Install it using Homebrew (again paste and hit enter in terminal):

```bash
brew install ffmpeg
```

### 3\. Install Python 3 (If needed) & spotDL

Python 3 is usually pre-installed on modern Macs, as is its package manager, `pip3`. If you need to install Python, you can find it here: [Python](https://www.python.org/downloads/).

Let's get `spotdl spotify-downloader` set up on your Mac (in terminal):

```bash
pip3 install spotdl
```

  - More deets here: [spotDL GitHub](https://github.com/spotDL/spotify-downloader)

## Creating a Download Folder

Now, create a folder for your downloads:

  - **Using Finder**: Create a folder in your preferred location (e.g., Desktop).
  - **Open Terminal in Your Folder**: Right-click on the folder and choose 'New Terminal at Folder' to open Terminal directly in your chosen folder. By opening terminal in the folder, when we download the songs they will appear in this folder.

## Downloading a Spotify Playlist

Now you're ready to download your Spotify playlists:

1.  To get the Spotify playlist URL, go to the playlist in Spotify, click the three dots, 'Share', then 'Copy link to playlist'. Edit the link to remove everything after the "?".
2.  In Terminal, type:
    ```bash
    spotdl [Clean Spotify Playlist Link]
    ```
    Replace `[Clean Spotify Playlist Link]` with your link.

## Troubleshooting Common Issues

  - **No matches found**: Ensure your Spotify link has removed anything after and including the '?'.
  - **Command Not Found**: Ensure `spotdl` is installed and restart Terminal.
  - **Download Problems**: Check your internet connection or playlist link.

### **Issue: Resolving Future Upgrade Problems (`KeyError: 'header'`)**

The underlying issue for most download problems is that YouTube frequently updates how it serves audio and video data, which often breaks external tools like `spotdl` until their developers release a fix. You'll know this is the issue if you get a Python error message that includes **`KeyError: 'header'`**.

This error means your installed versions are too old to understand YouTube's new structure. While running a simple `pip3 install -U spotdl` *should* fix it, sometimes **`pip` caches an older version** and fails to get the proper update.

To solve this during future upgrades, you need to clear your `pip` cache and then re-run the installation command:

1.  **Clear the `pip` Cache:**
    This command clears all locally cached package files, forcing `pip` to download everything fresh from the internet.

    ```bash
    pip3 cache purge
    ```

2.  **Re-run the Installation/Update Command:**
    Now, run the update command one more time to fetch and install the latest available versions, explicitly targeting `spotdl` and the package that caused the error, `ytmusicapi`.

    ```bash
    pip3 install -U spotdl ytmusicapi --break-system-packages
    ```

    *Note: The `--break-system-packages` flag is often needed on modern macOS systems to allow installation outside of the system's protected Python environment.*

## Conclusion

Congratulations\! You've now downloaded Spotify playlists to your Mac. Any questions or issues? Drop a comment below. Enjoy your music\!

## Optional: Downloading Higher Bitrate Music using YouTube Music

For better sound quality, `spotdl` enables downloads from YouTube Music at 256kbps.

### Requirements

  - **YouTube Music or YouTube Premium**: A premium account is required for high-quality streaming.
  - **High-Quality Streaming Setting**: Adjust YouTube Music settings to stream at the highest quality.

### Obtaining Cookies

  - **Extracting Cookies via Developer Tools**:
      - Open YouTube Music and sign in.
      - Access the developer tools (`Cmd + Option + I` on Mac).
      - Navigate to the 'Application' tab and find the cookies under the 'Storage' section.
      - Look for cookies related to YouTube or YouTube Music login and save them in a text file.

### Setting Up for High-Quality Downloads

1.  **Change Quality Settings** in YouTube Music.
2.  Use the `--cookie-file` option in your `spotDL` command, pointing to your cookies file.
3.  Select **M4A** or **OPUS** format with the `--format` option.
4.  Use `--bitrate disable` to skip bitrate conversion.

### Example Command

```bash
spotdl --cookie-file path/to/your/cookies.txt --bitrate disable --audio youtube-music --format=m4a [Spotify Playlist Link]
```

  - Replace `path/to/your/cookies.txt` with the actual path to your cookies file, and `[Spotify Playlist Link]` with your playlist link.

For more details, check the [spotDL documentation](https://github.com/spotDL/spotify-downloader/blob/master/docs/usage.md#audio-formats-and-quality).