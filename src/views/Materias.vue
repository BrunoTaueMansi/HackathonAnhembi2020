<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">Minhas Matérias</h1>
            <div
                v-for="(item, idx) in materias"
                class="subheading mb-2"
                :key="idx"
            >
                {{ item }}
            </div>
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
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getmaterias');
        }
    }
};
</script>

<style scoped></style>
