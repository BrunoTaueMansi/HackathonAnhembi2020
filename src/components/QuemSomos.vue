<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Quem somos</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/hjCA3ecCXAQ"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >MARCHELLO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Marchello</h3>
                            <div>
                                 Sou o Marcelo Pereira, tenho 19 anos, gosto de Banco de dados e Analytics. Sempre estou em busca de novos conhecimentos e sou um viciado em Genshin.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/6S27S6pZ6o0"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >HIRO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Hiro</h3>
                            <div>
                                Prazer eu sou Vinicius Hiroki Vulgo Hiro, curso Ciências da computação
                                 e atualmente estou no 6º semestre, Java é a linguagem que possuo a
                                  maior afinidade. Moro em Mauá e sou zoado pelos meu companheiros
                                   por isso. Não meço esforços em dar passeios nos dias chuvosos,
                                    e não há nada que me acalma mais que uma caneca de chá verde.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/1SPu0KT-Ejg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >SAMORAI</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Samorai</h3>
                            <div>
                                Sou Bruno Taue Mansi, tenho 21 anos, gosto de Back-End, Banco de Dados e Mobile. Aprecio ter contato com novas tecnologias e sou um admirador assíduo da NBA.
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md3>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/1SPu0KT-Ejg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >ZAZAKI</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Zazaki</h3>
                            <div>
                                Sou Nicholas Sakan Yazaki, 21 anos, estudante de Ciências da Computação do 6º semestre, conhecimentos em Java e streamer nas horas vagas.
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
    name: 'QuemSomos',
};
</script>

<style scoped></style>
