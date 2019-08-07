up:
	docker-compose up
down:
	docker-compose down

build:
	rm -rf _site
	docker-compose run jekyll jekyll build -d /_site

