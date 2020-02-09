const getThemeColor = () => {
  // devemos fazer essa verificação para não quebrar na compilação
  const theme = typeof window !== 'undefined' && window.__theme;

  if (theme === 'light') return '#fff';
  if (theme === 'dark') return '#191921';
};

export default getThemeColor;
