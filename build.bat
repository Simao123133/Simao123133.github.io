CALL ng build --output-path docs --configuration production
CALL copy docs\index.html docs\404.html
CALL echo simao.amaro.sh  > docs\CNAME
CALL git add .
CALL git commit -m %1
CALL git push