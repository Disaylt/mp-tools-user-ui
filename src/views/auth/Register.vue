<template>
    <div class="flex flex-col justify-between flex-wrap grow-1 p-2">
        <div class="flex flex-col gap-1">
            <InputText @click="clearLoginErrors" id="username" placeholder="Логин" v-model="newUser.login"
                class="w-full" />
            <Message v-for="errorMessage in errors.login" severity="error" variant="simple" size="small">{{ errorMessage
                }}</Message>

            <InputText @click="clearEmailErrors" id="email" placeholder="Почта" v-model="newUser.email"
                class="w-full" />
            <Message v-for="errorMessage in errors.email" severity="error" variant="simple" size="small">{{ errorMessage
                }}</Message>

            <Password @click="clearPasswordErrors" class="mt-2" :invalid="checkEqualsPasswrod"
                v-model="newUser.password" type="password" placeholder="Пароль" inputClass="w-full" toggleMask
                promptLabel="Введите пароль" weakLabel="Слишком легкий" mediumLabel="Средней сложности"
                strongLabel="Надежный" />
            <Message v-for="errorMessage in errors.password" severity="error" variant="simple" size="small">{{
                errorMessage }}</Message>
            <Message v-if="checkEqualsPasswrod" severity="error" variant="simple" size="small">Пароли не совпадают.
            </Message>

            <Password v-model="repeatPassword" inputClass="w-full" placeholder="Повторите пароль" toggleMask
                :feedback="false" />
        </div>
        <div class="mt-2 gap-2 flex flex-col gap-1">
            <Button :disabled="checkEqualsPasswrod" :loading="isLoadRegisterButton" @click="register()" class="w-full"
                label="Зарегистрироваться" raised />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import type { AxiosError } from "axios";
import type { NewUser, RegisterErrorMessages } from "../../models/auth/user.model";
import userService from "../../services/auth/user.service";
import type { ParamHttpErrorBody } from "../../models/common/http-request.model";
import { useUserStore } from "../../store/auth/user.store";

const router = useRouter();
const userStore = useUserStore();

const isLoadRegisterButton = ref<boolean>(false);
const repeatPassword = ref<string>("");
const errors = ref({
                login: [] as string[],
                password: [] as string[],
                email: [] as string[]
            });
const newUser = ref<NewUser>({
                login: "",
                email: "",
                password: ""
            });
const register = async () => {
    isLoadRegisterButton.value = true;
    setDefaultErrors();

    await userService.register(newUser.value)
        .then((response) => {
            userStore.set(response.data.identityDetails);
            router.push("/panel")
        })
        .catch((er: AxiosError<ParamHttpErrorBody<RegisterErrorMessages>>) => {
            if (er.response) {
                errors.value.email = er.response.data.errors.Email;
                errors.value.login = er.response.data.errors.Login;
                errors.value.password = er.response.data.errors.Password;
            }
        })
        .finally(() => {
            isLoadRegisterButton.value = false;
        });
}

const setDefaultErrors = () => {
    errors.value = {
                login: [] as string[],
                password: [] as string[],
                email: [] as string[]
            }
}

const clearLoginErrors = () => {
    errors.value.login = []
}

const clearEmailErrors = () => {
    errors.value.email = []
}

const clearPasswordErrors = () => {
    errors.value.password = []
}

const checkEqualsPasswrod = computed<boolean>(() => {
    return repeatPassword.value !== newUser.value.password && repeatPassword.value.length > 0;
})
</script>

<style lang="scss"></style>