<template>
    <section class="header-search">
        <div class="search-icon">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.5" cy="6.5" r="6" stroke="black"/>
                <rect x="10.916" y="10.209" width="7.6014" height="1" transform="rotate(45 10.916 10.209)" fill="black"/>
            </svg>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HeaderSearch"
    }
</script>

<style scoped lang="scss">
    .header-search{
        position: relative;
    }

    .search-icon{
        position: relative;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        svg{
            width: 100%;
            height: 100%;
        }
    }

    .black-header {
        .search-icon circle {
            stroke: #fff;
        }
        .search-icon rect {
            fill: #fff;
        }
    }
</style>