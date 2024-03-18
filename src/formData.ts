type OptionType = 'dropdown' | 'radio' | 'select' | 'input';
export const formData = [
  // children show up only when it's current parent is selected
  // options show up in the case of select and radio
  {
    type: 'dropdown',
    checked: true,
    value: '2G GSM',
    children: [
      {
        type: 'select',
        title: 'Adversarial Knowledge',
        options: [
          {
            value: 'IMSI',
          },
          {
            value: 'TMSI',
          },
          {
            value: 'IMEI',
          },
        ],
      },
      {
        type: 'radio',
        title: 'System State',
        options: [
          {
            value: 'Unauthenticated',
          },
          {
            value: 'Authenticated',
            children: [
              {
                title: 'Confidentiality',
                type: 'radio',
                options: [
                  {
                    value: 'A5/0 Null',
                  },
                  {
                    value: 'A5/1',
                  },
                  {
                    value: 'A5/2',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    checked: false,
    value: '3G UMTS',
    children: [
      {
        type: 'select',
        title: 'Adversarial Knowledge',
        options: [
          {
            value: 'IMSI',
          },
          {
            value: 'TMSI',
          },
          {
            value: 'IMEI',
          },
        ],
      },
      {
        type: 'radio',
        title: 'System State',
        options: [
          {
            value: 'AKA Unauthenticated',
          },
          {
            value: 'AKA Authenticated',
            children: [
              {
                title: 'Confidentiality',
                type: 'radio',
                options: [
                  {
                    value: 'UEA0 Null',
                  },
                  {
                    value: 'UEA1 Kasumi',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    checked: false,
    value: '4G LTE',
    children: [
      {
        type: 'select',
        title: 'Adversarial Knowledge',
        options: [
          {
            value: 'IMSI',
          },
          {
            value: 'GUTI',
          },
          {
            value: 'IMEI',
          },
        ],
      },
      {
        type: 'radio',
        title: 'System State',
        options: [
          {
            value: 'AKA Unauthenticated',
          },
          {
            value: 'AKA Authenticated',
            children: [
              {
                title: 'Confidentiality',
                type: 'radio',
                options: [
                  {
                    value: 'EEA0 Null',
                  },
                  {
                    value: 'EEA1 SNOW3G',
                  },
                  {
                    value: 'EEA2 AES',
                  },
                  {
                    value: 'EEA3 ZUC',
                  },
                ],
              },
              {
                title: 'Integrity',
                type: 'radio',
                options: [
                  {
                    value: 'EEA0 Null',
                  },
                  {
                    value: 'EEA1 SNOW3G',
                  },
                  {
                    value: 'EEA2 AES',
                  },
                  {
                    value: 'EEA3 ZUC',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    value: '5G NR',
    checked: false,
    children: [
      {
        type: 'select',
        title: 'Adversarial Knowledge',
        options: [
          {
            value: 'SUPI',
          },
          {
            value: 'SUCI',
          },
          {
            value: '5G-GUTI',
          },
          {
            value: 'IMEI',
          },
        ],
      },
      {
        type: 'radio',
        title: 'System State',
        options: [
          {
            value: 'AKA Unauthenticated',
          },
          {
            value: 'AKA Authenticated',
            children: [
              {
                title: 'Confidentiality',
                type: 'radio',
                options: [
                  {
                    value: 'NEA0 Null',
                  },
                  {
                    value: 'NEA1 SNOW3G',
                  },
                  {
                    value: 'NEA2 AES',
                  },
                  {
                    value: 'NEA3 ZUC',
                  },
                ],
              },
              {
                title: 'Integrity',
                type: 'radio',
                options: [
                  {
                    value: 'NEA0 Null',
                  },
                  {
                    value: 'NEA1 SNOW3G',
                  },
                  {
                    value: 'NEA2 AES',
                  },
                  {
                    value: 'NEA3 ZUC',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    value: 'Bluetooth Classic (BR/EDR)',
    checked: false,
    children: [
      {
        type: 'select',
        title: 'Adversarial Knowledge',
        options: [
          {
            value: 'Mac Address',
          },
          {
            value: 'PIN',
          },
          {
            value: 'Encryption Key (Kc)',
          },
        ],
      },
      {
        type: 'select',
        title: 'System State',
        options: [
          {
            value: 'Connectable',
          },
          {
            value: 'Discoverable',
          },
          {
            value: 'Paired',
          },
          {
            value: 'Transmitting',
          },
          {
            value: 'CTKD Support',
          },
          {
            value: 'Just Works Support',
          },
        ],
      },
    ],
  },
];

// {
//   value: 'General Knowledge',
//   type: 'dropdown',
//   children: [
//     {
//       type: 'select',
//       options: [
//         {
//           value: 'Phone Number',
//           type: 'input',
//         },
//         {
//           value: 'User Location (m range)',
//           type: 'input',
//         },
//         {
//           value: 'User Location (km range)',
//           type: 'input',
//         },
//       ],
//     },
//   ],
// },
