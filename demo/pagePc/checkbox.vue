<template>
    <div>
        <v-checkbox size="small" :checked="false" name="iiii">
            <span>asdas</span>
        </v-checkbox>
        <v-checkbox size="small" :checked="checked" text="textCheckbox" @onClick="getInfo"></v-checkbox>
        <v-checkbox-group :checkboxData="checkboxData" checkedKey="value" name="uuuu" :checkedDatas="checkedDatas" @singleClick="singleClick"
            @updateCheckedDatas="updateCheckedDatas"></v-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkbox',
        data() {
            return {
                checked: true,
                checkboxData: [{
                    size: 'small',
                    checked: true,
                    value: 1,
                    text: 'tetttt1'
                }, {
                    size: 'small',
                    checked: false,
                    value: 2,
                    text: 'tetttt2'
                }, {
                    size: 'small',
                    checked: false,
                    value: 3,
                    text: 'tetttt3'
                }, {
                    size: 'small',
                    checked: false,
                    value: 4,
                    text: 'tetttt4'
                }],
                checkedDatas: [2, 3, 4]
            }
        },
        methods: {
            getInfo: function (event, checked) {
                console.log('checked inner==>', checked);
                console.log('checked==>', this.checked)
            },
            singleClick: function (event, checked, value, index) {
                console.log('checked ==>', checked);
                console.log('value ==>', value);
                console.log('index ==>', index);
            },
            updateCheckedDatas: function (checkedDatas) {
                console.log('checkedDatas=>', checkedDatas)
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
