<template>
    <div>
        <select type="text" v-model="control.geturl" :class="styles.FORM.FORM_CONTROL">
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
                {id: '1', description: 'Encabezado', url: 'http://qpreq.qplus.com.ar/imgCheckList/header.PNG'},
                {id: '2', description: 'Engranaje 1', url: 'http://qpreq.qplus.com.ar/imgCheckList/Engranaje1.PNG'},
                {id: '3', description: 'Engranaje 2', url: 'http://qpreq.qplus.com.ar/imgCheckList/Engranaje2.PNG'},
                {id: '4', description: 'Engranaje 3', url: 'http://qpreq.qplus.com.ar/imgCheckList/Engranaje3.PNG'},
                {id: '5', description: 'Engranaje 4', url: 'http://qpreq.qplus.com.ar/imgCheckList/Engranaje4.PNG'},
                {id: '6', description: 'Distribución Delantera', url: 'http://qpreq.qplus.com.ar/imgCheckList/DistribucionDelantera.PNG'},
                {id: '7', description: 'Damper', url: 'http://qpreq.qplus.com.ar/imgCheckList/Damper.PNG'},
                {id: '8', description: 'Volante', url: 'http://qpreq.qplus.com.ar/imgCheckList/Volante.PNG'},
                {id: '9', description: 'Aire Acondicionado', url: 'http://qpreq.qplus.com.ar/imgCheckList/AireAcondicionado.PNG'},
                {id: '10', description: 'Soporte', url: 'http://qpreq.qplus.com.ar/imgCheckList/Soporte.PNG'},
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