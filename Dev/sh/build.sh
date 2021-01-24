#╔═══════════════════════════════════════════════════════════════════════════════╗
#║ ♠ File Name: build.sh                                                         ║
#║ ↔ Location: <: public_root :>/ Dev / sh / build.sh                            ║
#║ Σ Description:                                                                ║
#║     → In case this lives more than few days, better have something prepared   ║
#╟       than few days, better have something prepared have as   ╔═══════════════╣
#║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
#╚═══════════════════════════════════════════════════════════════╩═══════════════╝

if [ "$1" == "" ] || [ $# -gt 1 ]; then
    echo "Starting Omega Build."
    
    read -p "Omega_BUILD_Process >> Press [> ENTER <] to exit."
    
    echo "Trying to remove public folders contents [if there is any]"
    rm -r PUBLIC/*

    echo "COPYING >>  from:[./SOURCE/static] To:[./PUBLIC]"
    cp -r SOURCE/static/* PUBLIC  

    echo "EXPORTING >> all SCSS files from src to public"
    node-sass -r SOURCE/app/ -o PUBLIC/ --output-style compressed

    echo "MAKING >> Staging Folder inside Public dir."
    mkdir PUBLIC/build_staging

    echo "Now Exporting JS files using BABEL [with remove-comments plugin]"
    npx babel SOURCE/app/ --out-dir PUBLIC/build_staging/ --source-maps --plugins remove-comments --ignore "src/assets/**/*"

    echo "Now Exporting JS files using BABEL [MINIFY separate run]"
    minify PUBLIC/build_staging/ --out-dir PUBLIC/ --mangle.keepClassName

    echo "REMOVING >> Staging Folder inside Public dir."
    rm -r PUBLIC/build_staging

    read -p "To EXIT OmegaBuild press: [enter]"

else 
    echo "Starting Omega DEVELOPMENT Build."
    
    #read -p "[next: remove public dir] >> press [enter] to continue;"
    rm -r public
    rm -r export_staging_folder

    #read -p "[next: make public dir] >> press [enter] to continue;"
    mkdir public
    echo "Done Public dir."
    mkdir export_staging_folder

    #read -p "[next: copy from src->public all] >> press [enter] to continue;"
    cp -r src/* public 
    echo "Done Copy Source Files."

    #read -p "[next: remove all SCSS from public] >> press [enter] to continue;"
    rm -r public/**/*.scss
    echo "Done Removing SCSS files"

    #read -p "[next: remove all SCSS from public] >> press [enter] to continue;"
    rm -r public/**/*.js
    echo "Done Removing SCSS files"

    #read -p "[next: export all SCSS from src->public] >> press [enter] to continue;"
    node-sass -r src/ -o public/ 
    echo "Done Exporting CSS files"

    #read -p "Now Exporting JS files using BABEL [with remove-comments plugin]"
    npx babel src/ --out-dir export_staging_folder/ --source-maps --plugins remove-comments --ignore "src/assets/**/*"
    echo "Done Exporting BABEL JS files [ part_1 ]"

    #find public/* -type f -exec sed -i '/PATTERN-1/,/PATTERN-2/d' {} +

    #read -p "Now Exporting JS files using BABEL [MINIFY separate run]"
    minify export_staging_folder/ --out-dir public/ --mangle.keepClassName
    echo "Done Exporting BABEL JS files [ part_2 ]"

    #read -p "To EXIT OmegaBuild press: [enter]"
    echo "DONE ->> Exiting"

    sleep 2
    exit

fi

#▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
#▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
#▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
#▌ ♠ File Name: build.sh ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
#▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀