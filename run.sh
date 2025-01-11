docker build -t metafi/enteral-kingdom-landing-page:0.1.1  . 


docker buildx build --platform linux/amd64,linux/arm64 -t metafi/enteral-kingdom-landing-page:0.1.1 --push .


docker push metafi/enteral-kingdom-landing-page:0.1.1