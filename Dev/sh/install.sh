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

echo "Starting babel-minify install"
npm install -g babel-minify
echo "Done NPM babel-minify install."

read -p "[ EOF::Omega_INSTALL_Process >> Press {enter} to exit...]"


#▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
#▌   ! END OF FILE !              ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
#▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
#▌ ♠ File Name: install.sh ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
#▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀