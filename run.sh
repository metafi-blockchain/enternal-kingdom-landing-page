docker build -t roster90/enteral-kingdom-landing-page . 


docker buildx build --platform linux/amd64,linux/arm64 -t roster90/enteral-kingdom-landing-page:0.1.0 --push .


docker push roster90/enteral-kingdom-landing-page:0.1.0