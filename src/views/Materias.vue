<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Matérias</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/779784551848738826/literature-3033196-1280.jpg"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Português</h3>
                            <div>
                                Matéria de Português do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/780031687122747422/Y1qJeKK5hfJ2k-Ga01mfZM9jmUBzNwZl_x_4BKokwEv4neHxBD2mXf47o1OlyW004_o4Dkx9TrKAIphAu_vAK0XO5WV7-n8rH055.png"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Matemática</h3>
                            <div>
                                Matéria de Matemática do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/780069502779392000/unknown.png"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Inglês</h3>
                            <div>
                                Matéria de Inglês do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/779784575407751198/Simpletransmutation.png?width=1074&height=671"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Química</h3>
                            <div>
                                Matéria de Química do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/779784566331670618/img_57984_foto_1_a.jpg"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">História</h3>
                            <div>
                                Matéria de História do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/780031328346570802/pedra_penis_capa_widexl.png?width=1194&height=671"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Geografia</h3>
                            <div>
                                Matéria de Geografia do 9 ano do Colegio Marchello Perneta de Olheira.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/780030631895498782/normal_aula_violao.png"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Violão</h3>
                            <div>
                                Aulas de Violão com o professor Nikolas Saku.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card href='/japones'>
                    <v-responsive>
                        <v-img
                            src="https://media.discordapp.net/attachments/779706063058108436/780042390656253962/anime_anime_girls_white_skin_kawaii_girl_Rem_Rem_Re_Zero_Re_Zero_Kara_Hajimeru_Isekai_Seikatsu_white.png"
                            height="200px"
                        >
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Japones</h3>
                            <div>
                                Aprenda Japones com o prof. Vinecious Riróqui.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Materias',
    computed: {
        materias() {
            return this.$store.state.materias;
        }
    }
};
</script>

<style scoped></style>
