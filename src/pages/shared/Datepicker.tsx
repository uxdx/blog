import koLocale from 'date-fns/locale/ko';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import styled from "styled-components";
import { useState } from 'react';
import { theme } from '../../Settings';

const CustomDatePicker = styled.div`
.MuiOutlinedInput-root{
    border-radius: 4px; 
    border: 2px groove grey;
    color: #eee;
    background-color: #0d1117;
    &:hover {
        border-color: ${theme.secondary};
    }
    fieldset{
        border: none;
    }
    button{
        color: #eee;
    }
}
`

export default function LocalizedDatePicker() {
    const [datePickerValue, setDatePickerValue] = useState<Date | null>(
        new Date(),
    );

    return (
        <CustomDatePicker>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={koLocale}
                >
                <DateTimePicker
                    value={datePickerValue}
                    onChange={(newValue) => setDatePickerValue(newValue)}
                    renderInput={(params) => <TextField {...params}/>}
                />
            </LocalizationProvider>
        </CustomDatePicker>
    );
}
