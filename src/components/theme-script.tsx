export function ThemeScript() {
  const script = `
    (function() {
      try {
        var key = 'brandon-theme';
        var saved = localStorage.getItem(key);
        var next = saved === 'dark' || saved === 'light'
          ? saved
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', next === 'dark');
        document.documentElement.style.colorScheme = next;
      } catch (error) {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
