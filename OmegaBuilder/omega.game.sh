ls -al

echo "Next => server.api.sh [production mode]"
start OmegaBuilder/server.api.sh
echo ""

echo "Next => server.express.sh [production mode]"
start OmegaBuilder/server.express.sh
echo ""

read -p "To EXIT OmegaGame press: [enter]"