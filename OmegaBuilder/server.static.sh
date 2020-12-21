cd OmegaBuilder

start omega.build.sh

echo "Serving static files at http://localhost:5000"

cd ..

start "http://localhost:5000" && node server.static.js  
