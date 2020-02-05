if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['ini'] = [
  [
    [
      /\[[A-Za-z0-9]+\]/g,
      'sh_param',
      -1
    ],
    [
      /\b[A-Za-z0-9]+(?=\s*=)/g,
      'sh_attribute',
      -1
    ],
    [
      /(?:^\=begin)/g,
      'sh_comment',
      4
    ],
    [
      /#/g,
      'sh_comment',
      1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|")/g,
      null,
      -1
    ],
    [
      /"/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      /\\(?:\\|')/g,
      null,
      -1
    ],
    [
      /'/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ],
    [
      />/g,
      'sh_string',
      -2
    ]
  ],
  [
    [
      /^(?:\=end)/g,
      'sh_comment',
      5
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];
