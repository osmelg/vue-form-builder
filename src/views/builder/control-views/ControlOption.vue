<template>
    <div class="control-option-container">

        <div class="option-control drag-item" title="Re-position / Drag">
            <span v-html="$form.getIcon('navigationMore', '24px', '24px', '#3d5265')"></span>
        </div>

        <div class="option-control" title="Control Configuration" @click="clickedConfiguration">
            <span v-html="$form.getIcon('cog', '24px', '24px', '#3d5265')"></span>
        </div>

        <div class="option-control" title="Delete Control" @click="clickedDelete">
            <span v-html="$form.getIcon('trash', '24px', '24px', '#3d5265')"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ControlOption",
        methods: {
            /**
             * Emit to parent to delete this control...
             */
            clickedDelete() {
                this.$emit('delete', true)
            },

            /**
             * Emit to parent to open the configuration
             */
            clickedConfiguration() {
                this.$emit('config', true)
            }
        },
    }
</script>