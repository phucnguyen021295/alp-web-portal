import { Table, type Layout, type ThemeConfig } from 'antd';

import {inter} from '@/fe-global/assets/fonts';

const themeConfig = {
        components: {
                Layout: {
                        headerBg: '#fff',
                        headerHeight: 72,
                        headerPadding: '0 24px'
                },
                Table: {
                        cellPaddingBlock: 12,
                        headerBg: '#fff',
                },
                Cascader: {
                        dropdownHeight: 104
                }
        },
        token: {
                fontFamily: `${inter.style.fontFamily}`,
                colorPrimary: `rgba(219, 53, 59, 1)`
        },
};

export default themeConfig;