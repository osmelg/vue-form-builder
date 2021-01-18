<template>
    <div>
        <select v-model="geturl">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <div>
            <!-- <img :src="`/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`./${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`${publicPath}${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->


            <!-- <img :src="`${1}`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="'../../assets/'+geturl+'.jpg'" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`./assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`~/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`@/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`@/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`@/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`@~/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="__dirname + `../../assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="__static + `/assets/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`${publicPath}${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`~/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="`~@/${geturl}.jpg`" style="height:250px; width:250px; object-fit:cover;"> -->
            <!-- <img :src="require(`@/public/${geturl}.jpg`)" style="height:250px; width:250px; object-fit:cover;"> -->
        </div>
        <div v-if="geturl === '1'">
            <img :src="`${one}`" style="height:250px; width:250px; object-fit:cover;">
        </div>
        <div v-else-if="geturl === '2'">
            <img :src="`${two}`" style="height:250px; width:250px; object-fit:cover;">
        </div>  
        <div v-else-if="geturl === '3'">
            <img :src="`${three}`" style="height:250px; width:250px; object-fit:cover;">
        </div>               
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "ImageControl",
    data(){
        return{
            geturl: '',
            publicPath: process.env.BASE_URL,
            one: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983329/1_qta3db.jpg',
            two: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983332/2_bnjvig.jpg',
            three: 'https://res.cloudinary.com/dghbwroq3/image/upload/v1610983338/3_gpqm8a.jpg',
        }
    },
    methods:{
        // addImage(){
        //     this.seturl = this.geturl;
        // },
        // getImgUrl(pic) {
        //     return require(`../../../public/${pic}.jpg`);
        // }        
    }
}
</script>

<style>

</style>