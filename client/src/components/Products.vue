<template>
    <div class="con">
        <h1>Top Games</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="games-row">
                <div v-for="game in games" :key="game.id" class="game-card">
                    <img :src="game.background_image" alt="Game Cover" class="game-image">
                    <h2>{{ game.name }}</h2>
                    <p>Released Date: {{ game.released }}</p>
                    <p>Rating: {{ game.rating }}</p>
                    <p>Ratings Count: {{ game.ratings_count }}</p>
                    <p>Metacritic Score: {{ game.metacritic }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "GamesList",
    data() {
        return {
            games: [],
            loading: true,
        };
    },
    async mounted() {
        try {
            const response = await axios.get("https://api.rawg.io/api/games", {
                params: {
                    key: "7684a8f5322d402c89f9157ef5838f63",
                },
            });
            this.games = response.data.results;
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style scoped>
.con {
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
}

.games-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.game-card {
    width: calc(25% - 10px); 
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 30%;
}

.game-image {
    width: 100%;
    height: 70%;
    border-radius: 8px;
}

.game-card h2 {
    margin-top: 0;
    font-size: 18px;
    padding-left: 6px;
}

.game-card p {
    margin: 5px 0;
    font-size: 14px;
    padding: 4px;
}
</style>
