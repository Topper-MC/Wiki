import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  topperSidebar: [
    'topper/quickstart/index',
    'topper/commands/index',
    'topper/config/index',
    'topper/faq/index',
    'topper/query/index',
    {
      type: 'category',
      label: 'Value Provider',
      link: {
        type: 'doc',
        id: 'topper/provider/index',
      },
      items: [
        'topper/provider/statistic/index',
        'topper/provider/placeholder/index',
        'topper/provider/miniplaceholder/index',
      ],
    },
    {
      type: 'category',
      label: 'Hook',
      link: {
        type: 'doc',
        id: 'topper/hook/index',
      },
      items: [
        'topper/hook/placeholderapi/index',
        'topper/hook/miniplaceholders/index',
        'topper/hook/luckperms/index',
        'topper/hook/lastloginapi/index',
      ],
    },
    {
      type: 'category',
      label: 'Extra',
      link: {
        type: 'doc',
        id: 'topper/extra/index',
      },
      items: [
        'topper/extra/provider/index',
        'topper/extra/hologram/index',
        'topper/extra/block/index',
        'topper/extra/npc/index',
        'topper/extra/playtime/index',
        'topper/extra/value_display/index',
        'topper/extra/migrate_v2/index',
      ],
    },
  ],
  timedtopperSidebar: [
    'timedtopper/config/index',
    {
      type: 'category',
      label: 'Holder',
      link: {
        type: 'doc',
        id: 'timedtopper/holder/index',
      },
      items: [
        'timedtopper/holder/link/index',
        'timedtopper/holder/time/index',
        'timedtopper/holder/reward/index',
      ],
    },
    'timedtopper/query/index',
    {
      type: 'category',
      label: 'Hook',
      link: {
        type: 'doc',
        id: 'timedtopper/hook/index',
      },
      items: [
        'timedtopper/hook/luckperms/index',
        'timedtopper/hook/placeholderapi/index',
      ],
    },
    'timedtopper/api/index',
  ],
  grouptopperSidebar: [
    'grouptopper/installation/index',
    'grouptopper/config/index',
    {
      type: 'category',
      label: 'Holder',
      link: {
        type: 'doc',
        id: 'grouptopper/holder/index',
      },
      items: [
        'grouptopper/holder/link/index',
        'grouptopper/holder/group/index',
        'grouptopper/holder/mode/index',
      ],
    },
    'grouptopper/query/index',
    {
      type: 'category',
      label: 'Hook',
      link: {
        type: 'doc',
        id: 'grouptopper/hook/index',
      },
      items: [
        'grouptopper/hook/luckperms/index',
        'grouptopper/hook/placeholderapi/index',
      ],
    },
  ],
  cachySidebar: [
    'cachy/config/index',
    'cachy/query/index',
    {
      type: 'category',
      label: 'Hook',
      link: {
        type: 'doc',
        id: 'cachy/hook/index',
      },
      items: [
        'cachy/hook/placeholderapi/index',
      ],
    },
  ],
};

export default sidebars;
