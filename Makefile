build-prod:
	docker compose up --build -d

prod:
	docker compose up -d

build-dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d

dev:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

stop:
	docker compose down

migrate-up:
	docker exec -it music migrate -path /usr/src/music/db/migrations -database "postgresql://admin:admin@db:5432/postgres_db?sslmode=disable" -verbose up

migrate-down:
	docker exec -it music migrate -path /usr/src/music/db/migrations -database "postgresql://admin:admin@db:5432/postgres_db?sslmode=disable" -verbose down

copy-dump: 
	docker cp music:/usr/src/music/db/seeders/initial_seed.sql ./dump.sql && docker cp ./dump.sql music_vs_store_db:/root/dump.sql && rm -rf ./dump.sql

run-seeder:
	docker exec -it music_vs_store_db psql -U admin -d postgres_db -c '\i root/dump.sql'

clear-images:
	docker exec -it music rm -rf /usr/src/music/storage/images/*

reset-db:
	make migrate-down && make migrate-up && make clear-images && make copy-dump && make run-seeder

create-db:
	docker exec -it music_vs_store_db createdb --username=admin --owner=admin postgres_db

drop-db:
	docker exec -it music_vs_store_db dropdb --username=admin postgres_db

.PHONY: createdb dropdb migrate-up migrate-down copy-dump run-seeder reset-db sqlc clear-images
