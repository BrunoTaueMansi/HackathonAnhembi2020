<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Matérias</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">

            <v-flex xs12 sm12 md10>
                <v-card>
                    <v-responsive>
                        <iframe
                            width="940"
                            height="500" 
                            src="https://www.youtube.com/embed/Mtjxrf2Vg7g?start=20" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </v-responsive>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md2>
                <v-card height="500px">
                    <div class="text-xs-center">
                        <v-flex class="font-weight-black"
                            >Anotações</v-flex
                        >
                        <v-btn
                            class="center"
                            fab
                            dark
                            small
                            color="indigo"
                            >
                                +
                        </v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Japones'
};
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      videoId: 'Wy9q22isx3U'
    });
  }
</script>

<style scoped></style>