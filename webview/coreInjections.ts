// @ts-nocheck - Required to ignore weird pathing issues.
import { defineAsyncComponent } from 'vue';

// Not recommended to modify this file unless you are removing some core plugins for factions.
export const FactionCorePageInjections = {
    actions: {
        BankPaychecks: defineAsyncComponent(
            () => import('../../athena-plugin-factions-paychecks/components/BankPaychecks.vue'),
        ),
        DefaultActions: defineAsyncComponent(() => import('../../gp-factions-defaults/components/DefaultActions.vue')),
    },
    bank: {
        BankPaychecks: defineAsyncComponent(
            () => import('../../athena-plugin-factions-paychecks/components/BankPaychecks.vue'),
        ),
    },
    members: {},
    rankings: {},
    settings: {
        Paychecks: defineAsyncComponent(
            () => import('../../athena-plugin-factions-paychecks/components/Paychecks.vue'),
        ),
        DefaultSettings: defineAsyncComponent(
            () => import('../../gp-factions-defaults/components/DefaultSettings.vue'),
        ),
        Storage: defineAsyncComponent(() => import('../../gp-faction-storage/components/GPFactionStorage.vue')),
    },
};
