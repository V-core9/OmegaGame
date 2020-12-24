cd OmegaBuilder

start omega.build.sh

echo "Serving files using Node-Express.js at http://localhost:5000"

cd ..

nodemon server.express.js --ignore public
