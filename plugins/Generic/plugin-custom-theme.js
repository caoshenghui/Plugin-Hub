const THEME = {
  // 主色
  '--primary-color': 'rgb(0, 89, 214)',
  // 次色
  '--secondary-color': 'rgb(5, 62, 142)',

  // 文字颜色
  '--color-light': '#000',
  '--color-dark': '#fff',

  // 背景颜色
  '--bg-color-light': 'rgba(255, 255, 255, 0.85)',
  '--bg-color-dark': 'rgba(0, 0, 0, 0.85)',

  // 滚动条颜色
  '--scrollbar-track-bg-light': 'rgb(177, 177, 177)',
  '--scrollbar-thumb-bg-light': 'var(--primary-color)',
  '--scrollbar-track-bg-dark': 'rgb(173, 173, 173)',
  '--scrollbar-thumb-bg-dark': 'var(--primary-color)',

  // 普通按钮颜色
  '--btn-normal-color-light': '#000000',
  '--btn-normal-bg-light': 'rgb(255, 255, 255)',
  '--btn-normal-hover-color-light': 'var(--primary-color)',
  '--btn-normal-hover-border-color-light': 'var(--primary-color)',
  '--btn-normal-active-color-light': 'var(--secondary-color)',
  '--btn-normal-active-border-color-light': 'var(--secondary-color)',

  '--btn-normal-color-dark': '#000000',
  '--btn-normal-bg-dark': 'rgb(255, 255, 255)',
  '--btn-normal-hover-color-dark': 'var(--primary-color)',
  '--btn-normal-hover-border-color-dark': 'var(--primary-color)',
  '--btn-normal-active-color-dark': 'var(--secondary-color)',
  '--btn-normal-active-border-color-dark': 'var(--secondary-color)',

  // 主要按钮颜色
  '--btn-primary-color-light': 'rgb(255, 255, 255)',
  '--btn-primary-bg-light': 'var(--primary-color)',
  '--btn-primary-hover-bg-light': 'var(--secondary-color)',
  '--btn-primary-active-bg-light': 'var(--primary-color)',

  '--btn-primary-color-dark': 'rgb(255, 255, 255)',
  '--btn-primary-bg-dark': 'var(--primary-color)',
  '--btn-primary-hover-bg-dark': 'var(--secondary-color)',
  '--btn-primary-active-bg-dark': 'var(--primary-color)',

  // 链接按钮颜色
  '--btn-link-color-light': 'var(--primary-color)',
  '--btn-link-bg-light': 'transparent',
  '--btn-link-hover-color-light': 'var(--secondary-color)',
  '--btn-link-active-color-light': 'var(--primary-color)',

  '--btn-link-color-dark': 'var(--primary-color)',
  '--btn-link-bg-dark': 'transparent',
  '--btn-link-hover-color-dark': 'var(--secondary-color)',
  '--btn-link-active-color-dark': 'var(--primary-color)',

  // 文本按钮颜色
  '--btn-text-color-light': 'rgb(46, 46, 46)',
  '--btn-text-bg-light': 'transparent',
  '--btn-text-hover-bg-light': 'rgb(232, 232, 232)',
  '--btn-text-active-bg-light': 'rgb(206, 206, 206)',

  '--btn-text-color-dark': 'rgb(230, 230, 230)',
  '--btn-text-bg-dark': 'transparent',
  '--btn-text-hoer-color-dark': '#222222',
  '--btn-text-hover-bg-dark': 'rgba(255, 255, 255, 0.2)',
  '--btn-text-active-color-dark': '#161616',
  '--btn-text-active-bg-dark': 'rgba(255, 255, 255, 0.4)',

  // 单选
  '--radio-normal-color-light': '#000',
  '--radio-normal-bg-light': 'rgba(255, 255, 255, 1)',
  '--radio-normal-hover-color-light': 'var(--primary-color)',
  '--radio-primary-color-light': '#fff',
  '--radio-primary-bg-light': 'var(--primary-color)',
  '--radio-primary-hover-bg-light': 'var(--secondary-color)',
  '--radio-primary-active-bg-light': 'var(--primary-color)',

  '--radio-normal-color-dark': '#ededed',
  '--radio-normal-bg-dark': 'rgba(255, 255, 255, 0.06)',
  '--radio-normal-hover-color-dark': 'var(--primary-color)',
  '--radio-primary-color-dark': '#fff',
  '--radio-primary-bg-dark': 'var(--primary-color)',
  '--radio-primary-hover-bg-dark': 'var(--secondary-color)',
  '--radio-primary-active-bg-dark': 'var(--primary-color)',

  // 卡片
  '--card-color-light': 'rgb(95, 95, 95)',
  '--card-bg-light': 'rgba(255, 255, 255, 0.6)',
  '--card-hover-bg-light': 'rgba(255, 255, 255, 0.6)',
  '--card-active-bg-light': 'rgba(255, 255, 255, 0.4)',

  '--card-color-dark': 'rgb(255, 255, 255)',
  '--card-bg-dark': 'rgba(255, 255, 255, 0.06)',
  '--card-hover-bg-dark': 'rgba(255, 255, 255, 0.1)',
  '--card-active-bg-dark': 'rgba(255, 255, 255, 0.04)',

  // 进度条
  '--progress-bg-light': 'rgba(0, 0, 0, 0.08)',
  '--progress-inner-bg-light': 'var(--primary-color)',

  '--progress-bg-dark': 'rgba(221, 221, 221, 0.08)',
  '--progress-inner-bg-dark': 'var(--primary-color)',

  // 下拉
  '--dropdown-bg-light': '#fff',
  '--dropdown-bg-dark': '#343434',

  // 模态框
  '--modal-bg-light': '#f6f6f6',
  '--modal-mask-bg-light': 'rgba(255, 255, 255, 0.4)',
  '--modal-bg-dark': '#343434',
  '--modal-mask-bg-dark': 'rgba(0, 0, 0, 0.4)',

  // 开关
  '--switch-on-bg-light': 'var(--primary-color)',
  '--switch-on-dot-bg-light': '#fff',
  '--switch-on-bg-dark': 'var(--primary-color)',
  '--switch-on-dot-bg-dark': '#fff',

  '--switch-off-bg-light': 'rgba(0, 0, 0, 0.1)',
  '--switch-off-dot-bg-light': '#fff',
  '--switch-off-bg-dark': 'rgba(255, 255, 255, 0.06)',
  '--switch-off-dot-bg-dark': '#fff',

  // 输入框
  '--input-color-light': '#000',
  '--input-bg-light': 'rgba(255, 255, 255, 1)',
  '--input-color-dark': '#fff',
  '--input-bg-dark': 'rgba(255, 255, 255, 0.06)',

  // 分割线
  '--divider-color-light': '#c6c6c6',
  '--divider-color-dark': '#4d4d4d',

  // 选择框
  '--select-color-light': '#000',
  '--select-bg-light': 'rgba(255, 255, 255, 1)',
  '--select-option-bg-light': '#fff',
  '--select-color-dark': '#fff',
  '--select-bg-dark': 'rgba(255, 255, 255, 0.06)',
  '--select-option-bg-dark': '#434343',

  // 提示
  '--toast-bg-light': '#fff',
  '--toast-bg-dark': '#343434',

  // 菜单
  '--menu-bg-light': '#fff',
  '--menu-item-hover-light': '#e9e9e9',
  '--menu-bg-dark': 'rgba(52, 52, 52, 1)',
  '--menu-item-hover-dark': 'rgb(91, 91, 91)',

  // 表格
  '--table-tr-odd-bg-light': 'rgb(240, 240, 240)',
  '--table-tr-even-bg-light': 'rgb(225, 225, 225)',
  '--table-tr-odd-hover-bg-light': 'rgb(202, 202, 202)',
  '--table-tr-even-hover-bg-light': 'rgb(202, 202, 202)',
  '--table-tr-odd-bg-dark': '#2e2e2e',
  '--table-tr-even-bg-dark': 'rgb(37, 37, 37)',
  '--table-tr-odd-hover-bg-dark': 'rgb(61, 61, 61)',
  '--table-tr-even-hover-bg-dark': 'rgb(61, 61, 61)',

  // 延迟颜色
  '--level-0-color': '#808080',
  '--level-1-color': '#29b280',
  '--level-2-color': '#b68b1f',
  '--level-3-color': '#ea6060',
  '--level-4-color': '#f00e0e'
}

const setCustomTheme = () => {
  Object.entries(THEME).forEach(([property, value]) => {
    document.body.style.setProperty(property, value)
  })
}

const onStartup = () => {
  setCustomTheme()
}

const onRun = () => {
  setCustomTheme()
}
