import React from 'react';

import { SortBarUI } from './sort-bar.styles';
import SortSearch from '../sort-search/sort-search.component';

const SortBar = (props) => (
    <SortBarUI>
        <SortSearch></SortSearch>
    </SortBarUI>
); 

export default SortBar; 