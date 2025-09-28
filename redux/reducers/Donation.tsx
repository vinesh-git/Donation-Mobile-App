import { createSlice } from '@reduxjs/toolkit';
import items from '../../data/donationItems';

const initialState = {
    donations: items,
    selectedDonationItemId: null,
    selectedDonationItem: {
        name: '',
        description: '',
        image: '',
        donationItemId: 1,
        categoryIds: [1, 2],
        price: '',
    },
};

const donationSlice = createSlice({
    name: 'donation',
    initialState: initialState,
    reducers: {
        resetDonations: () => {
            return initialState;
        },
        updateSelectedDonationItemId: (state, action) => {
            state.selectedDonationItemId = action.payload;
            state.selectedDonationItem = state.donations.find(
                (item: any) => item.donationItemId === action.payload,) || 
                {
                name: '',
                description: '',
                image: '',
                donationItemId: 1,
                categoryIds: [1, 2],
                price: '',
            };
        },
    },
});

export const { resetDonations, updateSelectedDonationItemId } =
    donationSlice.actions;
export default donationSlice.reducer;
