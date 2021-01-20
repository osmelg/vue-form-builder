<template>
    <div>
        <img :src='`${control.geturl}`' class="image">
    </div>
</template>

<script>
import {CONTROL_FIELD_EXTEND_MIXIN} from "@/mixins/control-field-extend-mixin";
import {GLOBAL_CONFIG} from "@/configs/global";
import {EVENT_CONSTANTS} from "@/configs/events";

export default {
    name: "ImageControl",
    mixins: [CONTROL_FIELD_EXTEND_MIXIN],
}
</script>

<style>
    .image {max-width: 500px; object-fit: cover;}
</style>