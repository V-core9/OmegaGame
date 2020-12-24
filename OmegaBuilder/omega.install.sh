read -p "To continue with OmegaInstall press: [enter]"

echo "Starting NPM instal"
npm install
echo "Done NPM install."

echo "Starting Nodemon install"
npm install -g nodemon
echo "Done NPM Nodemon install."

read -p "All Done! To exit install press: [enter]"