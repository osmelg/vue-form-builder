/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */


import Vue from 'vue'
import App from './App.vue'
import {VueFormBuilderPlugin} from "@/index";
// import messages from './views/builder/prueba-locales.json';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

Vue.use(VueFormBuilderPlugin);
Vue.use(VueI18n);

const messages = {
  en: {
    "builderPTextBox": "Text box",
    "builderPOneLineTextBlock": "One line text box",
    "builderPNumberBox": "Number box",
    "builderPOneLineNumberBox": "One line number box",
    "builderPMultilinealTextBox": "Multilineal text box",
    "builderPCalendar": "Calendar",
    "builderPSimpleCalendar": "Simple calendar",
    "builderPDropdownList": "Dropdown list",
    "builderPSimpleDropdownList": "Simple dropdown list",
    "builderPCheckboxBox": "Checkbox box",
    "builderPSimpleCheckboxBox": "Simple checkbox box",
    "builderPRadioBox": "Radio box",
    "builderPSimpleRadioBox": "Simple radio box",
    "builderPLabel": "Label",
    "builderPSimpleLabel": "Simple label",
    "builderPButton": "Button",
    "builderPSimpleButton": "Simple button",
    "builderPEmptySpace": "Empty space",
    "builderPSimpleEmptySpace": "Simple empty space",
    "builderButtonCreate": "Configurar",
    "builderSpanAddSection": "Add section",
    "builderPNormalBlock": "Normal block",
    "builderPNormalBlockWithHeadline": "Normal block with headline",
    "builderPToggleableBlock": "Toggeable block",
    "builderPSectionBlockWithToggle": "Section Block with toggle",
    "builderTextDroppableZoneControls": "Droppable Zone for controls",
    "builderHMainFormConfiguration": "Main form configuration",
    "builderLabelFormHeadline": "Form headline",
    "builderLabelFormSubHeadline": "Form sub headline",
    "builderLabelShowFormHeadline": "Show form headline",
    "builderLabelFormWrapper": "Wrapper form outside of the form?",
    "builderButtonSave": "Save",
    "builderButtonSaveAndClose": "Save and close",
    "builderLabelShowHeadlineAdditionalClass": "Sub headline Additional Class (CSS)",
    "builderLabelHeadline": "Title",
    "builderHSectionConfiguration": "Section configuration",
    "builderButtonConfiguration": "Configuration",
    "builderButtonDelete": "Configuration",
    "builderSpanAddControl": "Add control",
    "builderHChooseElementsTitle": "Choose yours elements",
    "builderHControlConfiguration": "Control configuration",
    "builderLabelFormUniqueId": "Unique Id",
    "builderLabelFormName": "Name (must be unique)",
    "builderFormLabel": "Label",
    "builderFormSubLabel": "Sub label",
    "builderFormShowLabel": "Show label?",
    "builderFormPlaceholder": "Field Placeholder (Optional)",
    "builderFormDefaultValue": "Default value (optional)",
    "builderLabelStyleContainerClass": "Container class",
    "builderLabelStyleContainerAdditionalCasses": "Container additional classes",
    "builderLabelStyleControlAdditionalClasses": "Control additional classes",
    "builderStyleControlLabelClasess": "Control label additional classes",
    "builderLabelValidationTitle": "Validation rules",
    "builderLabelValidationRule": "Validation rule",
    "builderOptionChooseARule": "Choose a rule",
    "builderLabelValidationRuleValue": "Rule value",
    "builderLabelValidationDefaultErrorMessage": "Default error message",
  },
  es: {
    "builderPTextBox": "Caja de texto",
    "builderPOneLineTextBlock": "Caja de texto de una línea",
    "builderPNumberBox": "Caja de números",
    "builderPOneLineTextBox": "Caja de números de una línea",
    "builderPMultilinealTextBox": "Caja de texto multilineal",
    "builderPCalendar": "Calendario",
    "builderPSimpleCalendar": "Calendario simple",
    "builderPDropdownList": "Lista desplegable",
    "builderPSimpleDropdownList": "Lista desplegable simple",
    "builderPCheckboxBox": "Caja de checkbox",
    "builderPSimpleCheckboxBox": "Caja de checkbox simple",
    "builderPRadioBox": "Caja de radio",
    "builderPSimpleRadioBox": "Caja de radio simple",
    "builderPLabel": "Label",
    "builderPSimpleLabel": "Label simple",
    "builderPButton": "Botón",
    "builderPSimpleButton": "Botón simple",
    "builderPEmptySpace": "Espacio en blanco",
    "builderPSimpleEmptySpace": "Espacio en blanco simple",
    "builderButtonCreate": "Configurar",
    "builderSpanAddSection": "Agregar sección",
    "builderPNormalBlock": "Bloque normal",
    "builderPNormalBlockWithHeadline": "Bloque normal con encabezado",
    "builderPToggleableBlock": "Alternar bloque",
    "builderPSectionBlockWithToggle": "Sección con bloque para alternar",
    "builderTextDroppableZoneControls": "Zona desplegable para controles",
    "builderHMainFormConfiguration": "Configuración del formulario principal",
    "builderLabelFormHeadline": "Título del formulario",
    "builderLabelFormSubHeadline": "Subtítulo del formulario",
    "builderLabelShowFormHeadline": "Mostrar título",
    "builderLabelFormWrapper": "Agregar formulario desde afuera?",
    "builderButtonSave": "Guardar",
    "builderButtonSaveAndClose": "Guardar y cerrar",
    "builderLabelShowHeadlineAdditionalClass": "Subtítulo clase adicional (CSS)",
    "builderLabelHeadline": "Titulo",
    "builderHSectionConfiguration": "Configuracion de sección",
    "builderButtonConfiguration": "Configuración",
    "builderButtonDelete": "Borrar",
    "builderSpanAddControl": "Agregar control",
    "builderHChooseElementsTitle": "Elige tus elementos",
    "builderHControlConfiguration": "Configuracion de elementos",
    "builderLabelFormUniqueId": "Id unico",
    "builderLabelFormName": "Nombre (debe ser unico)",
    "builderFormLabel": "Etiqueta",
    "builderFormSubLabel": "Sub etiqueta",
    "builderFormShowLabel": "Mostrar etiqueta?",
    "builderFormPlaceholder": "Campo visible (opcional)",
    "builderFormDefaultValue": "Valor por defecto (opcional)",
    "builderLabelStyleContainerClass": "Clase del contenedor",
    "builderLabelStyleContainerAdditionalCasses": "Clases adicionales del contenedor",
    "builderLabelStyleControlAdditionalClasses": "Clases adicionales para elementos",
    "builderStyleControlLabelClasess": "Clases adicionales para etiquetas",
    "builderLabelValidationTitle": "Reglas de validacion",
    "builderLabelValidationRule": "Regla de validacion",
    "builderOptionChooseARule": "Selecciona una regla",
    "builderLabelValidationRuleValue": "Valor de regla",
    "builderLabelValidationDefaultErrorMessage": "Mensaje de error por defecto",
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
