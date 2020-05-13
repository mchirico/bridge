
docker-build:
	docker build --no-cache -t gcr.io/mchirico/angular:latest -f Dockerfile .

push:
	docker push gcr.io/mchirico/angular:latest


run:
	docker run --rm -it -p 8080:8080  gcr.io/mchirico/angular:latest
