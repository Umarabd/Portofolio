echo "Swtiching to branch master"
git checkout master

echo "Building app.."
npm run build

echo "Deploying files to Server"
scp -r build/* root@195.35.14.251:/var/www/195.35.14.251/

echo "Done"