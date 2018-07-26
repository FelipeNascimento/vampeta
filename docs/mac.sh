folder=$HOME/pvt
mkdir $folder
file=$folder/love.jpg
curl https://f.i.uol.com.br/fotografia/2013/10/31/331934-970x600-1.jpeg > $file
osascript -e 'tell application "System Events" to tell every desktop to set picture to "'$file'"'