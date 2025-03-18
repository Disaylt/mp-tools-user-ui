<template>
    <div v-if="isLoad" class="flex justify-center items-center flex-wrap grow p-2">
        <ProgressSpinner />
    </div>
    <div v-else class="flex flex-col justify-between grow p-2">
        <div class="flex flex-col gap-1">
            <InputText @click="clearEmailErrors()" id="email" type="text" placeholder="Почта" v-model="data.email" class="w-full" />
            <Message v-for="errorMessage in errors.email" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
            <Password @click="clearPasswordErrors()" v-model="data.password" id="password" type="password" inputClass="w-full" placeholder="Пароль" toggleMask :feedback="false" />
            <Message v-for="errorMessage in errors.password" severity="error" variant="simple" size="small">{{ errorMessage }}</Message>
        </div>
        <div class="">
            <Button :loading="isLoadLoginButton" @click="login()" class="w-full mt-2" label="Войти" raised />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { AxiosError } from "axios";
import type { Login, LoginErrorMessages } from "../../models/auth/user.model";
import type { ParamHttpErrorBody } from "../../models/common/http-request.model";
import userService from "../../services/auth/user.service";
import authSrvice from "../../services/auth/auth.srvice";

const router = useRouter();

const isLoad = ref(false);
const isLoadLoginButton = ref(false);
const errors = ref({
    password: [] as string[],
    email: [] as string[]
});
const data = ref<Login>({
    email: "",
    password: ""
});

const login = async () => {
    isLoadLoginButton.value = true;

    await userService.login(data.value)
    .then((resp) => {
        authSrvice.addTokens(resp.data.authDetails);
        router.push("/panel");
    })
    .catch((error) => {
        const axiosError = error as AxiosError<ParamHttpErrorBody<LoginErrorMessages>>;
        if (axiosError.response) {
            errors.value.email = axiosError.response.data.errors.Email;
            errors.value.password = axiosError.response.data.errors.Password;
        }
    })
    .finally(() => {
        isLoadLoginButton.value = false;
    })
};

const tryRefreshToken = async () => {
    isLoad.value = true;

    await authSrvice.refreshTokens()
        .then(() => {
            router.push("/panel");
        })
        .catch(() => {
            
        })
        .finally(() => {
            isLoad.value = false;
        })
};

const clearEmailErrors = () => {
    errors.value.email = [];
};

const clearPasswordErrors = () => {
    errors.value.password = [];
};

onMounted(async () => {
    await tryRefreshToken();
});

</script>

<style lang="scss">

</style>