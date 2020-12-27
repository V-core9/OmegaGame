echo "Composer install"
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
echo " "
echo "Going to api folder"
cd /api
echo " "
echo "Running composer install"
php /usr/local/bin/composer install
echo " "
if [ "$1" == "" ] || [ $# -gt 1 ]; then
  read -p "To EXIT press: [enter]"
else 
  echo "[>> EXITING >>]"
fi
