export default defineNuxtPlugin(() => {
  // Vérifie si la fenêtre est disponible (exécution côté client uniquement)
  if (typeof window !== "undefined") {
    const _paq = (window._paq = window._paq || []);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);

    // Configuration de Matomo
    (function () {
      const u = "https://matomo.fonteneau.io/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "2"]); // Remplacez '1' par l'ID de votre site dans Matomo
      const d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.type = "text/javascript";
      g.async = true;
      g.defer = true;
      g.src = u + "matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  }
});
