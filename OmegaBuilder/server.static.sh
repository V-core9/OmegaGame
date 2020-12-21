cd OmegaBuilder

start omega.build.sh

echo "Serving static files at http://localhost:5000"

start "http://localhost:5000"

cd ..

node server.static.js
