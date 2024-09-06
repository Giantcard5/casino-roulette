import React, { useState } from 'react';

import * as S from './styles';

import Table from '@components/Table';
import TableSide from '@components/TableSide';
import TableTerminal from '@components/TableTerminal';
import TableStatistics from '@components/TableStatistics';

const App: React.FC = () => {
    const [lastNumbers, setLastNumbers] = useState<Array<number>>([0, 3, 14, 25, 28, 20, 6]);

    return (
        <S.Container>
            <Table lastNumbers={lastNumbers} setLastNumbers={setLastNumbers}/>

            <TableTerminal lastNumbers={lastNumbers}/>

            <TableStatistics lastNumbers={lastNumbers}/>
            
            <TableSide lastNumbers={lastNumbers}/>
        </S.Container>
    );
};

export default App;