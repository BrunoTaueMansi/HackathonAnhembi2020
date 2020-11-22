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
                        <div id="anot" >
                            <v-card
                                color="#385F73"
                                dark
                                style="margin:10px"
                            >
                                <v-card-title class="headline">
                                    <p style="top: 0px;right: 0;position: absolute;padding-right:5px">+</p>
                                Melhor música de todas
                                    <p style="bottom: 0px;right: 0;position: absolute;padding-right:5px;margin-bottom: 0px;font-size:15px">00:20 - 05:20</p>
                                </v-card-title>
                                <v-card-actions>
                                </v-card-actions>
                            </v-card>
                        </div>
                        <v-btn
                            class="center"
                            fab
                            dark
                            small
                            color="indigo"
                            onClick="criarAnotacao()"
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
</script>

<style scoped></style>