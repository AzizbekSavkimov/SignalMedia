<template>
    <section class="channel-page-body">
        <channel-page-sidebar/>
        <channel-page-content/>
    </section>
</template>

<script>
import ChannelPageContent from "../../components/ChannelPage/ChannelPageContent";
import ChannelPageSidebar from "../../components/ChannelPage/ChannelPageSidebar";

export default {
    name: "ChannelPageBody",
    components: { ChannelPageContent, ChannelPageSidebar },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
    .channel-page-body{
        max-width: 1224px;
        margin: 0 auto;
        @include flex-start-start-nowrap;
    }
</style>