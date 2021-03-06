.PHONY: default
default:
	@echo "Run: make {build,develop}"

.PHONY: prebuild
prebuild: clean
	docker-compose build

.PHONY: build
build: clean-build
	docker-compose run app yarn build

.PHONY: build-netlify
build-netlify: clean-build
	npm run build-netlify

.PHONY: develop
develop: clean-develop
	docker-compose run --service-ports app yarn develop

.PHONY: clean
clean: clean-build clean-develop

.PHONY: clean-build
clean-build:
	rm -rf build-prod

.PHONY: clean-develop
clean-develop:
	rm -rf build-dev
	rm -rf cache
