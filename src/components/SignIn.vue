<template>
    <v-app>
        <v-content>
            <v-container>
                <v-row class="text-center">
                    <v-col>
                        <h2>로그인</h2>
                    </v-col>
                </v-row>
                <v-form
                    ref="form"
                    v-model="valid"
                >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="passwordShow ? 'text' : 'password'"
                        label="비밀번호"
                        @click:append="passwordShow = !passwordShow"
                        outlined
                        required
                    ></v-text-field>

                    <v-btn
                        :disabled="!valid"
                        color="info"
                        class="mr-4"
                        @click="validate"
                        block
                    > 로그인 </v-btn>
                </v-form>
                <v-row class="text-center">
                    <v-col>
                        <a class="signup"><u>계정이 없으신가요?</u></a>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  export default {
    name: 'SignIn',

    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordShow: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
    .signup {
        text-decoration: underline;
        color: black;
    }
</style>
