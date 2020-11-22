<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                A CASA DAS
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-3"
            >
                APRESENTAÇÕES INTERATIVAS
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                Uma melhoria para as suas aulas onlines
            </div>
            <v-btn fab class="mt-5 cyan darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://images-ext-1.discordapp.net/external/rCiva-_hInX7Ur7C5rwuLgayuGPKkdIQ0mwgAP4ZXfU/https/nova-escola-producao.s3.amazonaws.com/VhBEcXRUkERtazZvjpNAsuQx3w9wXVbXB4wBeGXFPAWJykhAcxwrkJEvRb6Z/gettyimages-debate-praticas-sala-de-aula.jpg?width=1008&height=671');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
