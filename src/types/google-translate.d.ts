interface Window {
  googleTranslateElementInit: () => void;
  google: {
    translate: {
      TranslateElement: new (options: { pageLanguage: string }, elementId: string) => void;
    };
  };
}