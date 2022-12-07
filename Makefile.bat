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
kubectl apply -f mss-hospital-analyzer.yaml
kubectl apply -f mss-hospital-crud.yaml

cd ../../