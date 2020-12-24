echo "Starting Omega Build."

echo "Trying to remove public folder if exists"
rm -r public
#read -p "To continue with OmegaBuild press: [enter]"

echo "Make Public dir"
mkdir public
echo "Done Public dir."
#read -p "To continue with OmegaBuild press: [enter]"

echo "Copy Source Files to public folder"
cp -r src/* public 
echo "Done Copy Source Files."
#read -p "To continue with OmegaBuild press: [enter]"

echo "Remove All Css Files From PublicBuild"
rm -r public/**/*.scss
echo "Done Removing CSS files"
#read -p "To continue with OmegaBuild press: [enter]"

echo "Now Exporting all SCSS files from src to public"
node-sass -r src/ -o public/ --output-style compressed
echo "Done Exporting CSS files"
#read -p "To continue with OmegaBuild press: [enter]"

#read -p "To EXIT OmegaBuild press: [enter]"
