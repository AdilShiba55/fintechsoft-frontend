<template>
    <div id="my-modal" @click="$emit('close')">
        <div class="body" @click.stop>
            <div class="header">{{title}}</div>
            <div class="content">
                <slot name="content">
                    Content
                </slot>
            </div>
            <div class="footer">
                <slot name="footer">
                    <my-button :text="cancelButtonText"
                               :theme="cancelButtonTheme"
                               :disabled="buttonsDisabled"
                               @click="$emit('close')"/>
                    <my-button :text="saveButtonText"
                               :theme="saveButtonTheme"
                               :disabled="buttonsDisabled"
                               @click="$emit('close')"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

import MyButton from "@/components/MyButton.vue";

export default {
    components: {MyButton},
    props: {
        title: {type: String, default: 'Header'},
        cancelButtonText: {type: String, default: 'Отмена'},
        saveButtonText: {type: String, default: 'Сохранить'},
        cancelButtonTheme: {type: String, default: 'sad'},
        saveButtonTheme: {type: String, default: 'standard'},
        buttonsDisabled: {type: Boolean, default: false}
    }
}
</script>

<style lang="scss">
    #my-modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);

        .body {
            background-color: #fefefe;
            margin: 15% auto;
            border: 1px solid #888;
            width: 40em;
            max-width: 80%;
            border-radius: 4px;

            .header {
                border-bottom: cornflowerblue 1px solid;
                font-size: 24px;
                font-weight: bold;
            }
            .content {
                max-height: 200px;
                overflow-y: auto;
            }
            .footer {
                border-top: cornflowerblue 1px solid;
                display: flex;
                justify-content: right;
                gap: 10px;
            }

            .header, .content, .footer {
                padding: 20px;
            }
        }
    }
</style>
