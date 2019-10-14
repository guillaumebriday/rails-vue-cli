#!/usr/bin/env bash

until bundle exec rake db:version; do
  >&2 echo "Sqlite is unavailable - sleeping"
  sleep 1
done

bundle exec rake db:migrate
bundle exec rake db:seed

bundle exec puma -C config/puma.rb
