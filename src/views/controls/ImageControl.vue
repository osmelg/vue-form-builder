<template>
    <div>
        <select v-model="geturl" @change="addImage">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <div v-if="seturl">
            <img
                :src="require(`../../assets/imagesbank/${seturl}.jpg`)"
                alt="Imagen" 
                style="height:250px; width:250px; object-fit:cover;">
        </div>
    </div>
</template>

<script>
export default {
    name: "ImageControl",
    data(){
        return{
            seturl: '',
            geturl: ''
        }
    },
    methods:{
        addImage(){
            this.seturl = this.geturl;
        }
    }
}
</script>

<style>

</style>