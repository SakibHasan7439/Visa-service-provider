import React from 'react';

const Toggle = () => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
      document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    return (
      <label className="swap ">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on px-4 py-2 text-center">DARKMODE</div>
        <div className="swap-off px-4 py-2 text-center">LIGHTMODE</div>
      </label>
    );
};

export default Toggle;