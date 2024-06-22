import {middleware} from '@/fe-base/reducers/middleware';

import {homeApi} from '@/app/home/apis';

const _middleware = middleware([homeApi.middleware]);

export { _middleware };
