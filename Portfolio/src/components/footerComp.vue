<script setup></script>

<template>
  <footer>
    <div class="link">
      <figure class="link__logo">
        <a href="https://github.com/Bubolie" target="_blank" rel="icon"
          ><img src="../assets/image/signe-github.png" alt="Lien vers GitHub"
        /></a>
      </figure>
      <figure class="link__logo">
        <a
          href="https://www.linkedin.com/in/elodie-besen-001512283/"
          target="_blank"
          rel="icon"
          ><img src="../assets/image/linkedin.png" alt="Lien vers linkedin"
        /></a>
      </figure>
    </div>
    <div class="update">
      <small
        >Copyright 2023 <br />
        Dernière mise à jour
        <time datetime="2023-07-13">13 juillet 2023</time></small
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #400738;
  border-top: solid 6px #93b5f4;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link__logo {
  width: 35px;
  margin: 10px;
}

.update {
  text-align: center;
  padding-bottom: 15px;
  font-size: small;
  color: #93b5f4;
}
</style>
