<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          >
            Terms & Conditions
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{ year }} Phiscus
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        year: new Date().getFullYear(),
      }
    },
  }
</script>
<style></style>
