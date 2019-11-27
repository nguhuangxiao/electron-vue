<template>
    <div class="ngu-sidebar">
        <div class="container">
            <user-info></user-info>
            <div class="music-menu music-online">
                <div class="title">在线音乐</div>
                <ul>
                    <li class="active">音乐馆</li>
                    <li>视频</li>
                    <li>个性电台</li>
                </ul>
            </div>
            <div class="music-menu music-my">
                <div class="title">在线音乐</div>
                <ul>
                    <li>我喜欢</li>
                    <li>本地和下载</li>
                    <li>播放历史</li>
                    <li>试听列表</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import UserInfo from '@/components/layout/sidebar/user-info'
    export default {
        name: "SidebarIndex",
        components: {
            'user-info': UserInfo
        }
    }
</script>

<style lang="less" scoped>
    .ngu-sidebar{
        width: 219px;
        background: #efefef;
        display: flex;
    }
    .music-online{

    }
    .music-menu{
        width: 100%;
        .title{
            color: @font-color-minor;
            padding: 8px 12px;
            margin-bottom: 7px;
        }
        >ul{
            list-style: none;
            li{
                padding: 8px 12px;
                border-radius: 3px;
            }
        }
        .active{
            background: @color-primary;
            color: #fff;
        }

    }
</style>