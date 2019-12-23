<template>
    <div class="song-cover">
        <div class="song-bg" :style="{background: `url(${item.cover})`,backgroundSize: 'cover'}"></div>
        <div class="song-title">{{item.label}}</div>
        <div class="singer">{{item.singer}}</div>
    </div>

</template>

<script>
    export default {
        name: "SongCover",
        props: {
            item: Object
        }
    }
</script>

<style lang="less" scoped>
    .song-cover{
        width: 165px;
        .song-bg{
            height: 165px;
        }
        .song-title{
            padding: 10px 0;
        }
        .singer{
            color: #999;
        }
        margin-right: 20px;
    }

</style>