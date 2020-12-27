echo "Copy vendor Files to api/vendor folder"
cp -r vendor/* api/vendor

echo "Docker compose build"
docker-compose up -d
