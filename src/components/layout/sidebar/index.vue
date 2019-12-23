<template>
    <div class="ngu-sidebar">
        <div class="container">
            <user-info></user-info>
            <div class="music-menu music-online">
                <div class="title">在线音乐</div>
                <ul>
                    <li class="active"><i class="fa fa-music"></i>音乐馆</li>
                    <li><i class="fa fa-caret-square-o-left"></i>视频</li>
                    <li><i class="fa fa-heartbeat"></i>个性电台</li>
                </ul>
            </div>
            <div class="music-menu music-my">
                <div class="title">我的音乐</div>
                <ul>
                    <li><i class="fa fa-heart-o"></i>我喜欢</li>
                    <li><i class="fa fa-tv"></i>本地和下载</li>
                    <li><i class="fa fa-hourglass-o"></i>播放历史</li>
                    <li><i class="fa fa-film"></i>试听列表</li>
                </ul>
            </div>
            <div class="music-menu music-my">
                <div class="title">我创建的歌单
                    <span class="right-ico">
                        <i class="fa fa-plus"></i><i class="fa fa-angle-up"></i>
                    </span>
                </div>
                <ul>
                    <li>车载音乐</li>
                </ul>
            </div>
            <div class="music-menu music-my">
                <div class="title">我收藏的歌单
                    <span class="right-ico">
                        <i class="fa fa fa-angle-up"></i>
                    </span>
                </div>
                <ul>

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
        font-size: 14px;
    }
    .music-online{

    }
    .music-menu{
        width: 100%;
        .title{
            color: @font-color-minor;
            font-size: @font-size-small;
            padding: 8px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .right-ico{
                >i{margin: 0 3px;font-size: 20px;}
            }
        }
        >ul{
            list-style: none;
            li{
                padding: 8px 12px;
                border-radius: 3px;
                .fa{
                    margin-right: 10px;
                }
            }
        }
        .active{
            background: @color-primary;
            color: #fff;
        }
    }
    .music-menu::after{
        content: '';
        display: block;
        margin-bottom: 15px;
    }
</style>