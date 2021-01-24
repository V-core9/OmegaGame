echo $PWD

read -p "[ SOF::Omega_INSTALL_Process >> Press {enter} to START...]"

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

read -p "[ EOF::Omega_INSTALL_Process >> Press {enter} to exit...]"