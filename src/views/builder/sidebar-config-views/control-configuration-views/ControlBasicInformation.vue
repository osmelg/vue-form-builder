<template>
    <SidebarToggleableContainer headline="Detalles basicos">
        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderLabelFormUniqueId')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" :value="control.uniqueId" readonly>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderLabelFormName')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.name">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderFormLabel')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.label">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderFormSubLabel')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.subLabel">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                {{$t('builderFormShowLabel')}}
                <input type="checkbox" v-model="control.isShowLabel">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderFormPlaceholder')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.placeholderText">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderFormDefaultValue')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.defaultValue">
        </div>

    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlBasicInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object
        }
    }
</script>

<style scoped>

</style>