<script setup>
import Header from '../components/Header.vue'
// import Products from "../components/Products.vue";

</script>


<template>
    <div class="container">
        <div class="header">
            <Header />
        </div>
        <div class="homeContainer">
            <img src="../assets/images/banar2.jpg" alt="j" />
            <div class="homeText">
                <h1>CONNECT Professional Services</h1>
                <p>CONNECT Professional Services, founded in 2009, aims to be a leading IT services provider emphasizing
                    trust, quality, and expertise. Offering a broad range of state-of-the-art technology solutions, we
                    assist clients throughout the entire lifecycle of technology deployment. As a Gold Partner and
                    Preferred Solution Partner with Cisco Systems, we ensure top-notch networking solutions. Our
                    commitment to service quality is evidenced by our TL9000 certification since 2010.</p>
            </div>

        </div>
        <div class="Partners">
            <h1>Partners</h1>
            <div class="partners-list">
                <img src='../assets/images/Cisco-2.png' alt="Partner Image">
                <img src='../assets/images/MobileIron-Logo-1.png' alt="Partner Image">
                <img src='../assets/images/LogRhythm_lrg-1.png' alt="Partner Image">
                <img src='../assets/images/IBM-1-1.png' alt="Partner Image">
                <img src='../assets/images/fortinet-2-360x240.png' alt="Partner Image">
                <img src='../assets/images/F5-2.png' alt="Partner Image">
                <img src='../assets/images/VMWare-1-1.png' alt="Partner Image">

            </div>
        </div>
    </div>
</template>

<style scoped>
.homeContainer {
    height: 82vh;
    width: 100%;
    overflow: hidden;
}

.homeContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #110F24;
}

.homeText h1 {
    color: azure;
    position: absolute;
    top: 22%;
    margin-left: 6%;
    font-size: 33px;
}

.homeText p {
    color: white;
    position: absolute;
    top: 34%;
    margin-left: 6%;
    width: 78%;
    font-size: 18px;
    filter: drop-shadow(10px 5px 10px #0d1421);
    padding: 16px;
}

.Partners {
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px 0;
}

.Partners h1 {
    padding: 10px;
    color: #4a4475;
    font-weight: 700;
    font-size: 28px;
}

.partners-list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    margin-left: 2%;
}

.partners-list img {
    max-width: 160px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;

}
</style>