echo "Building images..."
cd ./barramento-de-eventos
docker build --rm -t barramento-de-eventos .
cd ../mss_hopital_crud
docker build --rm -t mss-hospital-crud .
cd ../mss_hospital_analyzer
docker build --rm -t mss-hospital-analyzer .

echo "Deploying kubernetes application"
cd ../implantacao/kubernetes
kubectl apply -f barramento-de-eventos.yaml
SET SLEEPTIME=5
TIMEOUT /T %SLEEPTIME%
kubectl apply -f mss-hospital-crud.yaml
kubectl apply -f mss-hospital-analyzer.yaml

echo "Starting front-end"
cd ../../FrontEndReact/hospital-load-balancer-frontend
npm start