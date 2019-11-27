<template>
    <div class="ngu-user-info">
        <img src="../../../../assets/logo.png" class="avatar"/>
        <div class="grade">LV1</div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style lang="less" scoped>
    .ngu-user-info{
        display: flex;
        align-items: center;
        .avatar{
            width: 38px;
            height: 38px;
        }
        .grade{
            color: #fff;
            font-size: 12px;
            padding: 2px 5px;
            background: #31c27c;
        }
    }
</style>