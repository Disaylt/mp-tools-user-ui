import type { App } from "vue";
import Button from 'primevue/button';
import Select from 'primevue/select';
import Chip from 'primevue/chip';
import Menu from 'primevue/menu';
import Popover from 'primevue/popover';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import SelectButton from 'primevue/selectbutton';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Ripple from 'primevue/ripple';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Skeleton from 'primevue/skeleton';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';
import Drawer from 'primevue/drawer';
import Dialog from 'primevue/dialog';
import FloatLabel from 'primevue/floatlabel';

class PrimeVueComponentManager{
    addTo(app : App<Element>){
        app.component("Dialog", Dialog);
        app.component("FloatLabel", FloatLabel);
        app.component("Drawer", Drawer);
        app.component("Button", Button);
        app.component("Select", Select);
        app.component("Chip", Chip);
        app.component("Menu", Menu);
        app.component("Popover", Popover);
        app.component("InputNumber", InputNumber);
        app.component("Card", Card);
        app.component("Fieldset", Fieldset);
        app.component("SelectButton", SelectButton);
        app.component("Tabs", Tabs);
        app.component("TabList", TabList);
        app.component("Tab", Tab);
        app.component("TabPanels", TabPanels);
        app.component("TabPanel", TabPanel);
        app.component("IftaLabel", IftaLabel);
        app.component("InputText", InputText);
        app.component("Password", Password);
        app.component("Skeleton", Skeleton);
        app.component("ProgressSpinner", ProgressSpinner);
        app.component("Message", Message);

        
        app.directive("Ripple", Ripple);
    }
}

export default new PrimeVueComponentManager();