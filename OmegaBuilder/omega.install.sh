read -p "To continue with OmegaInstall press: [enter]"

echo "Starting NPM instal"
npm install
echo "Done NPM install."

echo "Starting node-sass instal"
npm install -g node-sass
echo "Done node-sass install."

echo "Starting Nodemon install"
npm install -g nodemon
echo "Done NPM Nodemon install."

echo "Starting babel-minify install"
npm install -g babel-minify
echo "Done NPM babel-minify install."

read -p "All Done! To exit install press: [enter]"