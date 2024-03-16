<script setup>
import Header from '../components/Header.vue'
import { ref } from 'vue';
import axios from "axios";
import { RouterLink } from 'vue-router';

const getPlatformIcon = (platformName) => {
    switch (platformName.toLowerCase()) {
        case 'pc':
            return 'fa-windows';
        case 'playstation':
        case 'playstation 4':
        case 'playstation 5':
            return 'fa-playstation';
        case 'xbox series s/x':
        case 'xbox one':
            return 'fa-xbox';
        case 'macos':
            return 'fa-apple';
        case 'nintendo switch':
            return 'fa-nintendo-switch';
        case 'linux':
            return "fa-linux";
        case 'android':
            return "fa-android";
        case 'web':
            return "fa-aws";
        case "nintendo-switch":
            return "fa-shuffle"
        default:
            return 'fa-apple';
    }
}

const getBackgroundColor = (score) => {
    if (score > 85) {
        return '#C6F6D5';
    } else if (score > 60) {
        return '#F1F6B3';
    } else {
        return '';
    }
}

const loadData = async () => {
    try {
        const response = await axios.get("https://api.rawg.io/api/games", {
            params: {
                key: "7684a8f5322d402c89f9157ef5838f63",
            },
        });
        games.value = response.data.results.slice(0,6);
    } catch (error) {
        console.error("Error fetching games:", error);
    }
}

const games = ref([]);

loadData();
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

        <div class="games">
            <div class="gameTitle">
                <h1>Games</h1>
                <RouterLink to="/games"><button type="button" >more</button></RouterLink>
            </div>
            <div class="games-row">
                <div v-for="game in games" :key="game.id" class="game-card">
                    <img :src="game.background_image" alt="Game Cover" class="game-image">
                    <div class="line1">
                        <div class="icons">
                            <p v-for="platform in game.platforms" :key="platform.platform.id">
                                <FontAwesome :icon="['fab', `${getPlatformIcon(platform.platform.name)}`]" size="lg" />
                            </p>
                        </div>
                        <div>
                            <p class="metacritic" :style="{ backgroundColor: getBackgroundColor(game.metacritic) }">
                                {{ game.metacritic }}</p>
                        </div>
                    </div>
                    <div class="title">
                        <h1>{{ game.name }}</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.homeContainer {
    height: 85vh;
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
    padding-left: 30px;
    color: #4a4475;
    font-weight: 800;
    font-size: 32px;
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
.games{
    overflow-x: auto;
    white-space: nowrap;
}
.gameTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title h1{
    font-weight: 500;
}
.gameTitle button{
    border-radius: 15px;
    padding: 10px;
    background-color: #4a4475;
    color: #fff;
    width: 60px;
    margin-right: 20px;
    cursor: pointer;
}
.gameTitle h1{
    padding: 10px;
    padding-left: 30px;
    color: #4a4475;
    font-weight: 800;
    font-size: 32px;
    
}
.games-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 34px;

}

.game-card {
    width: calc(30% - 10px);
    margin-bottom: 20px;
    border-radius: 8px;
    height: 30%;

}

.game-image {
    width: 100%;
    height: 230px;
    border-radius: 8px;
    object-fit: cover;

}

.game-card h2 {
    margin-top: 0;
    font-size: 18px;
    padding-left: 6px;
}

.icons {
    display: flex;
    color: #717171;
}

.line1 {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.metacritic {
    width: 50px;
    text-align: center;
    border-radius: 5px;
    color: #4D543D;
    font-weight: bold;
}

.game-card p {
    margin: 5px 0;
    font-size: 14px;
    padding: 4px;
}

@media screen and (max-width: 1200px) {
    /* Adjust styles for smaller screens */
    .games-row {
        padding: 20px;
    }

    .game-card {
        width: calc(45% - 10px);
    }
}

@media screen and (max-width: 768px) {
    /* Further adjust styles for even smaller screens */
    .games-row {
        padding: 10px;
    }

    .game-card {
        width: calc(100% - 10px);
    }

    .game-card h2 {
        font-size: 16px; /* Adjust font size for smaller screens */
    }
}
</style>