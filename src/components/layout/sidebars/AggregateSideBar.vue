<template>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <div>{{ name }}</div>
    <Button @click="userService.logout()" type="button" label="logout" icon="pi pi-user" />
    <Button @click="getDetails()" type="button" label="getdetails" icon="pi pi-user" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import userService from '../../../services/auth/user.service';

const name = ref<string>("Агрегатор");

const getDetails = async () => {

    await userService.getInfo()
        .then((resp) => {
            console.log(resp)
        })
        .catch(() => {
            
        })
}

</script>

<style lang="scss"></style>