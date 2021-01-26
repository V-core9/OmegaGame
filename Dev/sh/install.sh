#╔═══════════════════════════════════════════════════════════════════════════════╗
#║ ♠ File Name: install.sh                                                       ║
#║ ↔ Location: <: public_root :>/ Dev / sh / install.sh                          ║
#║ Σ Description:                                                                ║
#║     → In case this lives more than few days, better have something prepared   ║
#╟       than few days, better have something prepared have as   ╔═══════════════╣
#║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
#╚═══════════════════════════════════════════════════════════════╩═══════════════╝

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

echo "Starting babel/core & babel/cli install"
npm install -g @babel/core @babel/cli
echo "Done NPM babel/core & babel/cli install."

echo "Starting babel-minify install"
npm install -g babel-minify
echo "Done NPM babel-minify install."

echo "Starting node-compress-images-cli install"
npm install -g image-2-min
npm install --global imagemin-cli
echo "Done NPM node-compress-images-cli install."

echo "Starting pngquant-bin install"
npm install -g imagemin-pngquant
npm install -g pngquant-bin
npm install -g gifsicle
echo "Done NPM pngquant-bin install."

echo "Starting localtunnel install"
npm install -g localtunnel
echo "Done NPM localtunnel install"

echo "Starting eslint install"
npm install -g eslint
echo "Done NPM eslint install"

echo "Starting is-website-vulnerable install"
npm install -g is-website-vulnerable
echo "Done NPM is-website-vulnerable install"

read -p "[ EOF::Omega_INSTALL_Process >> Press {enter} to exit...]"


#▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
#▌   ! END OF FILE !              ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
#▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
#▌ ♠ File Name: install.sh ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
#▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀