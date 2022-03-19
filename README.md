# Font Factory App

With this application, you can quickly generate your different file formats of your fonts.
You just need the '.ttf' file of you font to generate the following formats:
- .eot
- .woff
- .woff2

## Getting started

#### Installation
```bash 
git clone https://github.com/jeromehaas/font-factory-app.git
cd font-factory-app
nvm use
yarn install
```

\* If you dont have nvm installed, install it with this [manual](https://heynode.com/tutorial/install-nodejs-locally-nvm/) or change to node-version 'v16.13.1' manually.

Now place your fonts in the '.ttf' format in the 'dist' folder.

## Run the scripts

#### Generate all font variants
```bash 
yarn run start
```

#### Only generate specific scripts
```bash
npm run eot 
# generates .eot files only

npm run woff
# generates .woff files only

npm run woff2
# generates .woff2 files only

npm run clean
# cleans the dist folder
```