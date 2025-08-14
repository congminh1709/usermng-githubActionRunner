# usermng-travisci-heroku
```
node app.js

docker login
docker build -t congminh1709/usermng-travisci-heroku:v1 .
docker push congminh1709/usermng-travisci-heroku:v1

kubectl cluster-info
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
minikube service usermng-travisci-heroku-service
```