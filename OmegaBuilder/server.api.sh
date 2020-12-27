echo "stop docker containers"
docker stop omegagame_php_1
docker stop omegagame_web_1

echo "remove them also"
docker rm omegagame_php_1
docker rm omegagame_web_1
yes Y |docker system prune


echo "Copy vendor Files to api/vendor folder"
cp -r ./vendor ./api/ /Wait

echo "Docker compose build"
docker-compose up -d 

echo "Running PHP Container bash"
winpty docker exec -it omegagame_php_1 bash -c "ls -al; /api/install.all.sh; exit;"

#echo "Running Server Setup"
#start /api/install.all.sh

read -p "To continue with OmegaInstall press: [enter]"