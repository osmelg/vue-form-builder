<template>
    <div class="sidebar-form-configuration">
        <h5>builderHMainFormConfiguration</h5>

        <div :class="styles.FORM.FORM_GROUP">
            <label>builderLabelFormHeadline</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.headline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>builderLabelFormSubHeadline</label>
            <input type="text"
                   :class="styles.FORM.FORM_CONTROL"
                   v-model="formConfiguration.subHeadline">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                builderLabelShowFormHeadline
                <input type="checkbox" v-model="formConfiguration.isShowHeadline">
            </label>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                builderLabelFormWrapper
                <input type="checkbox" v-model="formConfiguration.renderFormTag">
            </label>
        </div>

        <div v-show="formConfiguration.renderFormTag">

            <div :class="styles.FORM.FORM_GROUP">
                <label>Form-TAG Action URL</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formActionURL">
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label>Form-TAG Method</label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="formConfiguration.formMethod">
            </div>

        </div>

        <div class="buttons">
            <button :class="styles.BUTTON.PRIMARY" @click="save(false)">
                builderButtonSave
            </button>
            <button :class="styles.BUTTON.INFO" @click="save(true)">
                builderButtonSaveAndClose
            </button>
        </div>
    </div>
</template>

<script>
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
    import {SIDEBAR_BODY_MIXIN} from "@/mixins/sidebar-body-mixin";
    import {FORM_DEFAULT_DATA} from "@/configs/form";

    /**
     * @property {FORM_DEFAULT_DATA} formConfiguration
     */
    export default {
        name: "SidebarFormConfiguration",
        mixins: [STYLE_INJECTION_MIXIN, SIDEBAR_BODY_MIXIN],
        data: () => ({
            // OVERRIDE IT FROM `SIDEBAR_BODY_MIXIN`
            dataKey: "formConfiguration",
            formConfiguration: Object.assign({}, FORM_DEFAULT_DATA),
        }),

        created() {
            // retrieve the data from `GlobalSidebar` passed in
            this.formConfiguration = Object.assign({}, this.formConfiguration, this.dataPackage)
        }
    }
</script>

<style scoped>

</style>