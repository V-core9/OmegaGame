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

#echo "Starting Composer install"
#curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
#echo "Done Composer install."

read -p "All Done! To exit install press: [enter]"