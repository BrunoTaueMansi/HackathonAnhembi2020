<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Join Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                data-cy="joinEmailField"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                required
                                v-model="password"
                                :rules="passwordRules"
                                data-cy="joinPasswordField"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="joinSubmitBtn"
                            >Join</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Join',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'É necessario preencher o e-mail',
                v => /.+@.+/.test(v) || 'Seu e-mail deve ser um e-mail valido'
            ],
            passwordRules: [
                v => !!v || 'É necessario preencher a senha',
                v =>
                    v.length >= 6 ||
                    'Sua senha deve conter mais de 6 caracteres'
            ]
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
};
</script>

<style scoped></style>
