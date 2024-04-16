type OptionType = 'dropdown' | 'radio' | 'select' | 'input';
export const victimProtocol = [
  // children show up only when it's current parent is selected
  // options show up in the case of select and radio
  {
    type: 'dropdown',
    checked: true,
    value: '2G GSM',
  },
  {
    type: 'dropdown',
    checked: false,
    value: '3G UMTS',
  },
  {
    type: 'dropdown',
    checked: false,
    value: '4G LTE',
  },
  {
    type: 'dropdown',
    value: '5G NR',
    checked: false,
  },
  {
    type: 'dropdown',
    value: 'Bluetooth Classic (BR/EDR)',
    checked: false,
    children: [
      {
        type: 'select',
        options: [
          {
            value: 'Bluetooth Core Specification 5.4',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.3',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.2',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.1',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.0',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 4.2',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 4.0',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 3.0+HS',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 2.1+EDR',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 2.0+EDR',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 1.2',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 1.1',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    value: 'Bluetooth Low Energy (BLE)',
    checked: false,
    children: [
      {
        type: 'select',
        options: [
          {
            value: 'Bluetooth Core Specification 5.4',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.3',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.2',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.1',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 5.0',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 4.2',
            checked: false,
          },
          {
            value: 'Bluetooth Core Specification 4.0',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    value: 'Wi-Fi',
    checked: false,
    children: [
      {
        type: 'select',
        options: [
          {
            value: 'Wi-Fi 6 (IEEE 802.11ax)',
            checked: false,
          },
          {
            value: 'Wi-Fi 5 (IEEE 802.11ac)',
            checked: false,
          },
          {
            value: 'Wi-Fi 4 (IEEE 802.11n)',
            checked: false,
          },
          {
            value: 'Wi-Fi 3 (IEEE 802.11g)',
            checked: false,
          },
          {
            value: 'Wi-Fi 2 (IEEE 802.11a)',
            checked: false,
          },
          {
            value: 'Wi-Fi 1 (IEEE 802.11b)',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    value: 'Zigbee',
    checked: false,
  },
];

export const victimPreCondition = [
  {
    type: 'radio',
    title: 'Authentication State',
    value: 'Authenticated',
    options: [
      {
        value: 'Authenticated',
      },
      {
        value: 'Unauthenticated',
      },
    ],
  },
  {
    type: 'select',
    title: 'System State',
    options: [
      {
        value: 'Off',
      },
      {
        value: 'Idle',
      },
      {
        value: 'Searching',
      },
      {
        value: 'Connecting',
      },
      {
        value: 'Connected',
      },
      {
        value: 'Disconnected',
      },
    ],
  },
];

export const victimPostCondition = [...victimPreCondition];

export const attackerKnowledge = [
  {
    type: 'select',
    options: [
      {
        value: 'IMSI',
        checked: false,
      },
      {
        value: 'TMSI (2G)',
        checked: false,
      },
      {
        value: 'TMSI (3G)',
        checked: false,
      },
      {
        value: 'TMSI (4G/5G-NSA)',
        checked: false,
      },
      {
        value: 'TMSI (5G)',
        checked: false,
      },
      {
        value: 'SUPI (5G)',
        checked: false,
      },
      {
        value: 'SUCI (5G-SA)',
        checked: false,
      },
      {
        value: 'MAC Address (Bluetooth Classic)',
        checked: false,
      },
      {
        value: 'MAC Address (BLE)',
        checked: false,
      },
      {
        value: 'MAC Address (Wi-Fi)',
        checked: false,
      },
      {
        value: 'IP Address (Wi-Fi)',
        checked: false,
      },
      {
        value: 'Phone Number',
        checked: false,
      },
      {
        value: 'User Location (1m)',
        checked: false,
      },
      {
        value: 'User Location (10m)',
        checked: false,
      },
      {
        value: 'User Location (100m)',
        checked: false,
      },
      {
        value: 'User Location (1km)',
        checked: false,
      },
      {
        value: 'User Location (10km)',
        checked: false,
      },
    ],
  },
];

export const attackerHardware = [
  {
    type: 'select',
    options: [
      {
        value: 'Computer',
        checked: false,
      },
      {
        value: 'Software-Defined Radio (SDR)',
        checked: false,
      },
      {
        value: 'Commercial Radio (Wi-Fi)',
        checked: false,
      },
      {
        value: 'Commercial Radio (Bluetooth Classic)',
        checked: false,
      },
      {
        value: 'Commercial Radio (BLE)',
        checked: false,
      },
      {
        value: 'Commercial Radio (Zigbee)',
        checked: false,
      },
      {
        value: 'Commercial Radio (2G)',
        checked: false,
      },
      {
        value: 'Commercial Radio (3G)',
        checked: false,
      },
      {
        value: 'Commercial Radio (4G)',
        checked: false,
      },
      {
        value: 'Commercial Radio (5G-NSA)',
        checked: false,
      },
      {
        value: 'Commercial Radio (5G-SA)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (Wi-Fi)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (Bluetooth Classic)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (BLE)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (Zigbee)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (2G)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (3G)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (4G)',
        checked: false,
      },
      {
        value: 'Traffic Sniffer (5G)',
        checked: false,
      },
      {
        value: 'Fake Base Station (2G)',
        checked: false,
      },
      {
        value: 'Fake Base Station (3G)',
        checked: false,
      },
      {
        value: 'Fake Base Station (4G)',
        checked: false,
      },
      {
        value: 'Fake Base Station (5G-NSA)',
        checked: false,
      },
      {
        value: 'Fake Base Station (5G-SA)',
        checked: false,
      },
    ],
  },
];

export const attackerPostCondition = [...victimPostCondition];
