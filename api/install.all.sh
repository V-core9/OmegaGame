echo "Composer install"
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

echo "Going to api folder"
cd /api

echo "Running composer install"
composer install


read -p "To continue with OmegaInstall press: [enter]"