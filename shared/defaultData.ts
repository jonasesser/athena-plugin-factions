import { Complete } from '../../../shared/utility/complete';
import { FactionRank, RankPermissions } from './interfaces';

export const DefaultRanks: Array<FactionRank> = [
    {
        name: 'Owner',
        actionPermissions: [],
        rankPermissions: {
            addMembers: true,
            bankAdd: true,
            bankRemove: true,
            kickMembers: true,
            manageMembers: true,
            manageRanks: true,
            manageRankPermissions: true,
            canOpenStorages: true,
        },
        vehicles: [],
        weight: 99,
    },
    {
        name: 'Member',
        actionPermissions: [],
        rankPermissions: {
            addMembers: false,
            bankAdd: false,
            bankRemove: false,
            kickMembers: false,
            manageMembers: false,
            manageRanks: false,
            manageRankPermissions: false,
            canOpenStorages: true,
        },
        vehicles: [],
        weight: 1,
    },
];

export const AllRankPermissions: Complete<RankPermissions> = {
    addMembers: false,
    bankAdd: false,
    bankRemove: false,
    kickMembers: false,
    manageMembers: false,
    manageRanks: false,
    manageRankPermissions: false,
    manageVehicles: false,
    canOpenStorages: false,
};
