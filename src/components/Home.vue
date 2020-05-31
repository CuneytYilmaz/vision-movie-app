<template>
    <div>
        <app-header />
        <loader v-if="isLoading" />
        <section class="movies container py-5">
            <div v-for="movies in groupedMovies" :key="movies.id" class="card-deck">
                <Movie v-for="movie in movies" :movie="movie" :key="movie.id" />
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './AppHeader';
import Loader from './Loader';
import Movie from './Movie';

export default {
    data() {
        return {
            isLoading: true
        }
    },
    methods: {
        ...mapActions([
            'fetchMovies'
        ])
    },
    computed: {
        ...mapGetters([
            'groupedMovies'
        ])
    },
    components: { Loader, AppHeader, Movie },
    created() {
        this.fetchMovies().then(() => {
            this.isLoading = false;
        });
    }
}
</script>