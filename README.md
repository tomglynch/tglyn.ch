# serve locally
run `npx @11ty/eleventy --serve` from the /tglyn.ch directory
view at http://localhost:8080/

## in debug mode
run `DEBUG=Eleventy* npx @11ty/eleventy --serve` from the /tglyn.ch directory
view at http://localhost:8080/

## see what i will see on prod
run `ELEVENTY_ENV=prod npx @11ty/eleventy --serve` from the /tglyn.ch directory
view at http://localhost:8080/

This activates the `env.isProd` condition, which filters blog posts according to their front matter properties:
- `published: false` posts won't be shown anywhere (completely hidden drafts)
- `published: true, unlisted: true` posts will be accessible via direct URL but won't appear in any blog listings (like secret pages)
- `published: true` posts (without unlisted or with `unlisted: false`) will be fully visible in all blog post listings

## if something doesnt update
- delete the _site folder, cancel the above process and re-run it.

# push to netlify
make a commit to master and push to github

# how to get set up
- install nvm
- install latest version of node
- run npm install
- then run the above

# to publish
- git add . 
- git commit -m "message"
- git push
- '    '
- check netlify but it should be deploying