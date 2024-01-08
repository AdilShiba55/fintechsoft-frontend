<template>
    <button id="my-button" :class="theme" :disabled="disabled">{{text}}</button>
</template>

<script>
    export default {
        props: {
            text: {type: String, default: 'Button'},
            theme: {type: String, default: 'standard'},
            disabled: {type: Boolean, default: false}
        }
    }
</script>

<style lang="scss">
    #my-button {
        font-size: 16px;
        color: #f2f2f2;
        font-weight: bold;
        padding: 7px;
        min-width: 120px;
        cursor: pointer;
        border-radius: 4px;
        text-transform: uppercase;
    }

    #my-button.standard {
        background-color: cornflowerblue;
    }
    #my-button.sad {
        background-color: #888888;
    }
</style>
