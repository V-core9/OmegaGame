if [ "$1" == "" ] || [ $# -gt 1 ]; then
    echo "Starting Omega Build."
    
    echo "Trying to remove public folder if exists"
    rm -r public

    echo "Make Public dir"
    mkdir public

    echo "Copy Source Files to public folder"
    cp -r src/* public 

    echo "Remove All SCSS Files From PublicBuild"
    rm -r public/**/*.scss

    echo "Now Exporting all SCSS files from src to public"
    node-sass -r src/ -o public/ --output-style compressed

    echo "Now Exporting JS files using BABEL [with remove-comments plugin]"
    npx babel src/ --out-dir public/ --source-maps --plugins remove-comments

    echo "Now Exporting JS files using BABEL [MINIFY separate run]"
    minify public/*.js --out-dir public/*.min.js --mangle.keepClassName

else 
    echo "Starting Omega DEVELOPMENT Build."
    
    read -p "[next: remove public dir] >> press [enter] to continue;"
    rm -r public

    read -p "[next: make public dir] >> press [enter] to continue;"
    mkdir public
    echo "Done Public dir."

    read -p "[next: copy from src->public all] >> press [enter] to continue;"
    cp -r src/* public 
    echo "Done Copy Source Files."

    read -p "[next: remove all SCSS from public] >> press [enter] to continue;"
    rm -r public/**/*.scss
    echo "Done Removing SCSS files"

    read -p "[next: export all SCSS from src->public] >> press [enter] to continue;"
    node-sass -r src/ -o public/ 
    echo "Done Exporting CSS files"

    read -p "Now Exporting JS files using BABEL [with remove-comments plugin]"
    npx babel src/ --out-dir public/ --source-maps --plugins remove-comments
    echo "Done Exporting BABEL JS files [ part_1 ]"

    find public/* -type f -exec sed -i '/PATTERN-1/,/PATTERN-2/d' {} +

    read -p "Now Exporting JS files using BABEL [MINIFY separate run]"
    minify public/ --out-dir public/ --mangle.keepClassName
    echo "Done Exporting BABEL JS files [ part_2 ]"


fi

read -p "To EXIT OmegaBuild press: [enter]"