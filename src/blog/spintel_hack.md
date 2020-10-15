---
title: How to get free internet from your provider.
---

## Step 1 - Hack them
## Step 2 - Ask for free internet

There's nothing much better than free internet - so I've written this quick guide to getting free internet from your service provider.



# Step 1
Just logging in to my internet providers portal to check my usage, and I get that tingle - 'the feels shit' [1]. 

So what do we do? Open up Chrome's Devtools, open the network tab, tick preserve log and get browsing. In the network tab, each request sent and recieved is logged, with their request, response and query string parameters. Here we view all the data is being sent and received by the site. Something I notice in these requests is the number 0000XXX812 (this is changed to protect the innocent btw), which appears quite a bit. Using the find feature I'm able to confirm it's a user ID relating to me!

After browsing the site for a while, I've found 7 requests that I send off a request that includes my user ID in the query string, and I receive back HTML pages of content. Do these pages check that the ID requested matched the user logged in? Let's find out.

- In Chrome Devtools network tab, right click on a request including the user ID. Select Copy > Copy as curl
- Open up Terminal, paste the curled request in.
- Hit enter
- In the curled request, change the number by 1. 
- Hit enter
- Compare the two results

What are we looking for here? 

There's many formats of the data that is returned, with the most common being HTML, javascript, css, json object, or images. Usually what differs between users is HTML or json, where as css and javascript usually are the same for all users on a given site. 

In my case, the response was HTML. A quick read showed most of the requests were returning error messages along the line of 'Content could not be retrieved' or 'You do not have permission to access this'. But one seemed different - so using a diff tool such as (diff checker)[https://www.diffchecker.com/diff], copy [2] and paste the two results in to see what changes.

In my account, the 'My Account' button took me to https://my.spintel.net.au/services/0000XXX812, but for which showed another users . As I outlined in my email to Spintel, this was the issue:

Vulnerability:
- When logged in to an account, if I am in My Services and click Details on one of the services, it sends a request to: https://my.spintel.net.au/services/XXXXXXXXXXX where XXXXXXXXXXX is what I assume is the service ID, and for me was 0000XXX812. The request returns a web page with my home address and phone number embedded in it. However, if I change the number on the end of the service from 0000XXX812 to another number such as 0000XXX813, while keeping the cookie the same, I receive someone else's home address and phone number embedded in the page that is returned.


As put by [throwawaymath](https://news.ycombinator.com/item?id=20005674)

> Yet another security vulnerability caused by:
> 1. Using sequentially incremented integer sequences as object IDs, and
> 2. Failing to protect sensitive data using some kind of authentication and authorization check.

While point 1 is not an issue in itself, point 2 is where things get problematic.



Enjoy that? Pop your email in here cause over the next few weeks I'm working on a few more blog posts in a similar vein.



Footnotes

[1] - As developers, you gain a sense of when a website just isn't working quite right, and you get that 'This feels shit' feeling. Hot tip - use that feeling. It's usually very accurate. Cause if the user experience, load times, or is shit, then it's very likely their security is also shit. 

[2] - Hot tip: Use Command + Shift + Up to copy a whole command + response from Terminal.