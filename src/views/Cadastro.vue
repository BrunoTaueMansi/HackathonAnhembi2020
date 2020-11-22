<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue-grey">
                        <v-toolbar-title>Cadastro</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                                data-cy="signinEmailField"
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                data-cy="signinPasswordField"
                                v-model="password"
                                :rules="passwordRules"
                                required
                            >
                            </v-text-field>
                            <v-radio-group v-model="role">
                                <v-radio
                                    label="Professor"
                                    value="professor"
                                    color="cyan darken-2"
                                ></v-radio>
                                <v-radio
                                    label="Aluno"
                                    value="aluno"
                                    color="cyan lighten-2"
                                ></v-radio>
                            </v-radio-group>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            :disabled="!valid"
                            @click="submit"
                            data-cy="signinSubmitBtn"
                            >Cadastrar</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Signin',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            role:'aluno',
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
                this.$store.dispatch('cadastro', {
                    email: this.email,
                    password: this.password
                });
                
            }
        }
    }
};
</script>

<style scoped></style>
