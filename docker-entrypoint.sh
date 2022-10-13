#!/bin/bash
set -e

until /wait-for-it/wait-for-it.sh --host=${DATABASE_HOST} --port=3306 --timeout=5 --quiet; do
    >&2 echo "Connection not available on mysql:3306 - waiting 5 seconds"
done

npm run typeorm:run-migrations

npm run start:prod