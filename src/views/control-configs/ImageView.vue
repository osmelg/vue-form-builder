<template>
    <div>
        <select type="text" v-model="control.geturl">
            <option v-for="item in api" :key="item.id" :value="item.url">{{item.description}}</option>
        </select>
    </div>
</template>

<script>
import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

export default {
    name: "ImageView",
    mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],
    data(){
        return{
            api: '',
        }
    },
    methods:{
        getApi(){
            const apiData = [
                {id: '1', description: 'Logo Qplus', url: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983329/1_qta3db.jpg'},
                {id: '2', description: 'Logo Finning', url: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983332/2_bnjvig.jpg'},
                {id: '3', description: 'Logo Caterpillar', url: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983338/3_gpqm8a.jpg'}
            ];
            this.api = apiData;
        },       
    },
    mounted(){
        this.getApi();
    }
}
</script>

<style>

</style>