echo "Copy vendor Files to api/vendor folder"
cp -r vendor api/

echo "Docker compose build"
docker-compose up -d

read -p "To continue with OmegaInstall press: [enter]"