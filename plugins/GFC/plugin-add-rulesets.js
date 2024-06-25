const onRun = async () => {
  const rulesetsStore = Plugins.useRulesetsStore()

  const list = [
    // Built-In
    {
      id: 'direct',
      name: 'direct',
      updateTime: '',
      behavior: 'classical',
      type: 'File',
      format: 'yaml',
      url: '',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/direct.yaml',
      disabled: false
    },
    {
      id: 'reject',
      name: 'reject',
      updateTime: '',
      behavior: 'classical',
      type: 'File',
      format: 'yaml',
      url: '',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/reject.yaml',
      disabled: false
    },
    {
      id: 'proxy',
      name: 'proxy',
      updateTime: '',
      behavior: 'classical',
      type: 'File',
      format: 'yaml',
      url: '',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/proxy.yaml',
      disabled: false
    },
    // https://github.com/Loyalsoldier/clash-rules
    {
      id: 'remote-direct',
      name: '直连域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-direct.yaml',
      disabled: false
    },
    {
      id: 'remote-proxy',
      name: '代理域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-proxy.yaml',
      disabled: false
    },
    {
      id: 'remote-reject',
      name: '广告域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/reject.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-reject.yaml',
      disabled: false
    },
    {
      id: 'remote-private',
      name: '私有网络专用域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-private.yaml',
      disabled: false
    },
    {
      id: 'remote-apple',
      name: 'Apple在中国大陆可直连的域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/apple.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-apple.yaml',
      disabled: false
    },
    {
      id: 'remote-icloud',
      name: 'iCloud域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/icloud.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-icloud.yaml',
      disabled: false
    },
    {
      id: 'remote-gfw',
      name: 'GFWList域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/gfw.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-gfw.yaml',
      disabled: false
    },
    {
      id: 'remote-tld-not-cn',
      name: '非中国大陆使用的顶级域名列表',
      updateTime: '',
      behavior: 'domain',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/tld-not-cn.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-tld-not-cn.yaml',
      disabled: false
    },
    {
      id: 'remote-telegramcidr',
      name: 'Telegram使用的IP地址列表',
      updateTime: '',
      behavior: 'ipcidr',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/telegramcidr.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-telegramcidr.yaml',
      disabled: false
    },
    {
      id: 'remote-lancidr',
      name: '局域网IP及保留IP地址列表',
      updateTime: '',
      behavior: 'ipcidr',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-lancidr.yaml',
      disabled: false
    },
    {
      id: 'remote-cncidr',
      name: '中国大陆IP地址列表',
      updateTime: '',
      behavior: 'ipcidr',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/cncidr.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-cncidr.yaml',
      disabled: false
    },
    {
      id: 'remote-applications',
      name: '需要直连的常见软件列表',
      updateTime: '',
      behavior: 'classical',
      type: 'Http',
      format: 'yaml',
      url: 'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/applications.txt',
      interval: 86400,
      count: 0,
      path: 'data/rulesets/remote-applications.yaml',
      disabled: false
    }
  ]

  const ids = await Plugins.picker.multi(
    '请选择你要添加的规则集',
    list.map((v) => ({ label: v.name, value: v.id })),
    list.filter((v) => rulesetsStore.getRulesetById(v.id)).map((v) => v.id)
  )

  for (let i = 0; i < ids.length; i++) {
    if (!rulesetsStore.getRulesetById(ids[i])) {
      const ruleset = list.find((v) => v.id == ids[i])
      await rulesetsStore.addRuleset(ruleset)
      console.log('添加', ruleset.name)
    }
  }

  if (ids.includes('direct') && !(await Plugins.FileExists('data/rulesets/direct.yaml'))) {
    Plugins.Writefile('data/rulesets/direct.yaml', 'payload: []')
  }
  if (ids.includes('reject') && !(await Plugins.FileExists('data/rulesets/reject.yaml'))) {
    Plugins.Writefile('data/rulesets/reject.yaml', 'payload: []')
  }
  if (ids.includes('proxy') && !(await Plugins.FileExists('data/rulesets/proxy.yaml'))) {
    Plugins.Writefile('data/rulesets/proxy.yaml', 'payload: []')
  }

  Plugins.message.success('添加完毕')
}
