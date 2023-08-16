<script></script>

<template>
  <section id="main">
    <h1 class="title" data-aos="zoom-in" data-aos-duration="2000" data-oas-easing="ease-in-out">Bienvenue sur mon Portfolio</h1>
    <h2 class="subtitle" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">
      Je me présente : <br>
      Je m'appelle Elodie BESEN, j'ai 30 ans et je suis Développeuse web et web mobile.
    </h2>
    <div class="profil" >
      <img
        alt="Photo en noir et blanc d'une femme blonde avec lunette de soleil dans un port"
        class="profil__photo"
        src="../assets/image/photo.png"
        data-aos="zoom-in"
        data-aos-delay="1400"
        data-aos-duration="2500"
      />
      <div class="profil__text" data-aos="zoom-in-left" data-aos-delay="1700" data-aos-duration="2500">
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
  </section>
</template>

<style scoped>
#main {
  margin: 10px;
  min-height: 100vh;
}

.profil__para {
  margin: 40px;
}

.subtitle {
  padding: 10px 100px;
}
.profil__photo {
  position: relative;
  margin: 30px;
  box-shadow: 10px 10px 20px #400738, -8px -8px 10px #270304;
  border-radius: 40%;
  width: 40%;
  max-width: 600px;
  height: auto;
}

.profil__text {
  margin: 20px;
}

.profil {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
