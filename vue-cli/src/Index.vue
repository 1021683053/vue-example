<template>
    <div class="context">

        <div class="group">
            <ui-toolbar
                type="colored" text-color="white" brand="APP" title="Inbox"
                show-brand
            >
                <div slot="actions">
                    <ui-icon-button
                        type="clear" color="white" icon="arrow_back"
                    ></ui-icon-button>

                    <ui-icon-button
                        type="clear" color="white" icon="star_border"
                    ></ui-icon-button>

                    <ui-icon-button
                        type="clear" color="white" icon="more_vert" has-dropdown-menu
                        :menu-options="menu" dropdown-position="bottom right"
                    ></ui-icon-button>
                </div>
            </ui-toolbar>
        </div>

    </div>

</template>

<script>
import { UiButton, UiTab, UiTabs, UiToolbar, UiIconButton } from 'keen-ui';
export default {
    data() {
        return {
            menu: [{
                id: 'settings',
                text: 'Settings'
            }, {
                id: 'about',
                text: 'About'
            }, {
                id: 'help',
                text: 'Help'
            }]
        };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {
        UiButton,
        UiTab,
        UiTabs,
        UiToolbar,
        UiIconButton
    }
};
</script>

<style>
    .context{
        height: 200px;
    }
</style>
