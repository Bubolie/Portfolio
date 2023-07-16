<script setup></script>

<template>
  <main>
    <h1 class="title">Bienvenue sur mon Portfolio</h1>
    <h2 class="subtitle">
      Je me présente : je suis Elodie, Développeuse web et web mobile.
    </h2>
    <!-- <video class="profil__video" src="../assets/video/Fleur1.mp4" type="video/mp4" autoplay loop muted></video> -->
    <div class="profil">
      <img alt="" class="profil__photo" src="../assets/image/photo.png" />
      <div class="profil__text">
        <p class="profil__para">
          Après avoir pris soin des autres au travers du métier d’infirmière,
          aujourd’hui j’ai changé de carrière pour m’épanouir dans une nouvelle
          discipline en me mettant toujours au service des autres mais sous un
          nouvel aspect : les aider à créer et développer leur propre site web.
        </p>
        <p class="profil__para">
          Ainsi, je me suis formée dans le Développement Web et Web Mobile et
          j’ai le plaisir maintenant d’être à votre service dans ce secteur pour
          pouvoir laisser mon esprit créatif fleurir et en continuant
          d’apprendre chaque jour de nouvelle chose dans un domaine en constante
          évolution afin d’être plus performante pour vous.
        </p>
      </div>
      
    </div>
  </main>
</template>

<style scoped>
.title {
  margin: 50px 120px;
  text-align: center;
  font-family: "Fleur De Leah", cursive;
  font-size: 75px;
}

.profil__para {
  margin: 40px;
}

.profil__photo {
  position: relative;
  margin: 50px 20px 50px 100px;
  width: 500px;
  box-shadow: 10px 10px 20px #400738,-8px -8px 10px #270304;
  border-radius: 30%;
}

.profil__text {
  margin: 50px 100px 50px 20px;
}

.profil {
  display: flex;
  flex-basis: 50%;
  align-items: center;
}

/*.profil__video {
  width: 200px;
  opacity: 50%;
  position: relative; 
}*/
</style>
