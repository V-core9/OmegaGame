cd OmegaBuilder

start omega.build.sh

echo "Serving files using Node-Express.js at http://localhost:5000"

cd ..

start "http://localhost:5000" && node server.express.js

#read -p "All Done! To exit install press: [enter]"