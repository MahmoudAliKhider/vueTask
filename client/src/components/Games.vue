<template>
    <div class="con">
        <RouterLink to="/">
            <h1 class="gameText">Top Games</h1>
        </RouterLink>

        <div v-if="loading">Loading...</div>
        <div v-else>
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
                            <p class="metacritic" :style="{ backgroundColor: getBackgroundColor(game.metacritic)}">{{game.metacritic }}</p>
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

<script setup>
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
        games.value = response.data.results;
        loading.value = false;
    } catch (error) {
        console.error("Error fetching games:", error);
    }
}


const games = ref([]);
const loading = ref(true);

loadData();
</script>


<style scoped>
.con {
    margin: 0 auto;
    padding: 90px;
}

.con h1 {
    font-size: "5xl";
    margin-bottom: 20px;
    font-weight: 700;
    color: #2d2d2d;
}

.games-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.game-card {
    width: calc(30% - 10px);
    margin-bottom: 20px;
    /* border: 1px solid #ddd; */
    border-radius: 8px;
    height: 30%;
}

.game-image {
    width: 100%;
    height: 230px;
    border-radius: 8px;
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
</style>
