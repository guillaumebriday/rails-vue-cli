# Rails and Vue CLI

[![](https://img.shields.io/docker/pulls/guillaumebriday/rails-vue-cli)](https://hub.docker.com/r/guillaumebriday/rails-vue-cli)
[![](https://img.shields.io/github/license/guillaumebriday/rails-vue-cli)](https://github.com/guillaumebriday/rails-vue-cli)

- [Getting started](#getting-started)
  - [Concept Overview](#concept-overview)
  - [Install](#install)
  - [Development](#development)
- [Deploy in production](#deploy-in-production)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Getting started

### Concept Overview

WIP

### Install

Development environment requirements :
- [Ruby](https://www.ruby-lang.org/en/)
- [Node](https://nodejs.org/en/)

```bash
$ git clone https://github.com/guillaumebriday/rails-vue-cli.git
$ cd rails-vue-cli
```

To run the backend
```bash
$ bundle
$ bin/setup
$ rm config/credentials.yml.enc && bundle exec rails credentials:edit
$ bundle exec rails s
```

To run the Frontend:
```bash
$ cd frontend
$ yarn
$ yarn serve
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Development

Lints and fixes vue files:
```bash
$ cd frontend
$ yarn lint
```

Build the image locally :
```
$ docker build -f .cloud/docker/Dockerfile -t rails-vue-cli .
```

## Deploy in production

You need to build the frontend like you used to do with [Webpacker](https://github.com/rails/webpacker):

```bash
$ cd frontend
$ yarn build
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## Credits

Inspired by:

+ [https://github.com/yyx990803/laravel-vue-cli-3](https://github.com/yyx990803/laravel-vue-cli-3)

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
