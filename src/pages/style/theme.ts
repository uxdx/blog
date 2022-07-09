const dark_theme = {
    primary: "#000",
    p_light: "#232323",
    p_dark: "#1b1b1b",
    on_p: "#fafafa",
    secondary: "#4a148c",
    s_light: "#7c43bd",
    s_dark: "#12005e",
    on_s: "#fff"
}

const mixins = {
    // admin page border 
    mdeditor_border: () => `
        background-color: #0d1117;
        border-radius   : 3px;
        box-shadow: 0 0 0 1px #30363d, 0 0 0 #30363d, 0 1px 1px #30363d;
    `
}

export { dark_theme, mixins };