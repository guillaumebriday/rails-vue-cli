# Rails and Vue CLI

[![](https://img.shields.io/docker/pulls/guillaumebriday/rails-vue-cli)](https://hub.docker.com/r/guillaumebriday/rails-vue-cli)
[![](https://img.shields.io/github/license/guillaumebriday/rails-vue-cli)](https://github.com/guillaumebriday/rails-vue-cli)

- [Concept Overview](#concept-overview)
- [Why?](#why)
- [How it works?](#how-it-works)
- [Getting started](#getting-started)
  - [Install](#install)
  - [Development](#development)
- [Deploy in production](#deploy-in-production)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Concept Overview

This project shows how to build an application with both [Rails](https://rubyonrails.org/) and [Vue CLI](https://cli.vuejs.org/) in the same repo.

It **does not** use the Rails gem [Webpacker](https://github.com/rails/webpacker) to manage JavaScript and CSS. It's fully delegated to Vue CLI.

## Why?

Because sometime you want to use the power of Vue CLI and work with the "classic" Vue ecosystem.

## How it works?

Rails is responsible for two things only.

1. Serve the first HTML page built with Vue CLI.
2. Expose an API.

In the Rails routes, you can see:

```ruby
get '*path', to: 'application#index', format: false
```

And the Application controller:

```ruby
class ApplicationController < ActionController::Base
  def index
    render template: 'application'
  end
end
```

It means that Rails will dispatch any requests to the `app/views/application.html.erb` view.
The Vue router is responsible to handle that request with the correct component after the first load of the page.

For every API requests, we use the `:api` namespace to serve json in the same application that Vue cli can use.

In the `frontend/vue.config.js`:

```js
module.exports = {
  // proxy API requests to Rails during development
  devServer: {
    proxy: "http://localhost:3000"
  },

  // output built static files to Rails's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: "../public",

  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath:
    process.env.NODE_ENV === "production"
      ? "../app/views/application.html.erb"
      : "index.html"
};
```

We build the application in the Rails's public dir so it can be served your Web server on production.

The `indexPath` is responsible to generate the `app/views/application.html.erb` that the `ApplicationController` will use.

In development, we now have two endpoints, `localhost:3000` for the api and `localhost:8080` for the Vue App.

In production, it works exactly the same way as if you run `rails assets:precompile`.

## Getting started

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
