COMPOSE_FILE=docker-compose.yml

### DOCKER COMPOSE COMMANDS

.PHONY: up
up:
	docker compose -f $(COMPOSE_FILE) up -d --build 

.PHONY: down
down:
	docker compose -f $(COMPOSE_FILE) down 
