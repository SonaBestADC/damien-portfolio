#!/bin/sh


HOST="root@72.239.188.77"

cp -r build damien-portfolio;
tar -czvf damien-portfolio.tar.gz damien-portfolio; 

COM="cd /usr/share/webapps; ";
COM+="tar -xzf damien-portfolio.tar.gz && nginx -s reload; ";
COM+="rm damien-portfolio.tar.gz";

scp -i ~/Sensative/.ssh/archpckey damien-portfolio.tar.gz $HOST:/usr/share/webapps;
ssh -i ~/Sensative/.ssh/archpckey $HOST "$COM";

rm -r damien-portfolio damien-portfolio.tar.gz;