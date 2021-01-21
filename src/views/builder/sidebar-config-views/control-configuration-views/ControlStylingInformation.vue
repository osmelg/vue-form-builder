<template>
    <SidebarToggleableContainer headline="Estilos/Clases">
        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderLabelStyleContainerClass')}}</label>
            <select :class="styles.FORM.FORM_CONTROL" v-model="control.containerClass">
                <option v-for="(className, classID) in containerClasses"
                        :key="className"
                        :value="className">
                    {{classID}} ({{className}})
                </option>
            </select>
        </div>

        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderLabelStyleContainerAdditionalCasses')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalContainerClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderLabelStyleControlAdditionalClasses')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalFieldClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>{{$t('builderStyleControlLabelClasess')}}</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalLabelClass">
        </div> -->
    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlStylingInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object
        },

        computed: {
            containerClasses() {
                return this.styles.COLUMNS
            }
        }
    }
</script>

<style scoped>

</style>