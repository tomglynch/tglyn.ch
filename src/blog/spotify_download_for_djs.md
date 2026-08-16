---
title: "DJs, you can download Spotify Playlists on Your Mac with spotDL"
blurb: "Easily download your favorite Spotify playlists to your Mac, enhancing your music collection and DJ sets. This guide also includes an optional method for higher bitrate downloads."
image: "/blog/images/spotdl_download_terminal.png"
date: 2024-01-02
popularity: 3
published: true
---

*Updated 2026: this post now uses `uv` to install everything — no more Homebrew, no more Python/pip headaches, and it works on older Macs too.*

Welcome, music enthusiasts! This guide is designed to help you easily download Spotify playlists to your Mac using `spotdl spotify-downloader`, even if you're new to using command-line tools.

## Understanding the Basics

### What is Terminal?
- Terminal is a Mac application used for executing text commands.
- **To Open Terminal**: Go to Applications > Utilities > Terminal.

### Navigating Folders in Terminal
- Folders in Terminal are called 'directories'. Use `ls` to list items and `cd` to change directories. The Tab key can be used for auto-complete.

## Installation: Setting up the Essentials

First, let's install the necessary tools. There are only two steps, and both are quick.

### 1. Install uv (The Tool Manager)
uv installs and manages command-line programs for you — it even brings its own Python, so it doesn't matter what's already on your Mac. Run this in terminal by pasting it in and pressing enter:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

  - When it finishes, close and reopen Terminal so your Mac can find the newly installed tools.

### 2\. Install spotDL (The Downloader)

Let's get `spotdl spotify-downloader` set up on your Mac with uv, then have it fetch its own private copy of FFmpeg (the audio processor it needs) — no Homebrew, no Xcode tools required. Paste each line and hit enter in terminal:

```bash
uv tool install spotdl
spotdl --download-ffmpeg
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

### Downloads breaking out of nowhere?

If `spotdl` has been working fine and then suddenly stops, the likely cause is that Spotify or YouTube has changed the way they do things, which breaks external tools like `spotdl` until their developers release a fix. The fix is to update your tools — this one command updates everything uv has installed:

```bash
uv tool upgrade --all
```

If it's still broken after updating, reinstall `spotdl` from scratch:

```bash
uv tool uninstall spotdl
uv tool install spotdl
```

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