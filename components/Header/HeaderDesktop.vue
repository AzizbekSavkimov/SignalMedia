<template>
    <header class="full-width" :class="{'black-header' : blackHeader === true}">
        <section class="container">
            <router-link to="/" class="logo">
                <svg width="225" height="23" viewBox="0 0 225 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.176 10.228C0.176 16.724 5.048 20.196 10.2 20.196C14.288 20.196 18.46 18.04 19.3 12.86H15.268C14.596 15.24 12.608 16.388 10.172 16.388C6.672 16.388 4.404 13.588 4.404 10.228C4.404 6.504 6.728 3.984 10.2 3.984C12.552 3.984 14.316 4.964 15.184 7.176H19.244C18.348 2.332 14.148 0.204 10.2 0.204C5.048 0.119999 0.176 3.704 0.176 10.228ZM34.9168 8.8V20H39.0888V0.316H37.7728L26.7688 11.516V0.399999H22.5688V20.056H23.8288L34.9168 8.8ZM55.5515 4.18C55.5515 2.808 55.5515 1.772 55.5515 0.399999C51.6315 0.399999 47.5435 0.399999 43.6235 0.399999C43.6235 6.924 43.6235 13.476 43.6235 20C45.0235 20 46.4235 20 47.7955 20C47.7955 14.68 47.7955 9.5 47.7955 4.18H55.5515ZM74.1557 20V0.399999H69.9557V7.876H62.4517V0.399999H58.2797V20H62.4517V11.712H69.9557V20H74.1557ZM90.2702 16.752L91.8102 20H96.1502V19.44L87.1902 0.231999H85.2582L76.2422 19.44V20H80.6102L82.1222 16.752H90.2702ZM86.2102 6.756L88.9262 13.224H83.4942L86.2102 6.756ZM104.724 4.152H110.072V20H114.244V0.399999C110.24 0.399999 105.116 0.399999 101.056 0.399999L99.5996 14.232C99.3476 16.388 98.8716 17.144 96.5196 16.892L96.4356 19.916C101.588 20.644 103.296 19.468 103.772 14.372L104.724 4.152ZM135.063 9.668L127.195 0.343999H125.655V20H129.855V9.388L134.783 15.548H135.315L140.243 9.388V20H144.443V0.343999H142.931L135.063 9.668ZM160.991 0.399999H148.979V20H161.215V16.192H153.207V11.712H160.487V8.044H153.207V4.068H160.991V0.399999ZM171.386 4.012H176.398V16.528H169.034C169.874 15.968 170.266 14.736 170.35 13.868L171.386 4.012ZM163.294 16.444V22.772H167.242V20C171.47 20 174.634 20 178.862 20V22.772H182.614V16.444H180.514V0.399999C176.51 0.399999 171.75 0.399999 167.746 0.399999L166.206 13.7C165.982 15.576 165.646 16.416 163.966 16.444H163.294ZM198.296 8.8V20H202.468V0.316H201.152L190.148 11.516V0.399999H185.948V20.056H187.208L198.296 8.8ZM218.594 16.752L220.134 20H224.474V19.44L215.514 0.231999H213.582L204.566 19.44V20H208.934L210.446 16.752H218.594ZM214.534 6.756L217.25 13.224H211.818L214.534 6.756Z" fill="#FB4033"/>
                </svg>
            </router-link>
            <header-links/>
            <header-search/>
        </section>
    </header>
</template>

<script>
    import HeaderLinks from "./HeaderLinks";
    import HeaderSearch from "./HeaderSearch";
    export default {
        name: "HeaderDesktop",
        components: {HeaderSearch, HeaderLinks},
        data() {
            return {
                blackHeader: false
            }
        },
        watch: {
            $route(to, from) {
                if(to.path === '/channels') {
                    this.blackHeader = true;
                } else {
                    this.blackHeader = false;
                }
            }
        }
        
    }
</script>

<style scoped lang="scss">
    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        height: 15rem;
        background: #ffffff;
        @include material-shadow-2;
        .container{
            position: relative;
            height: 100%;
            @include flex-between-center-nowrap;
        }
    }

    .logo{
        position: relative;
        display: block;
        width: 56.5rem;
        min-width: 56.5rem;
        height: 7rem;
        svg{
            width: 100%;
            height: 100%;
        }
    }

    .black-header {
        background: #000;
    }
</style>