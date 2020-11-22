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
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
