/* @ds-bundle: {"format":4,"namespace":"AiLabDesignSystem_1d6ea7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e9e8a1e474d5","components/core/Button.jsx":"00aa8a044ff4","components/core/Card.jsx":"ba0c2f9bca0d","components/core/Eyebrow.jsx":"f3138ffd8333","components/core/Icon.jsx":"a87394dbe4ad","components/core/IconButton.jsx":"af269f3c892a","components/core/Stat.jsx":"e914e8653abf","components/core/Tag.jsx":"bcab0b2ad59d","components/feedback/Dialog.jsx":"4eae7d8fd654","components/feedback/Toast.jsx":"976f2e8efe6f","components/feedback/Tooltip.jsx":"20ec3bcc5ed4","components/forms/Checkbox.jsx":"de2e3ca1b572","components/forms/Input.jsx":"12538e1288ac","components/forms/Radio.jsx":"b54c6fa21b08","components/forms/Select.jsx":"ed4491c73bb1","components/forms/Switch.jsx":"beefc7d396fa","components/navigation/Tabs.jsx":"e74a04983427","ui_kits/portal/DashboardScreen.jsx":"cec3ad51c324","ui_kits/portal/LoginScreen.jsx":"cec3a10a89e0","ui_kits/portal/PortalChrome.jsx":"38f56539f8ed","ui_kits/portal/PortalScreens.jsx":"9ee16e6387c9","ui_kits/portal/data.js":"e4f051ea8c1e","ui_kits/website/CasesScreen.jsx":"ed1e2b8af502","ui_kits/website/Chrome.jsx":"a3d1ec270988","ui_kits/website/ContactScreen.jsx":"9a937fcdd2e9","ui_kits/website/HomeScreen.jsx":"ea299e6a3451","ui_kits/website/InnerScreens.jsx":"4eea7f951d21","ui_kits/website/Motion.jsx":"b027dd914b2f","ui_kits/website/ServicesScreen.jsx":"d33ed06e66f0","ui_kits/website/data.js":"84b3da6b30aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AiLabDesignSystem_1d6ea7 = window.AiLabDesignSystem_1d6ea7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--bg-subtle)',
    fg: 'var(--text-body)',
    border: 'var(--border)'
  },
  accent: {
    bg: 'var(--surface-tint)',
    fg: 'var(--text-accent)',
    border: 'var(--orange)'
  },
  solid: {
    bg: 'var(--orange)',
    fg: '#0D0D0D',
    border: 'var(--orange)'
  },
  inverse: {
    bg: 'var(--bg-inverse)',
    fg: 'var(--text-inverse)',
    border: 'var(--bg-inverse)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-11)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-11)',
    letterSpacing: 'var(--tracking-widest)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-13)',
    letterSpacing: 'var(--tracking-wide)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--text-16)',
    letterSpacing: 'var(--tracking-wide)'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--action-bg)',
    fg: 'var(--action-fg)',
    border: 'var(--action-bg)',
    hoverBg: 'var(--action-bg-hover)',
    hoverBorder: 'var(--action-bg-hover)'
  },
  accent: {
    bg: 'var(--orange)',
    fg: '#0D0D0D',
    border: 'var(--orange)',
    hoverBg: 'var(--orange-bright)',
    hoverBorder: 'var(--orange-bright)'
  },
  secondary: {
    bg: 'transparent',
    fg: 'var(--text-strong)',
    border: 'var(--border-strong)',
    hoverBg: 'transparent',
    hoverBorder: 'var(--orange)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    border: 'transparent',
    hoverBg: 'transparent',
    hoverBorder: 'transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const active = hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      font: 'var(--type-body)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fontSize,
      letterSpacing: s.letterSpacing,
      textTransform: 'uppercase',
      padding: s.padding,
      borderRadius: 'var(--radius-2)',
      border: `1px solid ${active ? v.hoverBorder : v.border}`,
      background: active ? v.hoverBg : v.bg,
      color: v.fg,
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled ? 'translateY(var(--press-offset))' : 'none',
      transition: 'var(--transition-base)',
      textDecoration: variant === 'ghost' && active ? 'underline' : 'none',
      textUnderlineOffset: '4px',
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  interactive = false,
  tone = 'default',
  padding = 'var(--space-8)',
  as = 'div',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const inverse = tone === 'inverse';
  const El = as;
  const on = interactive && hover;
  return /*#__PURE__*/React.createElement(El, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      display: 'block',
      padding,
      borderRadius: 'var(--radius-0)',
      background: inverse ? 'var(--surface-card-inverse)' : tone === 'subtle' ? 'var(--bg-subtle)' : 'var(--surface-card)',
      color: inverse ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${on ? 'var(--orange)' : inverse ? 'var(--border-inverse)' : 'var(--border)'}`,
      boxShadow: 'none',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  marker = true,
  tone = 'accent',
  as = 'div',
  style,
  ...rest
}) {
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    style: {
      display: 'block',
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: tone === 'accent' ? 'var(--text-accent)' : tone === 'inverse' ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      ...style
    }
  }, rest), marker ? '\u25B8 ' : '', children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.452.0/icons';
const cache = {};
let styleInjected = false;

/* One stylesheet forces the brand's 1.5px stroke over lucide-static's baked-in 2. */
function ensureStyle() {
  if (styleInjected || typeof document === 'undefined') return;
  styleInjected = true;
  const s = document.createElement('style');
  s.textContent = '[data-icon]>svg{width:100%;height:100%;display:block;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}';
  document.head.appendChild(s);
}
function Icon({
  name,
  size = 20,
  style,
  ...rest
}) {
  ensureStyle();
  const [markup, setMarkup] = React.useState(cache[name] || '');
  React.useEffect(() => {
    let live = true;
    if (cache[name]) {
      setMarkup(cache[name]);
      return undefined;
    }
    fetch(`${CDN}/${name}.svg`).then(r => r.ok ? r.text() : '').then(t => {
      if (t) {
        cache[name] = t;
        if (live) setMarkup(t);
      }
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-icon": name,
    role: "img",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: size,
      height: size,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const GLYPH = {
  sm: 16,
  md: 20,
  lg: 24
};
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const active = hover && !disabled;
  const solid = variant === 'primary';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      padding: 0,
      borderRadius: 'var(--radius-2)',
      background: solid ? active ? 'var(--action-bg-hover)' : 'var(--action-bg)' : 'transparent',
      color: solid ? 'var(--action-fg)' : active ? 'var(--orange)' : 'var(--text-strong)',
      border: `1px solid ${solid ? 'var(--action-bg)' : variant === 'ghost' ? 'transparent' : active ? 'var(--orange)' : 'var(--border-strong)'}`,
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: press && !disabled ? 'translateY(var(--press-offset))' : 'none',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: GLYPH[size] || 20
  }) : icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  note,
  hero = false,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-bold)',
      fontSize: hero ? 'var(--text-80)' : 'var(--text-44)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: hero ? inverse ? 'var(--orange)' : 'var(--text-accent)' : inverse ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      font: 'var(--type-label)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      font: 'var(--type-small)',
      color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)'
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onSelect,
  onRemove,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onSelect);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-2)',
      background: selected ? 'var(--bg-inverse)' : 'transparent',
      color: selected ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--bg-inverse)' : hover && clickable ? 'var(--orange)' : 'var(--border)'}`,
      font: 'var(--type-small)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      cursor: 'pointer',
      opacity: 0.6,
      fontFamily: 'var(--font-mono)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 560,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'rgba(13,13,13,.72)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-0)',
      boxShadow: 'var(--shadow-hard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: 'var(--space-6)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      flex: '0 0 auto',
      border: '1px solid var(--border)',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      borderTop: '1px solid var(--border)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: 'info',
  success: 'check',
  warning: 'triangle-alert',
  error: 'circle-x'
};
function Toast({
  message,
  detail,
  tone = 'info',
  onDismiss,
  style,
  ...rest
}) {
  const icon = ICONS[tone] || ICONS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 280,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      borderLeft: `2px solid ${tone === 'info' ? 'var(--border-inverse-strong)' : 'var(--orange)'}`,
      borderRadius: 'var(--radius-0)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      marginTop: 1,
      color: tone === 'info' ? 'currentColor' : 'var(--orange)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, message), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 4,
      font: 'var(--type-small)',
      color: 'var(--text-inverse-muted)'
    }
  }, detail)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-inverse-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-13)'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  content,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--bg-inverse)',
      color: 'var(--text-inverse)',
      font: 'var(--type-mono)',
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-2)',
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-fast) var(--ease-brand)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 3,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--orange)' : 'transparent',
      border: `1px solid ${on ? 'var(--orange)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-2)',
      transition: 'var(--transition-base)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    style: {
      color: '#0D0D0D'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--orange-deep)' : focus ? 'var(--orange)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '0 var(--space-3)',
      background: 'var(--bg)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-2)',
      transition: 'var(--transition-base)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      padding: '12px 0',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-strong)',
      font: 'var(--type-body)',
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: error ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 3,
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${checked ? 'var(--orange)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange)'
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      appearance: 'none',
      padding: '12px var(--space-8) 12px var(--space-3)',
      background: 'var(--bg)',
      color: 'var(--text-strong)',
      font: 'var(--type-body)',
      border: `1px solid ${focus ? 'var(--orange)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-2)',
      outline: 'none',
      transition: 'var(--transition-base)',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 'var(--space-3)',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 40,
      height: 22,
      padding: 2,
      borderRadius: 'var(--radius-2)',
      background: on ? 'var(--orange)' : 'transparent',
      border: `1px solid ${on ? 'var(--orange)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      justifyContent: on ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      cursor: 'inherit',
      transition: 'var(--transition-base)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 16,
      height: 16,
      background: on ? '#0D0D0D' : 'var(--border-strong)',
      transition: 'var(--transition-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const inverse = tone === 'inverse';
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border)'}`,
      ...style
    }
  }, rest), tabs.map(t => {
    const v = typeof t === 'string' ? t : t.value;
    const l = typeof t === 'string' ? t : t.label;
    const on = v === current;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(v),
      style: {
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        background: 'none',
        cursor: 'pointer',
        border: 'none',
        borderBottom: `2px solid ${on ? 'var(--orange)' : 'transparent'}`,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-13)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: on ? inverse ? 'var(--text-inverse)' : 'var(--text-strong)' : inverse ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
        transition: 'var(--transition-base)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/DashboardScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Eyebrow,
  Stat,
  Tabs
} = window.AiLabDesignSystem_1d6ea7;
function DashboardScreen({
  onOpen,
  onNavigate
}) {
  const D = window.PORTAL_DATA;
  const totalDeliverables = D.projects.reduce((n, p) => n + p.deliverables.length, 0);
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: D.client.name,
    title: 'Hola, ' + D.client.contact.split(' ')[0],
    lead: "Esto es lo que est\xE1 pasando con tus proyectos ahora mismo.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNavigate('soporte'),
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "message-circle",
        size: 16
      })
    }, "Soporte")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'var(--border)',
      marginTop: 32,
      border: '1px solid var(--border)'
    }
  }, [['2', 'Proyectos activos'], [String(totalDeliverables), 'Entregables recibidos'], ['12 sep', 'PrÃ³xima entrega'], ['1', 'Pendiente de tu lado']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: 'var(--bg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-32)',
      color: 'var(--text-strong)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, D.projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    interactive: true,
    padding: "32px",
    onClick: () => onOpen(p.id)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-24)'
    }
  }, p.name), /*#__PURE__*/React.createElement(StatusPill, {
    status: p.status
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: '58ch'
    }
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Fase ", String(p.phase).padStart(2, '0'), " \xB7 ", D.phases[p.phase - 1]), /*#__PURE__*/React.createElement("span", null, p.progress, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: p.progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-small)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Ver proyecto ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border)',
      paddingLeft: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [['PrÃ³xima entrega', p.next], ['Fecha', p.nextDate], ['IniciÃ³', p.started]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-body)',
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, v)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 16,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Actividad reciente"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('actividad'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--type-small)',
      color: 'var(--text-accent)'
    }
  }, "Ver todo")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '24px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, D.projects[0].activity.slice(0, 4).map(a => /*#__PURE__*/React.createElement("li", {
    key: a.text,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 18,
    style: {
      color: 'var(--text-muted)',
      flex: 'none',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, a.text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, a.date)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    tone: "inverse"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Pendiente de tu lado"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-24)',
      color: '#F5F5F5'
    }
  }, "Aprobar la arquitectura de conciliaci\xF3n de facturas"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-small)',
      color: 'var(--gray-400)'
    }
  }, "Enviada el 3 de septiembre. Sin tu visto bueno no arrancamos la construcci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onOpen('facturas')
  }, "Revisar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: '#F5F5F5',
      borderColor: 'var(--gray-600)'
    },
    onClick: () => onNavigate('soporte')
  }, "Tengo dudas")))));
}
function ProjectScreen({
  id,
  onBack,
  onNavigate
}) {
  const D = window.PORTAL_DATA;
  const p = D.projects.find(x => x.id === id) || D.projects[0];
  const [tab, setTab] = React.useState('Avance');
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 24,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " Mis proyectos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      paddingBottom: 32,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Fase ", String(p.phase).padStart(2, '0'), " \xB7 ", D.phases[p.phase - 1]), /*#__PURE__*/React.createElement(StatusPill, {
    status: p.status
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-44)',
      maxWidth: '20ch'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      maxWidth: '62ch'
    }
  }, p.summary)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "Avance"), /*#__PURE__*/React.createElement("span", null, p.progress, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: p.progress
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      font: 'var(--type-small)',
      color: 'var(--text-body)'
    }
  }, "Pr\xF3xima entrega \xB7 ", /*#__PURE__*/React.createElement("strong", null, p.next), ", ", p.nextDate))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Avance', 'Entregables', 'Actividad'],
    value: tab,
    onChange: setTab
  })), tab === 'Avance' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PhaseTimeline, {
    project: p
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "28px",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    marker: false
  }, "Entregables de esta fase"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '20px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, p.deliverables.filter(d => d.phase === p.phase).map(d => /*#__PURE__*/React.createElement("li", {
    key: d.name,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18,
    style: {
      color: 'var(--text-muted)',
      flex: 'none',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 500
    }
  }, d.name), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 4,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'var(--type-small)',
      color: 'var(--text-accent)'
    }
  }, d.action))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => onNavigate('soporte')
  }, "Preguntar sobre esta fase")))), tab === 'Entregables' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(DeliverablesTable, {
    rows: p.deliverables.map(d => ({
      ...d,
      project: p.name
    }))
  })), tab === 'Actividad' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(ActivityFeed, {
    items: p.activity
  })));
}
Object.assign(window, {
  DashboardScreen,
  ProjectScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/LoginScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Checkbox,
  Icon,
  Eyebrow,
  Badge
} = window.AiLabDesignSystem_1d6ea7;
function LoginScreen({
  onLogin,
  notice
}) {
  const [mode, setMode] = React.useState('password');
  const [email, setEmail] = React.useState('ana@distnorte.mx');
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (mode === 'magic') {
      setSent(true);
    } else {
      onLogin();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#0D0D0D',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 64px',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement(PortalWordmark, {
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto 0',
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-44)',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      lineHeight: 1.05
    }
  }, "Tu proyecto,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'transparent',
      WebkitTextStroke: '2px var(--orange)'
    }
  }, "al d\xEDa")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)'
    }
  }, "Fase actual, entregables y lo que sigue. Sin pedir reportes por WhatsApp."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '48px 0 0',
      padding: '32px 0 0',
      borderTop: '1px solid var(--gray-800)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['Avance por fase actualizado automÃ¡ticamente', 'Todos tus entregables en un solo lugar', 'BitÃ¡cora de lo que hemos hecho esta semana'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      font: 'var(--type-body)',
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 4
    }
  }), t)))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gray-600)'
    }
  }, "portal.ailabschool.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400
    }
  }, notice && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      padding: '12px 16px',
      border: '1px solid var(--orange)',
      background: 'var(--orange-muted)',
      font: 'var(--type-small)',
      color: 'var(--text-strong)'
    }
  }, "Inicia sesi\xF3n para ver tu proyecto."), /*#__PURE__*/React.createElement(Eyebrow, null, "Acceso de clientes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-32)'
    }
  }, "Iniciar sesi\xF3n"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "24px",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail-check",
    size: 20,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 600
    }
  }, "Enlace enviado"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, "Revisa ", email, ". El enlace expira en 15 minutos.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onLogin
  }, "Simular clic en el enlace"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  }), mode === 'password' && /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    type: "submit"
  }, mode === 'password' ? 'Entrar' : 'Enviar enlace de acceso'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode(mode === 'password' ? 'magic' : 'password'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--type-small)',
      color: 'var(--text-accent)',
      textDecoration: 'underline'
    }
  }, mode === 'password' ? 'Prefiero un enlace por correo' : 'Prefiero usar contraseÃ±a')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border)',
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, "\xBFA\xFAn no eres cliente? ", /*#__PURE__*/React.createElement("a", {
    href: "../website/index.html",
    style: {
      color: 'var(--text-accent)'
    }
  }, "Agenda un diagn\xF3stico"), "."))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalChrome.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Eyebrow
} = window.AiLabDesignSystem_1d6ea7;
const PORTAL_NAV = [{
  id: 'dashboard',
  label: 'Mis proyectos'
}, {
  id: 'entregables',
  label: 'Entregables'
}, {
  id: 'actividad',
  label: 'Actividad'
}, {
  id: 'soporte',
  label: 'Soporte'
}];
function PortalWordmark({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      color: '#FFFFFF'
    }
  }, "Ai", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "Lab"));
}
function PortalHeader({
  route,
  onNavigate,
  onLogout
}) {
  const D = window.PORTAL_DATA;
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#0D0D0D',
      borderBottom: '1px solid var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 40px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PortalWordmark, null), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: 'var(--gray-700)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gray-500)'
    }
  }, "Portal")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginRight: 'auto'
    }
  }, PORTAL_NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNavigate(n.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-11)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: route === n.id || route === 'proyecto' && n.id === 'dashboard' ? '#FFFFFF' : 'var(--gray-500)',
      borderBottom: `1px solid ${route === n.id || route === 'proyecto' && n.id === 'dashboard' ? 'var(--orange)' : 'transparent'}`,
      transition: 'var(--transition-base)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(!menu),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-small)',
      fontWeight: 600,
      color: '#F5F5F5'
    }
  }, D.client.contact), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      color: 'var(--gray-500)'
    }
  }, D.client.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      background: 'var(--orange)',
      color: '#0D0D0D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13
    }
  }, D.client.initials)), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 52,
      minWidth: 200,
      background: '#111111',
      border: '1px solid var(--gray-800)',
      zIndex: 30
    }
  }, [['Cuenta', () => {
    setMenu(false);
    onNavigate('cuenta');
  }], ['Cerrar sesiÃ³n', () => {
    setMenu(false);
    onLogout();
  }]].map(([label, fn]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: fn,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '14px 16px',
      background: 'none',
      border: 'none',
      borderBottom: '1px solid var(--gray-900)',
      cursor: 'pointer',
      font: 'var(--type-small)',
      color: 'var(--gray-300)'
    }
  }, label))))));
}
function PortalPage({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 40px 96px'
    }
  }, children);
}
function PageHead({
  eyebrow,
  title,
  lead,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 40,
      paddingBottom: 32,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12,
      fontSize: 'var(--text-44)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, lead)), action);
}
const STATUS_TONE = {
  'A tiempo': 'neutral',
  'En revisiÃ³n': 'accent',
  'Bloqueado': 'solid'
};
function StatusPill({
  status
}) {
  return /*#__PURE__*/React.createElement(Badge, {
    tone: STATUS_TONE[status] || 'neutral'
  }, status);
}
function Progress({
  value,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: dark ? 'var(--gray-800)' : 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: value + '%',
      height: '100%',
      background: 'var(--orange)'
    }
  }));
}

/** Vertical 5-phase timeline for one project. */
function PhaseTimeline({
  project,
  compact = false
}) {
  const D = window.PORTAL_DATA;
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, D.phases.map((label, i) => {
    const d = project.phaseDetail[i];
    const done = d.state === 'done',
      current = d.state === 'current';
    return /*#__PURE__*/React.createElement("li", {
      key: label,
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: 20,
        position: 'relative',
        paddingBottom: i === 4 ? 0 : 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: done ? 'var(--gray-1000)' : current ? 'var(--orange)' : 'var(--bg)',
        border: `1px solid ${done ? 'var(--gray-1000)' : current ? 'var(--orange)' : 'var(--border-strong)'}`,
        color: done ? '#F5F5F5' : current ? '#0D0D0D' : 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 12
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : String(i + 1).padStart(2, '0')), i < 4 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: 1,
        background: done ? 'var(--gray-1000)' : 'var(--border)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body)',
        fontWeight: 600,
        color: current || done ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-mono)',
        fontSize: 'var(--text-11)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: current ? 'var(--text-accent)' : 'var(--text-muted)'
      }
    }, d.date)), !compact && /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 6,
        font: 'var(--type-small)',
        color: 'var(--text-body)'
      }
    }, d.note)));
  }));
}
Object.assign(window, {
  PortalWordmark,
  PortalHeader,
  PortalPage,
  PageHead,
  StatusPill,
  Progress,
  PhaseTimeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalScreens.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Eyebrow,
  Input,
  Select,
  Switch,
  Checkbox,
  Tabs
} = window.AiLabDesignSystem_1d6ea7;
function DeliverablesTable({
  rows,
  showProject = false
}) {
  const cell = {
    padding: '16px 16px 16px 0',
    borderBottom: '1px solid var(--border)',
    font: 'var(--type-body)',
    color: 'var(--text-body)',
    textAlign: 'left',
    verticalAlign: 'top'
  };
  const head = {
    ...cell,
    font: 'var(--type-mono)',
    fontSize: 'var(--text-11)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    paddingTop: 0,
    borderBottom: '1px solid var(--border-strong)'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Entregable"), showProject && /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Proyecto"), /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Tipo"), /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Fase"), /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Fecha"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...head,
      textAlign: 'right',
      paddingRight: 0
    }
  }, "Acci\xF3n"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      fontWeight: 500,
      color: 'var(--text-strong)'
    }
  }, d.name), showProject && /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      color: 'var(--text-muted)'
    }
  }, d.project), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, /*#__PURE__*/React.createElement(Tag, null, d.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-13)'
    }
  }, String(d.phase).padStart(2, '0')), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      color: 'var(--text-muted)'
    }
  }, d.date), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'right',
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-small)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, d.action, " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down-to-line",
    size: 14
  })))))));
}
function ActivityFeed({
  items
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map((a, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '32px 1fr',
      gap: 20,
      paddingBottom: i === items.length - 1 ? 0 : 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      flex: 'none',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.icon,
    size: 14
  })), i < items.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--border)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-strong)'
    }
  }, a.text), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, a.date, " \xB7 2026", a.project ? ' Â· ' + a.project : '')))));
}
function DeliverablesScreen() {
  const D = window.PORTAL_DATA;
  const [filter, setFilter] = React.useState('Todos');
  const all = D.projects.flatMap(p => p.deliverables.map(d => ({
    ...d,
    project: p.name
  })));
  const rows = filter === 'Todos' ? all : all.filter(d => d.type === filter);
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Archivo",
    title: "Entregables",
    lead: "Todo lo que hemos entregado, con fecha y acceso directo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '32px 0 32px'
    }
  }, ['Todos', 'Documento', 'AutomatizaciÃ³n', 'Manual'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filter === t,
    onSelect: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement(DeliverablesTable, {
    rows: rows,
    showProject: true
  }));
}
function ActivityScreen() {
  const D = window.PORTAL_DATA;
  const items = D.projects.flatMap(p => p.activity.map(a => ({
    ...a,
    project: p.name
  })));
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Bit\xE1cora",
    title: "Actividad",
    lead: "Cada movimiento en tus proyectos, del m\xE1s reciente al m\xE1s antiguo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(ActivityFeed, {
    items: items
  })));
}
function SupportScreen({
  onSent
}) {
  const [topic, setTopic] = React.useState('');
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Soporte",
    title: "\xBFEn qu\xE9 te ayudamos?",
    lead: "Respondemos en horario h\xE1bil, normalmente el mismo d\xEDa."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['message-circle', 'WhatsApp', 'Lo mÃ¡s rÃ¡pido para dudas de operaciÃ³n.', 'Abrir WhatsApp'], ['mail', 'Correo', 'hola@ailabschool.com Â· respuesta en menos de 24h', 'Escribir correo'], ['calendar', 'Videollamada', 'Agenda 30 minutos con tu consultor.', 'Ver horarios']].map(([icon, t, b, cta]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "24px",
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      background: 'var(--gray-1000)',
      color: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, b)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, cta)))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-20)'
    }
  }, "Levantar un ticket"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSent();
    },
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Proyecto",
    options: window.PORTAL_DATA.projects.map(p => p.name)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tipo",
    options: ['Algo no estÃ¡ funcionando', 'Duda de uso', 'Solicitud de cambio', 'Otro']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Asunto",
    placeholder: "El agente no responde fuera de horario",
    value: topic,
    onChange: e => setTopic(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    type: "submit"
  }, "Enviar ticket")))));
}
function AccountScreen({
  onSaved
}) {
  const D = window.PORTAL_DATA;
  const [notif, setNotif] = React.useState(true);
  const [weekly, setWeekly] = React.useState(false);
  const cell = {
    padding: '16px 16px 16px 0',
    borderBottom: '1px solid var(--border)',
    font: 'var(--type-body)',
    color: 'var(--text-body)',
    textAlign: 'left'
  };
  return /*#__PURE__*/React.createElement(PortalPage, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Cuenta",
    title: D.client.name,
    lead: "Datos de la empresa y accesos al portal.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: onSaved
    }, "Guardar cambios")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Datos de la empresa"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Raz\xF3n social",
    defaultValue: D.client.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "RFC",
    defaultValue: D.client.rfc
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contacto principal",
    defaultValue: D.client.contact
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    defaultValue: D.client.email
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Notificaciones"), /*#__PURE__*/React.createElement(Switch, {
    label: "Avisarme cuando haya un entregable nuevo",
    checked: notif,
    onChange: setNotif
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Resumen semanal por correo",
    checked: weekly,
    onChange: setWeekly
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Usuarios con acceso"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    })
  }, "Invitar")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("tbody", null, D.users.map(u => /*#__PURE__*/React.createElement("tr", {
    key: u.email
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      fontWeight: 500,
      color: u.active ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, u.name, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-small)',
      fontWeight: 400,
      color: 'var(--text-muted)'
    }
  }, u.email)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'right'
    }
  }, u.active ? /*#__PURE__*/React.createElement(Tag, null, u.role) : /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Pendiente")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Plan"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, D.client.plan), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, "Facturaci\xF3n mensual \xB7 siguiente corte 30 sep 2026")))));
}
Object.assign(window, {
  DeliverablesTable,
  ActivityFeed,
  DeliverablesScreen,
  ActivityScreen,
  SupportScreen,
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/data.js
try { (() => {
/* Datos mock del portal de clientes. Sustituir por consultas a Supabase. */
window.PORTAL_DATA = {
  client: {
    name: 'Distribuidora del Norte',
    contact: 'Ana Ruiz',
    role: 'DirecciÃ³n de operaciones',
    email: 'ana@distnorte.mx',
    initials: 'AR',
    rfc: 'DNO120344TA9',
    plan: 'AutomatizaciÃ³n + acompaÃ±amiento'
  },
  users: [{
    name: 'Ana Ruiz',
    email: 'ana@distnorte.mx',
    role: 'Administrador',
    active: true
  }, {
    name: 'Luis PeÃ±a',
    email: 'luis@distnorte.mx',
    role: 'Lectura',
    active: true
  }, {
    name: 'InvitaciÃ³n pendiente',
    email: 'compras@distnorte.mx',
    role: 'Lectura',
    active: false
  }],
  phases: ['DiagnÃ³stico', 'DiseÃ±o de la soluciÃ³n', 'ConstrucciÃ³n', 'Puesta en marcha', 'AcompaÃ±amiento'],
  projects: [{
    id: 'whatsapp',
    name: 'Agente de WhatsApp para pedidos',
    phase: 3,
    progress: 62,
    status: 'A tiempo',
    summary: 'Un agente recibe pedidos por WhatsApp, arma la cotizaciÃ³n con precios vigentes y da de alta en el ERP.',
    next: 'Entrega de flujo de cotizaciÃ³n',
    nextDate: '12 sep 2026',
    started: '4 ago 2026',
    phaseDetail: [{
      state: 'done',
      date: '6 ago',
      note: 'SesiÃ³n de 90 min con operaciones y ventas.'
    }, {
      state: 'done',
      date: '14 ago',
      note: 'Arquitectura aprobada por Ana Ruiz.'
    }, {
      state: 'current',
      date: 'En curso',
      note: 'Flujo de cotizaciÃ³n en pruebas con 3 vendedores.'
    }, {
      state: 'todo',
      date: 'Est. 26 sep',
      note: 'Salida controlada con el 20% de los pedidos.'
    }, {
      state: 'todo',
      date: 'Est. oct',
      note: 'RevisiÃ³n mensual de resultados.'
    }],
    deliverables: [{
      name: 'Mapa de oportunidades',
      type: 'Documento',
      phase: 1,
      date: '8 ago 2026',
      action: 'Descargar PDF'
    }, {
      name: 'Arquitectura de la soluciÃ³n',
      type: 'Documento',
      phase: 2,
      date: '14 ago 2026',
      action: 'Descargar PDF'
    }, {
      name: 'Flujo n8n Â· Cotizador',
      type: 'AutomatizaciÃ³n',
      phase: 3,
      date: '29 ago 2026',
      action: 'Abrir en n8n'
    }, {
      name: 'Manual de uso v1',
      type: 'Manual',
      phase: 3,
      date: '1 sep 2026',
      action: 'Descargar PDF'
    }],
    activity: [{
      date: '1 sep',
      text: 'Se entregÃ³ el manual de uso v1.',
      icon: 'file-text'
    }, {
      date: '29 ago',
      text: 'Se activÃ³ el agente en el nÃºmero de pruebas.',
      icon: 'bot'
    }, {
      date: '25 ago',
      text: 'Se conectÃ³ el catÃ¡logo de precios al flujo.',
      icon: 'plug'
    }, {
      date: '14 ago',
      text: 'Arquitectura aprobada. Inicia construcciÃ³n.',
      icon: 'circle-check'
    }, {
      date: '6 ago',
      text: 'SesiÃ³n de diagnÃ³stico realizada.',
      icon: 'search-check'
    }]
  }, {
    id: 'facturas',
    name: 'ConciliaciÃ³n de facturas',
    phase: 2,
    progress: 28,
    status: 'En revisiÃ³n',
    summary: 'ClasificaciÃ³n de CFDI y conciliaciÃ³n bancaria automÃ¡tica con revisiÃ³n de excepciones.',
    next: 'AprobaciÃ³n de arquitectura',
    nextDate: '9 sep 2026',
    started: '25 ago 2026',
    phaseDetail: [{
      state: 'done',
      date: '27 ago',
      note: 'DiagnÃ³stico con el Ã¡rea contable.'
    }, {
      state: 'current',
      date: 'En curso',
      note: 'Propuesta de arquitectura enviada, esperando aprobaciÃ³n.'
    }, {
      state: 'todo',
      date: 'Est. 20 sep',
      note: 'ConstrucciÃ³n del clasificador.'
    }, {
      state: 'todo',
      date: 'Est. oct',
      note: 'Puesta en marcha y capacitaciÃ³n.'
    }, {
      state: 'todo',
      date: 'â€”',
      note: 'AcompaÃ±amiento.'
    }],
    deliverables: [{
      name: 'Mapa de oportunidades Â· Contabilidad',
      type: 'Documento',
      phase: 1,
      date: '28 ago 2026',
      action: 'Descargar PDF'
    }, {
      name: 'Propuesta de arquitectura',
      type: 'Documento',
      phase: 2,
      date: '3 sep 2026',
      action: 'Revisar y aprobar'
    }],
    activity: [{
      date: '3 sep',
      text: 'Se enviÃ³ la propuesta de arquitectura para aprobaciÃ³n.',
      icon: 'file-text'
    }, {
      date: '28 ago',
      text: 'Se entregÃ³ el mapa de oportunidades.',
      icon: 'circle-check'
    }, {
      date: '27 ago',
      text: 'SesiÃ³n de diagnÃ³stico con contabilidad.',
      icon: 'search-check'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/CasesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Eyebrow,
  Stat
} = window.AiLabDesignSystem_1d6ea7;
function CasesScreen({
  onCase
}) {
  const C = window.AILAB_CONTENT;
  const [area, setArea] = React.useState('Todos');
  const areas = ['Todos', 'Operaciones', 'Ventas', 'Soporte'];
  const list = area === 'Todos' ? C.cases : C.cases.filter(c => c.area === area);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Casos"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['Lo que ya estÃ¡'], [{
      stroke: 'operando'
    }]]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '58ch'
    }
  }, "Proyectos reales con PyMEs mexicanas. Los pilotos est\xE1n marcados como tales \u2014 preferimos decirlo que inflar la lista.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(Tag, {
    key: a,
    selected: area === a,
    onSelect: () => setArea(a)
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, list.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.slug,
    interactive: true,
    padding: "0",
    onClick: () => onCase(c.slug),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: 'var(--gray-1000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'transparent',
      WebkitTextStroke: '1px var(--gray-600)',
      textAlign: 'center',
      padding: '0 24px'
    }
  }, c.client), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.kind === 'Piloto' ? 'accent' : 'inverse'
  }, c.kind))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.industry), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-44)',
      color: 'var(--text-strong)'
    }
  }, c.stat), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, c.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-small)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Leer el caso ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16
  }))))))));
}
function CaseDetailScreen({
  slug,
  onBack,
  onCta
}) {
  const C = window.AILAB_CONTENT;
  const c = C.cases.find(x => x.slug === slug) || C.cases[0];
  const block = (t, b) => /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-lead)',
      color: 'var(--text-body)'
    }
  }, b));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '64px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), " Todos los casos"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.kind === 'Piloto' ? 'accent' : 'inverse'
  }, c.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gray-500)'
    }
  }, c.industry)), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 24,
      fontSize: 'var(--text-60)',
      color: '#FFFFFF',
      maxWidth: '18ch'
    }
  }, c.client), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '54ch'
    }
  }, c.body)), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, block('El problema', c.problem), block('La soluciÃ³n', c.solution), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "El resultado"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, c.result.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    style: {
      display: 'flex',
      gap: 12,
      font: 'var(--type-lead)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 6
    }
  }), r))))), /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Stat, {
    hero: true,
    value: c.stat,
    label: c.unit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    marker: false
  }, "Stack"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 16
    }
  }, c.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: onCta
  }, "Quiero algo as\xED"))))));
}
Object.assign(window, {
  CasesScreen,
  CaseDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CasesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Icon,
  Eyebrow
} = window.AiLabDesignSystem_1d6ea7;
const NAV = [{
  id: 'servicios',
  label: 'Servicios'
}, {
  id: 'casos',
  label: 'Casos'
}, {
  id: 'metodologia',
  label: 'MetodologÃ­a'
}, {
  id: 'academia',
  label: 'Academia'
}, {
  id: 'nosotros',
  label: 'Equipo'
}];
function Wordmark({
  color = '#FFFFFF',
  size = 20
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      color
    }
  }, "Ai", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange)'
    }
  }, "Lab"));
}
function Header({
  route,
  onNavigate,
  onCta,
  onLogin
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#0D0D0D',
      borderBottom: '1px solid var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      border: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginRight: 'auto'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNavigate(n.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-11)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: route === n.id ? '#FFFFFF' : 'var(--gray-500)',
      borderBottom: `1px solid ${route === n.id ? 'var(--orange)' : 'transparent'}`,
      transition: 'var(--transition-base)'
    },
    onMouseEnter: e => {
      if (route !== n.id) e.currentTarget.style.color = '#D0D0D0';
    },
    onMouseLeave: e => {
      if (route !== n.id) e.currentTarget.style.color = 'var(--gray-500)';
    }
  }, n.label))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-11)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gray-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onCta,
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Agendar diagn\xF3stico")));
}
function Footer({
  onNavigate
}) {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    marker: false
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(([label, route]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => route && onNavigate(route),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      textAlign: 'left',
      cursor: route ? 'pointer' : 'default',
      font: 'var(--type-small)',
      color: 'var(--gray-400)'
    }
  }, label)))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#0D0D0D',
      color: 'var(--gray-400)',
      padding: '64px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      paddingBottom: 48,
      borderBottom: '1px solid var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-body)',
      color: 'var(--gray-400)',
      maxWidth: '34ch'
    }
  }, "Consultor\xEDa y automatizaci\xF3n con IA para peque\xF1as y medianas empresas. Te lo construimos y te ense\xF1amos a operarlo."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gray-600)'
    }
  }, "Durango, M\xE9xico \xB7 LATAM")), col('Servicios', [['Agentes de IA', 'servicios'], ['AutomatizaciÃ³n de procesos', 'servicios'], ['Integraciones', 'servicios'], ['CapacitaciÃ³n de equipos', 'academia']]), col('Empresa', [['Casos', 'casos'], ['MetodologÃ­a', 'metodologia'], ['Academia', 'academia'], ['Equipo', 'nosotros']]), col('Contacto', [['hola@ailabschool.com', null], ['Agendar diagnÃ³stico', 'contacto'], ['Portal de clientes', 'login'], ['LinkedIn', null]])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--gray-600)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AILAB \xB7 AILABSCHOOL.COM"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('privacidad'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--gray-600)',
      font: 'inherit',
      letterSpacing: 'inherit',
      cursor: 'pointer'
    }
  }, "AVISO DE PRIVACIDAD"), /*#__PURE__*/React.createElement("span", null, "DURANGO \xB7 REMOTO")))));
}
function Section({
  children,
  tone = 'light',
  style,
  bg
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'dark' ? '#0D0D0D' : tone === 'subtle' ? 'var(--bg-subtle)' : 'var(--bg)',
      padding: '120px 0',
      ...(bg ? {
        position: 'relative',
        overflow: 'hidden'
      } : null),
      ...style
    }
  }, bg, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  tone = 'light',
  action
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: dark ? 'inverse' : 'accent'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-44)',
      color: dark ? '#F5F5F5' : 'var(--text-strong)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: 'var(--type-lead)',
      color: dark ? 'var(--gray-400)' : 'var(--text-body)'
    }
  }, lead)), action);
}

/** ALL-CAPS display line with one word rendered as orange outline. */
function StrokeHeading({
  lines,
  size = 'var(--text-80)',
  color = '#FFFFFF'
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: size,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      color,
      margin: 0
    }
  }, lines.map((line, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, line.map((part, j) => typeof part === 'string' ? part : /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      color: 'transparent',
      WebkitTextStroke: '2px var(--orange)'
    }
  }, part.stroke)))));
}
const PHASES = [{
  n: '01',
  title: 'DiagnÃ³stico',
  body: 'Entendemos tu operaciÃ³n y dÃ³nde se pierde tiempo o dinero.',
  output: 'Mapa de oportunidades priorizado'
}, {
  n: '02',
  title: 'DiseÃ±o de la soluciÃ³n',
  body: 'Definimos quÃ© se automatiza, con quÃ© herramientas y quÃ© sigue haciendo una persona.',
  output: 'Arquitectura y alcance por escrito'
}, {
  n: '03',
  title: 'ConstrucciÃ³n',
  body: 'Entregas incrementales que ya puedes probar. No meses de silencio.',
  output: 'AutomatizaciÃ³n funcionando por partes'
}, {
  n: '04',
  title: 'Puesta en marcha',
  body: 'Salida controlada, monitoreo y tu equipo capacitado para operarlo.',
  output: 'Sistema en producciÃ³n + equipo entrenado'
}, {
  n: '05',
  title: 'AcompaÃ±amiento',
  body: 'Ajustes, nuevas oportunidades y soporte continuo.',
  output: 'Mejora basada en uso real'
}];
function Roadmap({
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 1,
      background: dark ? 'var(--gray-800)' : 'var(--border)'
    }
  }, PHASES.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      background: dark ? '#0D0D0D' : 'var(--bg)',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-32)',
      color: 'var(--orange)'
    }
  }, p.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-18)',
      color: dark ? '#F5F5F5' : 'var(--text-strong)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-small)',
      color: dark ? 'var(--gray-400)' : 'var(--text-body)',
      marginBottom: 'auto'
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16,
      borderTop: `1px solid ${dark ? 'var(--gray-800)' : 'var(--border)'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Output"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--type-small)',
      fontWeight: 500,
      color: dark ? '#F5F5F5' : 'var(--text-strong)'
    }
  }, p.output)))));
}
Object.assign(window, {
  Wordmark,
  Header,
  Footer,
  Section,
  SectionHead,
  StrokeHeading,
  Roadmap,
  PHASES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Select,
  Checkbox,
  Radio,
  Icon,
  Eyebrow,
  Stat,
  Badge
} = window.AiLabDesignSystem_1d6ea7;
const SLOTS = ['Jue 10 Â· 10:00', 'Jue 10 Â· 16:00', 'Vie 11 Â· 09:30', 'Vie 11 Â· 13:00', 'Lun 14 Â· 11:00', 'Lun 14 Â· 17:00'];
function ContactScreen({
  onSubmit
}) {
  const [slot, setSlot] = React.useState(SLOTS[1]);
  const [ok, setOk] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const submit = e => {
    e.preventDefault();
    onSubmit((email || 'tu correo') + ' Â· ' + slot);
  };
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 96,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Agenda tu diagn\xF3stico",
    title: "90 minutos, sin costo, sin venta dura",
    lead: "Revisamos tus procesos actuales y te devolvemos un plan priorizado en menos de 48 horas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 48,
      paddingTop: 48,
      borderTop: '1px solid var(--border)'
    }
  }, [['clock', 'SesiÃ³n de 90 minutos por videollamada'], ['file-text', 'Plan escrito priorizado a 90 dÃ­as'], ['shield-check', 'Tus datos no se comparten con terceros']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20,
    style: {
      color: 'var(--text-accent)'
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    hero: true,
    value: "< 24h",
    label: "Tiempo de respuesta"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "120+",
    label: "Diagn\xF3sticos hechos"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "40px"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Ana Ruiz",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Empresa",
    placeholder: "Distribuidora del Norte"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Correo de trabajo",
    type: "email",
    placeholder: "nombre@empresa.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    hint: "Respondemos en menos de 24 horas",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\xBFQu\xE9 te gustar\xEDa automatizar?",
    options: ['AtenciÃ³n por WhatsApp', 'Cotizaciones y pedidos', 'Seguimiento a clientes', 'AdministraciÃ³n y facturas', 'AÃºn no lo sÃ©']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Elige horario"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, SLOTS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    type: "button",
    onClick: () => setSlot(s),
    style: {
      padding: '12px 8px',
      cursor: 'pointer',
      borderRadius: 2,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      background: slot === s ? 'var(--gray-1000)' : 'var(--bg)',
      color: slot === s ? '#F5F5F5' : 'var(--text-body)',
      border: `1px solid ${slot === s ? 'var(--gray-1000)' : 'var(--border)'}`,
      transition: 'var(--transition-base)'
    }
  }, s)))), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "Acepto el aviso de privacidad",
    description: "Solo usamos tus datos para agendar el diagn\xF3stico"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    type: "submit",
    disabled: !ok
  }, "Agenda tu diagn\xF3stico"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Respuesta en < 24h"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Eyebrow,
  Stat
} = window.AiLabDesignSystem_1d6ea7;
function HomeScreen({
  onNavigate,
  onCta,
  onCase,
  onLogin
}) {
  const C = window.AILAB_CONTENT;
  const [area, setArea] = React.useState('Todos');
  const areas = ['Todos', 'Operaciones', 'Ventas', 'Soporte'];
  const cases = area === 'Todos' ? C.cases : C.cases.filter(c => c.area === area);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    bg: /*#__PURE__*/React.createElement(NetworkBg, null),
    style: {
      padding: '140px 0 0',
      borderBottom: '1px solid var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Consultor\xEDa IA \xB7 Durango, M\xE9xico \xB7 LATAM")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 80,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    lines: [['Automatizamos tu ', {
      stroke: 'negocio'
    }], ['con IA que sÃ­ opera']]
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220,
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lead)',
      color: 'var(--gray-400)'
    }
  }, "Consultor\xEDa y automatizaci\xF3n con IA para peque\xF1as y medianas empresas. Te quitamos el trabajo repetitivo esta misma semana \u2014 y le ense\xF1amos a tu equipo a operarlo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('casos'),
    style: {
      color: '#F5F5F5',
      borderColor: 'var(--gray-600)'
    }
  }, "Ver proyectos")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      borderTop: '1px solid var(--gray-800)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)'
    }
  }, C.stats.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.label,
    delay: i * 120,
    style: {
      padding: '40px 40px 40px 0',
      borderLeft: i ? '1px solid var(--gray-800)' : 'none',
      paddingLeft: i ? 40 : 0
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: /*#__PURE__*/React.createElement(CountUp, {
      value: s.value
    }),
    label: s.label,
    note: s.note
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0D0D0D',
      borderBottom: '1px solid var(--gray-800)',
      padding: '28px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gray-600)',
      whiteSpace: 'nowrap'
    }
  }, "Industrias con las que trabajamos"), /*#__PURE__*/React.createElement(Marquee, {
    items: C.industries
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Qu\xE9 hacemos",
    title: "Cinco servicios, un solo objetivo",
    lead: "Que dejes de pagar horas de tu equipo por trabajo que una m\xE1quina hace mejor.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNavigate('servicios'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Ver detalle")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 64
    }
  }, C.services.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i % 3 * 110,
    from: "scale"
  }, /*#__PURE__*/React.createElement(Lift, null, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "32px",
    onClick: () => onNavigate('servicios'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 40,
    style: {
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      color: 'transparent',
      WebkitTextStroke: '1px var(--border-strong)'
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 40,
      fontSize: 'var(--text-24)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-small)',
      color: 'var(--text-body)'
    }
  }, s.line), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '24px 0 0',
      padding: '24px 0 0',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 4
    }
  }), b))))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Casos",
    title: "Resultados medidos en horas",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNavigate('casos'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Todos los casos")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 40
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(Tag, {
    key: a,
    selected: area === a,
    onSelect: () => setArea(a)
  }, a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, cases.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.slug,
    delay: i * 110
  }, /*#__PURE__*/React.createElement(Lift, null, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "0",
    onClick: () => onCase(c.slug),
    style: {
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: 'var(--gray-1000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'transparent',
      WebkitTextStroke: '1px var(--gray-600)',
      textAlign: 'center',
      padding: '0 24px'
    }
  }, c.client), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.kind === 'Piloto' ? 'accent' : 'inverse'
  }, c.kind))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.industry), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-44)',
      color: 'var(--text-strong)'
    }
  }, c.stat), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, c.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-small)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Leer el caso ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16
  }))))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    tone: "dark",
    eyebrow: "Metodolog\xEDa",
    title: "Hay un m\xE9todo, no improvisaci\xF3n",
    lead: "Cinco fases con entregable definido. Sabes en qu\xE9 vas y qu\xE9 sigue, siempre.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNavigate('metodologia'),
      style: {
        color: '#F5F5F5',
        borderColor: 'var(--gray-600)'
      },
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Ver metodolog\xEDa")
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Roadmap, {
    tone: "dark"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "AiLabSchool",
    title: "No solo automatizamos: formamos a tu equipo",
    lead: "Es la diferencia entre rentar una soluci\xF3n y qued\xE1rtela. Tu gente aprende a operar y ajustar lo que construimos.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => onNavigate('academia'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Ver academia")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 64
    }
  }, C.courses.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.title,
    delay: i * 110,
    from: "scale"
  }, /*#__PURE__*/React.createElement(Lift, null, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "32px",
    onClick: () => onNavigate('academia'),
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.format), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 20,
      fontSize: 'var(--text-20)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-small)',
      color: 'var(--text-body)'
    }
  }, c.body))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Transparencia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-44)'
    }
  }, "Sigue el avance de tu proyecto en tiempo real"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      font: 'var(--type-lead)',
      color: 'var(--text-body)'
    }
  }, "Cada cliente entra a su portal y ve en qu\xE9 fase va, qu\xE9 se entreg\xF3 y qu\xE9 sigue. Sin pedir reportes por WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 16
    })
  }, "Entrar al portal"))), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 140
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    tone: "inverse",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--gray-800)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12
  }), " portal.ailabschool.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: '#F5F5F5'
    }
  }, "Agente de WhatsApp"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Fase 03 \xB7 Construcci\xF3n")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      height: 4,
      background: 'var(--gray-800)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '62%',
      height: '100%',
      background: 'var(--orange)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "62% DE AVANCE"), /*#__PURE__*/React.createElement("span", null, "PR\xD3XIMA ENTREGA \xB7 12 SEP")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: '20px 0 0',
      borderTop: '1px solid var(--gray-800)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['Se activÃ³ el agente en nÃºmero de pruebas', 'Se entregÃ³ manual de uso v1', 'ReuniÃ³n de seguimiento agendada'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      font: 'var(--type-small)',
      color: 'var(--gray-400)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 3
    }
  }), t)))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Equipo",
    title: "Trabajas con personas, no con un proveedor"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24,
      marginTop: 64,
      maxWidth: 860
    }
  }, C.team.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.name,
    delay: i * 140
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "32px",
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      flex: 'none',
      background: 'var(--gray-1000)',
      color: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24
    }
  }, m.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-20)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, m.role), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-small)',
      color: 'var(--text-body)'
    }
  }, m.line))))))), /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Siguiente paso"), /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['90 minutos'], ['y un ', {
      stroke: 'plan'
    }]]
  })), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate('contacto'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "Agendar diagn\xF3stico")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InnerScreens.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon,
  Eyebrow,
  Stat
} = window.AiLabDesignSystem_1d6ea7;
function MethodScreen({
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Metodolog\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['Cinco fases,'], ['cinco ', {
      stroke: 'entregables'
    }]]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '58ch'
    }
  }, "Cada fase termina con algo en tus manos: un documento, un flujo funcionando o tu equipo capacitado. Nunca con \"seguimos trabajando en ello\".")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Roadmap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "C\xF3mo se siente"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-32)'
    }
  }, "Entregas cada semana, no cada trimestre"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, "Trabajamos en incrementos que puedes probar. Si algo no sirve, lo sabes en la semana 2 y no en el mes 4. Todo el avance queda visible en tu portal de cliente.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 1,
      background: 'var(--border)'
    }
  }, [['DiagnÃ³stico entregado', '48 horas'], ['Primer flujo en producciÃ³n', '2 semanas'], ['Equipo capacitado', 'Semana 6'], ['RevisiÃ³n de resultados', 'Mensual']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--bg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '20px 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-18)',
      color: 'var(--text-strong)'
    }
  }, v)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-32)',
      maxWidth: '24ch'
    }
  }, "Empecemos por el diagn\xF3stico. Sin costo la primera sesi\xF3n."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "Agendar diagn\xF3stico"))));
}
function AcademyScreen({
  onCta
}) {
  const C = window.AILAB_CONTENT;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "AiLabSchool"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['Te lo construimos'], ['y te ', {
      stroke: 'enseÃ±amos'
    }]]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '58ch'
    }
  }, "Formaci\xF3n pr\xE1ctica para equipos de PyME: nada de teor\xEDa de IA, solo lo que van a usar el lunes en la ma\xF1ana.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Programa",
    title: "Cursos y talleres",
    lead: "Se imparten en tu empresa o en l\xEDnea. Tambi\xE9n abiertos a p\xFAblico general."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 64
    }
  }, C.courses.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "32px",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, c.format), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 20,
      fontSize: 'var(--text-24)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-small)',
      color: 'var(--text-body)',
      marginBottom: 32
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: onCta
  }, "Solicitar temario")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Formato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-32)'
    }
  }, "Capacitaci\xF3n incluida en cada proyecto"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, "Toda implementaci\xF3n cierra con una sesi\xF3n de traspaso: tu equipo aprende a operar el flujo, ajustarlo y detectar cu\xE1ndo algo falla. Los manuales y videos quedan en tu portal.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, [['Sesiones grabadas', 'Quedan disponibles para quien entre nuevo al equipo'], ['Manual por proceso', 'Paso a paso con capturas de tu propia herramienta'], ['Soporte 30 dÃ­as', 'Dudas de operaciÃ³n resueltas por WhatsApp']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-small)',
      color: 'var(--text-muted)'
    }
  }, b))))))));
}
function AboutScreen({
  onCta
}) {
  const C = window.AILAB_CONTENT;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Nosotros"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['Un equipo chico'], ['que ', {
      stroke: 'entrega'
    }]]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '58ch'
    }
  }, "Desde Durango trabajamos con empresas de todo M\xE9xico y LATAM. Nos especializamos en negocios de 5 a 60 personas, donde el due\xF1o todav\xEDa hace de todo.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24,
      maxWidth: 860
    }
  }, C.team.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      background: 'var(--gray-1000)',
      color: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28
    }
  }, m.initials), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 24,
      fontSize: 'var(--text-24)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, m.role), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-small)',
      color: 'var(--text-body)'
    }
  }, m.line), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 14
    })
  }, "LinkedIn")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 48
    }
  }, [['CÃ³mo cobramos', 'Por proyecto con alcance cerrado, no por hora. Sabes el total antes de empezar.'], ['Con quiÃ©n trabajamos', 'PyMEs de 5 a 60 personas en retail, servicios, salud y distribuciÃ³n.'], ['DÃ³nde estamos', 'Durango, MÃ©xico. Trabajamos en remoto con toda LATAM y presencial en la regiÃ³n.']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-32)',
      maxWidth: '26ch'
    }
  }, "\xBFPlaticamos 90 minutos sobre tu operaci\xF3n?"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    })
  }, "Agendar diagn\xF3stico"))));
}
function PrivacyScreen() {
  const blocks = [['Responsable', 'AiLab / AiLabSchool, con domicilio en Durango, MÃ©xico, es responsable del tratamiento de tus datos personales.'], ['Datos que recabamos', 'Nombre, empresa, cargo, correo electrÃ³nico y telÃ©fono, proporcionados por ti al llenar el formulario de diagnÃ³stico o al usar el portal de clientes.'], ['Finalidades', 'Contactarte para agendar el diagnÃ³stico, dar seguimiento a tu proyecto, enviarte entregables y, si lo autorizas, compartirte contenido de AiLabSchool.'], ['Transferencias', 'No vendemos ni compartimos tus datos con terceros para fines comerciales. Utilizamos proveedores de infraestructura y comunicaciÃ³n que los procesan por nuestra cuenta.'], ['Derechos ARCO', 'Puedes acceder, rectificar, cancelar u oponerte al tratamiento de tus datos escribiendo a hola@ailabschool.com. Respondemos en un mÃ¡ximo de 20 dÃ­as hÃ¡biles.'], ['Cambios a este aviso', 'Cualquier modificaciÃ³n se publicarÃ¡ en esta misma pÃ¡gina, indicando la fecha de Ãºltima actualizaciÃ³n.']];
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '68ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Legal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 16,
      fontSize: 'var(--text-44)'
    }
  }, "Aviso de privacidad"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "\xDAltima actualizaci\xF3n \xB7 Septiembre 2026 \xB7 Texto placeholder, revisar con asesor\xEDa legal"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, blocks.map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      paddingTop: 24,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-20)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, b))))));
}
Object.assign(window, {
  MethodScreen,
  AcademyScreen,
  AboutScreen,
  PrivacyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InnerScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Motion.jsx
try { (() => {
/* Motion helpers for the AiLab landing. Respects prefers-reduced-motion. */
const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Interactive AI/comms network: nodes drift, link when close, and react to the cursor. */
function NetworkBg({
  density = 0.00009,
  color = '255,103,0'
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let raf,
      w = 0,
      h = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = {
      x: -9999,
      y: -9999,
      active: false
    };
    let nodes = [];
    const build = () => {
      const count = Math.max(28, Math.min(90, Math.round(w * h * density)));
      nodes = Array.from({
        length: count
      }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.9,
        pulse: Math.random() * Math.PI * 2
      }));
    };
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };
    const draw = t => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 150,
        PULL = 190;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
        if (mouse.active) {
          const dx = mouse.x - n.x,
            dy = mouse.y - n.y,
            d = Math.hypot(dx, dy);
          if (d < PULL && d > 0.001) {
            const f = (1 - d / PULL) * 0.035;
            n.vx += dx / d * f;
            n.vy += dy / d * f;
          }
        }
        const sp = Math.hypot(n.vx, n.vy);
        if (sp > 0.55) {
          n.vx *= 0.94;
          n.vy *= 0.94;
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const near = mouse.active && Math.hypot(mouse.x - (a.x + b.x) / 2, mouse.y - (a.y + b.y) / 2) < 170;
            ctx.strokeStyle = near ? 'rgba(' + color + ',' + (0.5 * (1 - d / LINK)).toFixed(3) + ')' : 'rgba(255,255,255,' + (0.13 * (1 - d / LINK)).toFixed(3) + ')';
            ctx.lineWidth = near ? 1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        n.pulse += 0.02;
        const near = mouse.active && Math.hypot(mouse.x - n.x, mouse.y - n.y) < 170;
        const glow = 0.55 + Math.sin(n.pulse) * 0.25;
        ctx.fillStyle = near ? 'rgba(' + color + ',' + Math.min(1, glow + 0.35).toFixed(3) + ')' : 'rgba(216,216,216,' + (glow * 0.5).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + (near ? 1.2 : 0), 0, Math.PI * 2);
        ctx.fill();
        if (near) {
          ctx.strokeStyle = 'rgba(' + color + ',0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 7, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    const onMove = e => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x > -60 && mouse.y > -60 && mouse.x < w + 60 && mouse.y < h + 60;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    window.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    if (REDUCED) {
      ctx.clearRect(0, 0, w, h);
      draw(0);
      cancelAnimationFrame(raf);
    } else raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }
  });
}

/** Fades + lifts children into view once. `delay` in ms, `from` = up | left | right | scale. */
function Reveal({
  children,
  delay = 0,
  from = 'up',
  style,
  as: Tag = 'div'
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(REDUCED);
  React.useEffect(() => {
    if (REDUCED || !ref.current) return;
    let done = false;
    const show = () => {
      if (!done) {
        done = true;
        setSeen(true);
      }
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          show();
          io.disconnect();
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(ref.current);
    /* Red de seguridad: si el observer no dispara (contenido ya visible al primer paint), revela igual. */
    const rafId = requestAnimationFrame(() => {
      const r = ref.current && ref.current.getBoundingClientRect();
      if (r && r.top < (window.innerHeight || 800) && r.bottom > 0) show();
    });
    const t = setTimeout(show, 700);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(t);
    };
  }, []);
  const hidden = {
    up: 'translateY(28px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    scale: 'scale(0.97)'
  }[from];
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    "data-reveal": "1",
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? 'none' : hidden,
      filter: seen ? 'none' : 'blur(6px)',
      transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, filter .7s ease ${delay}ms`,
      willChange: 'opacity, transform',
      ...style
    }
  }, children);
}

/** Staggers Reveal over a list of children. */
function RevealGroup({
  children,
  step = 90,
  from = 'up',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, React.Children.map(children, (c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * step,
    from: from,
    style: {
      display: 'contents'
    }
  }, c)));
}

/** Counts a numeric stat up when it scrolls into view. Keeps prefixes/suffixes ("+120", "3.2x", "48h"). */
function CountUp({
  value,
  duration = 1200
}) {
  const ref = React.useRef(null);
  const [txt, setTxt] = React.useState(REDUCED ? value : null);
  React.useEffect(() => {
    if (REDUCED || !ref.current) return;
    const m = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!m) {
      setTxt(value);
      return;
    }
    const [, pre, numStr, post] = m;
    const target = parseFloat(numStr);
    const decimals = (numStr.split('.')[1] || '').length;
    setTxt(pre + 0 .toFixed(decimals) + post);
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setTxt(pre + (target * eased).toFixed(decimals) + post);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      io.disconnect();
      run();
    }, {
      threshold: 0.5
    });
    io.observe(ref.current);
    const t = setTimeout(() => {
      io.disconnect();
      run();
    }, 900);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [value]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, txt === null ? value : txt);
}

/** Seamless horizontal marquee. Pauses on hover. */
function Marquee({
  items,
  speed = 38
}) {
  const row = key => /*#__PURE__*/React.createElement("div", {
    key: key,
    "aria-hidden": key === 'b',
    style: {
      display: 'flex',
      gap: 32,
      paddingRight: 32,
      flex: 'none'
    }
  }, items.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "ail-marquee-item",
    style: {
      font: 'var(--type-body)',
      fontWeight: 500,
      color: 'var(--gray-600)',
      whiteSpace: 'nowrap',
      transition: 'color .3s ease'
    }
  }, n)));
  return /*#__PURE__*/React.createElement("div", {
    className: "ail-marquee",
    style: {
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
      WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ail-marquee-track",
    style: {
      display: 'flex',
      width: 'max-content',
      animation: REDUCED ? 'none' : `ail-marquee ${speed}s linear infinite`
    }
  }, row('a'), row('b')));
}

/** Wraps a card so it lifts and its border warms on hover. */
function Lift({
  children,
  y = 6
}) {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    style: {
      transform: on && !REDUCED ? `translateY(-${y}px)` : 'none',
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease',
      boxShadow: on ? '0 18px 40px -24px rgba(13,13,13,.45)' : 'none',
      height: '100%'
    }
  }, children);
}
Object.assign(window, {
  NetworkBg,
  Reveal,
  RevealGroup,
  CountUp,
  Marquee,
  Lift,
  REDUCED
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Motion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Eyebrow,
  Stat,
  Switch,
  Tooltip
} = window.AiLabDesignSystem_1d6ea7;
const PLANS = [{
  name: 'DiagnÃ³stico',
  price: '$18,000',
  period: 'una vez',
  items: ['SesiÃ³n de 90 minutos', 'Mapa de procesos', 'Plan priorizado a 90 dÃ­as'],
  featured: false
}, {
  name: 'AutomatizaciÃ³n',
  price: '$42,000',
  period: 'por flujo',
  items: ['DiagnÃ³stico incluido', 'ImplementaciÃ³n en n8n o Make', 'Menos de 48h por flujo', '30 dÃ­as de soporte'],
  featured: true
}, {
  name: 'Agente de IA',
  price: 'A medida',
  period: 'proyecto',
  items: ['Agente con tu informaciÃ³n', 'IntegraciÃ³n a CRM / WhatsApp', 'CapacitaciÃ³n del equipo', 'Monitoreo mensual'],
  featured: false
}];
function ServicesScreen({
  onCta
}) {
  const [annual, setAnnual] = React.useState(false);
  const C = window.AILAB_CONTENT;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "dark",
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "Servicios"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StrokeHeading, {
    size: "var(--text-60)",
    lines: [['Lo que hacemos'], ['y con ', {
      stroke: 'quÃ©'
    }]]
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      font: 'var(--type-lead)',
      color: 'var(--gray-400)',
      maxWidth: '58ch'
    }
  }, "Cinco frentes. Casi siempre empezamos por uno solo, el que m\xE1s horas libera, y de ah\xED crecemos.")), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 1,
      background: 'var(--border)'
    }
  }, C.services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: 'var(--bg)',
      display: 'grid',
      gridTemplateColumns: '120px 1.2fr 1fr',
      gap: 48,
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1,
      color: 'transparent',
      WebkitTextStroke: '1px var(--border-strong)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    style: {
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-32)'
    }
  }, s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: 'var(--type-lead)',
      color: 'var(--text-body)'
    }
  }, s.line)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: 'var(--orange)',
      flex: 'none',
      marginTop: 5
    }
  }), b)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginRight: 16,
      alignSelf: 'center'
    }
  }, "Stack habitual"), ['n8n', 'Make', 'MCP', 'WhatsApp Business API', 'Supabase', 'Google Workspace', 'CRM / ERP', 'LLM'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    style: {
      padding: '96px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Precios",
    title: "Alcances claros, sin retainers eternos",
    lead: "Los precios son en pesos mexicanos e incluyen implementaci\xF3n. Sin costo por licencia oculta."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Ver con mantenimiento anual",
    checked: annual,
    onChange: setAnnual
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 48
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "32px",
    tone: p.featured ? 'inverse' : 'default',
    style: p.featured ? {
      borderColor: 'var(--orange)'
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-24)',
      color: p.featured ? '#F5F5F5' : 'var(--text-strong)'
    }
  }, p.name), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "M\xE1s pedido")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-mono)',
      fontWeight: 700,
      fontSize: 'var(--text-32)',
      color: p.featured ? 'var(--orange)' : 'var(--text-strong)'
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-small)',
      color: p.featured ? 'var(--gray-500)' : 'var(--text-muted)'
    }
  }, "/ ", p.period)), annual && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--type-mono)',
      fontSize: 'var(--text-11)',
      color: p.featured ? 'var(--gray-400)' : 'var(--text-muted)'
    }
  }, "+ $6,400 / mes de mantenimiento"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '32px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, p.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      font: 'var(--type-body)',
      color: p.featured ? 'var(--gray-400)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    style: {
      color: 'var(--orange)'
    }
  }), i))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? 'accent' : 'secondary',
    fullWidth: true,
    style: {
      marginTop: 32,
      ...(p.featured ? {} : {})
    },
    onClick: onCta
  }, "Empezar"))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "C\xF3mo trabajamos",
    title: "Qu\xE9 entregamos en cada proyecto"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24,
      marginTop: 64
    }
  }, [['file-text', 'Mapa del proceso', 'Un documento con el flujo actual, el flujo propuesto y las horas que libera.'], ['plug', 'Integraciones probadas', 'Cada conexiÃ³n queda documentada con su usuario, su alerta y su plan B.'], ['gauge', 'Tablero de resultados', 'Horas ahorradas, tareas ejecutadas y errores evitados, semana a semana.'], ['graduation-cap', 'SesiÃ³n de traspaso', 'Dos horas grabadas con tu equipo para operar y ajustar sin nosotros.']].map(([icon, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "32px",
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    style: {
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-18)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 96,
      marginTop: 96,
      paddingTop: 48,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    hero: true,
    value: "< 48h",
    label: "Por flujo implementado"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "30 d\xEDas",
    label: "Soporte incluido"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2 h",
    label: "Sesi\xF3n de traspaso"
  }))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Contenido placeholder realista para el sitio de AiLab. Reemplazar por datos reales antes de publicar. */
window.AILAB_CONTENT = {
  stats: [{
    value: '+120',
    label: 'Horas ahorradas al mes',
    note: 'Suma de los procesos que operan hoy'
  }, {
    value: '8',
    label: 'Empresas acompaÃ±adas'
  }, {
    value: '48h',
    label: 'Primer diagnÃ³stico entregado'
  }],
  industries: ['Retail', 'Servicios profesionales', 'Salud', 'DistribuciÃ³n', 'EducaciÃ³n', 'Automotriz'],
  services: [{
    n: '01',
    icon: 'bot',
    title: 'Agentes de IA',
    line: 'AtenciÃ³n y ventas que responden solas, con la informaciÃ³n de tu negocio.',
    bullets: ['Agente de WhatsApp con tu catÃ¡logo', 'CalificaciÃ³n y ruteo de prospectos', 'Respuestas con tus documentos internos']
  }, {
    n: '02',
    icon: 'workflow',
    title: 'AutomatizaciÃ³n de procesos',
    line: 'El trabajo repetitivo entre herramientas deja de hacerlo una persona.',
    bullets: ['Flujos en n8n y Make', 'Altas, cotizaciones y seguimientos', 'Alertas y reportes automÃ¡ticos']
  }, {
    n: '03',
    icon: 'plug',
    title: 'Integraciones',
    line: 'Que tus sistemas se hablen entre sÃ­ sin capturar dos veces.',
    bullets: ['Sheets, CRM y ERP', 'WhatsApp Business API', 'FacturaciÃ³n y pagos']
  }, {
    n: '04',
    icon: 'graduation-cap',
    title: 'CapacitaciÃ³n de equipos',
    line: 'Tu gente opera lo que construimos, sin depender de nosotros.',
    bullets: ['Talleres a medida por Ã¡rea', 'Manuales y video de uso', 'Cursos abiertos de AiLabSchool']
  }, {
    n: '05',
    icon: 'search-check',
    title: 'ConsultorÃ­a y diagnÃ³stico',
    line: 'Antes de automatizar, saber quÃ© conviene automatizar.',
    bullets: ['Mapa de procesos y cuellos de botella', 'PriorizaciÃ³n por retorno', 'Plan de 90 dÃ­as']
  }],
  cases: [{
    slug: 'distribuidora',
    client: 'Distribuidora del Norte',
    kind: 'Cliente',
    industry: 'DistribuciÃ³n Â· 34 empleados',
    area: 'Operaciones',
    stat: '40',
    unit: 'horas / mes',
    body: 'Cotizaciones y alta de pedidos automatizadas entre WhatsApp y el ERP.',
    problem: 'Tres personas capturaban a mano cada pedido que entraba por WhatsApp, y los errores de captura llegaban hasta la factura.',
    solution: 'Un agente lee el mensaje, arma la cotizaciÃ³n con precios vigentes y, al aprobarse, da de alta el pedido en el ERP.',
    result: ['40 horas de captura eliminadas al mes', 'Errores de pedido de 6% a menos de 1%', 'CotizaciÃ³n en 4 minutos en vez de 2 horas'],
    stack: ['n8n', 'WhatsApp API', 'ERP propio', 'Google Sheets']
  }, {
    slug: 'contable',
    client: 'Despacho RÃ­os y Asociados',
    kind: 'Cliente',
    industry: 'Despacho contable Â· 18 empleados',
    area: 'Operaciones',
    stat: '3.2x',
    unit: 'ROI a 6 meses',
    body: 'ClasificaciÃ³n de facturas y conciliaciÃ³n con un agente de IA.',
    problem: 'Cada cierre de mes se iba en clasificar CFDI y cuadrar movimientos bancarios de 60 clientes.',
    solution: 'Un flujo descarga, clasifica y concilia; el contador solo revisa las excepciones que el agente marca.',
    result: ['Cierre mensual de 9 a 3 dÃ­as', '3.2x retorno a los 6 meses', '60 clientes atendidos con el mismo equipo'],
    stack: ['n8n', 'OCR', 'LLM', 'Excel']
  }, {
    slug: 'dental',
    client: 'ClÃ­nica Dental VÃ©rtice',
    kind: 'Cliente',
    industry: 'Salud Â· 12 empleados',
    area: 'Soporte',
    stat: '61%',
    unit: 'menos ausencias',
    body: 'Recordatorios y reagendado automÃ¡tico de citas por WhatsApp.',
    problem: 'Una de cada tres citas se caÃ­a sin aviso y la recepcionista pasaba la maÃ±ana llamando.',
    solution: 'Recordatorio automÃ¡tico a 48h y 3h, con opciÃ³n de reagendar en el mismo chat y liberaciÃ³n del espacio.',
    result: ['61% menos ausencias', 'Agenda ocupada al 88%', 'RecepciÃ³n liberada 12 horas por semana'],
    stack: ['Make', 'WhatsApp API', 'Google Calendar']
  }, {
    slug: 'carwash',
    client: 'Car Wash Express',
    kind: 'Piloto',
    industry: 'Servicios Â· 9 empleados',
    area: 'Ventas',
    stat: '2.4x',
    unit: 'reseÃ±as nuevas',
    body: 'Seguimiento post-servicio y programa de recompra automatizado.',
    problem: 'No habÃ­a forma de saber quiÃ©n volvÃ­a ni de pedir reseÃ±as sin incomodar al cliente.',
    solution: 'Mensaje de seguimiento a las 24 horas, encuesta de una pregunta y recordatorio de recompra a los 15 dÃ­as.',
    result: ['2.4x mÃ¡s reseÃ±as en Google', '31% de clientes recurrentes identificados', 'Cero trabajo manual de seguimiento'],
    stack: ['Make', 'WhatsApp API', 'Google Sheets']
  }],
  courses: [{
    title: 'IA aplicada para dueÃ±os de negocio',
    format: 'Taller Â· 4 horas',
    body: 'QuÃ© se puede automatizar hoy en tu empresa y cÃ³mo priorizarlo sin ser tÃ©cnico.'
  }, {
    title: 'n8n desde cero para tu equipo',
    format: 'Curso Â· 6 sesiones',
    body: 'Tu equipo construye y mantiene sus propios flujos sin depender de un proveedor.'
  }, {
    title: 'Prompting para operaciÃ³n diaria',
    format: 'Taller Â· 3 horas',
    body: 'CÃ³mo usar modelos de lenguaje en tareas reales de ventas, soporte y administraciÃ³n.'
  }],
  team: [{
    name: 'Dan DÃ¡vila',
    role: 'Fundador y consultor',
    line: 'DiseÃ±a e implementa las automatizaciones y dirige AiLabSchool.',
    initials: 'DD'
  }, {
    name: 'Por definir',
    role: 'ImplementaciÃ³n',
    line: 'Espacio reservado para el siguiente perfil del equipo.',
    initials: 'â€”'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
