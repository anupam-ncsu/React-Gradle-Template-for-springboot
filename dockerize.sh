#! /bin/bash
{ set -eux -o pipefail; } 2>/dev/null

#./gradlew clear
#./gradlew appNpmInstall

mkdir -p docker
# copy everything from root to docker folder except the docker folder itself
rsync -avr --exclude='/docker' --exclude='.gradle' . docker

cd docker
touch Dockerfile

# RUN npm install react-scripts@3.4.0 -g --silent
cat > Dockerfile <<EOF
    FROM node:13.12.0-alpine
    WORKDIR /app
    COPY . .
    EXPOSE 3000
    CMD [ "npm", "start" ]
EOF

tag=${1}/${2}:${3}
docker build -t "${tag}" .
docker push "${tag}"

