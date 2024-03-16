<template>
    <div class="page-not-found">
        <h1>404 </h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <RouterLink to="/"><button type="button">BACK TO HOME</button></RouterLink>
    </div>

</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>
.page-not-found {
    margin-left: 35%;
    margin-top: 6%;
    width: 380px;
    text-align: center;

}

.page-not-found h1 {
    font-size: 140px;
    color: rgb(82, 82, 153);
}

.page-not-found h2 {
    font-size: 20px;
    color: rgb(16, 16, 19);
}
.page-not-found button{
    margin-top: 7%;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    background-color:  rgb(82, 82, 153);
    cursor: pointer;
}
</style>