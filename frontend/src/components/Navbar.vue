<template>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand :to="{ name: 'posts-index' }">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'posts-new' }">New post</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
