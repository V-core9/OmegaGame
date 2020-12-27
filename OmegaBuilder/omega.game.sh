ls -al
echo "Next => starting docker"+
#!/bin/bash
#Open Docker, only if is not running
if (! docker stats --no-stream ); then
    # On Mac OS this would be the terminal command to launch Docker
    open /Applications/Docker.app
    # On Windows OS this would be the terminal command to launch Docker
    start '' 'c://Program Files/Docker/Docker/Docker Desktop.exe' /Wait
    #Wait until Docker daemon is running and has completed initialisation
while (! docker stats --no-stream ); do
  # Docker takes a few seconds to initialize
  echo "Waiting for Docker to launch..."
  sleep 1
done
fi
echo ""

echo "Next => server.api.sh [production mode]"
if [ "$1" == "" ] || [ $# -gt 1 ]; then
  read -p "To continue with OmegaSetup press: [enter]"
else 
  echo "[>> CONTINUING >>]"
fi
start OmegaBuilder/server.api.sh
echo ""

echo "Next => omega.build.sh [production mode]"
if [ "$1" == "" ] || [ $# -gt 1 ]; then
  read -p "To continue with OmegaSetup press: [enter]"
else 
  echo "[>> CONTINUING >>]"
fi
start OmegaBuilder/omega.build.sh 
echo ""

echo "Next => server.express.sh [production mode]"
if [ "$1" == "" ] || [ $# -gt 1 ]; then
  read -p "To continue with OmegaSetup press: [enter]"
else 
  echo "[>> CONTINUING >>]"
fi
start OmegaBuilder/server.express.sh
echo ""

if [ "$1" == "" ] || [ $# -gt 1 ]; then
  read -p "To EXIT OmegaGame press: [enter]"
else 
  echo "[<!< EXITING >!>]"
fi