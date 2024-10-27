# serve locally
run `npx @11ty/eleventy --serve` from the /tglyn.ch directory
view at http://localhost:8080/

## in debug mode
run `DEBUG=Eleventy* npx @11ty/eleventy --serve` from the /tglyn.ch directory
view at http://localhost:8080/

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