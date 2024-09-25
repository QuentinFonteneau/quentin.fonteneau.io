---
title: "Snippet 1"
img: "snippet.webp"
article_type: "snippet"
---

Ajouter une meta description à une seule route générée par un module Drupal.

Pour limiter cette meta description à une seule route, vous devez vérifier
quelle route est actuellement affichée et agir en conséquence. Vous pouvez le
faire en utilisant les informations disponibles dans l'objet Request de Drupal.

Voici comment vous pouvez ajouter la meta description uniquement à une route
spécifique : Code

/\*\*

- Implements hook_page_attachments(). \*/ function
  module_name_page_attachments(array &$page) { // Vérifiez si la route actuelle
  correspond à la route souhaitée. $current_route_name =
  \Drupal::routeMatch()->getRouteName();

if
($current_route_name == 'nom_de_la_route_souhaitee') {
    $description = [
      '#tag' => 'meta',
      '#attributes' => [
        'name' => 'description',
        'content' => 'Ceci est la description de la route souhaitée.',
      ],
    ];
    $page['#attached']['html_head'][] = [$description,
'description']; } }

Explication du code

    Le hook
    hook_page_attachments()
    est un hook de Drupal qui permet d'ajouter des éléments à la page en cours de rendu. Cela inclut des éléments à ajouter dans la balise
    <head>
    de la page, tels que les balises meta.

    À l'intérieur de la fonction
    module_name_page_attachments()
    , nous commençons par obtenir le nom de la route actuelle en utilisant
    $current_route_name = \Drupal::routeMatch()->getRouteName();
    . Cette ligne de code utilise
    Drupal::routeMatch()
    pour obtenir l'objet de correspondance de route actuelle, puis
    getRouteName()
    pour obtenir le nom de la route actuelle.

    Ensuite, nous utilisons une structure conditionnelle
    if
    pour vérifier si le nom de la route actuelle correspond à la route spécifique que nous souhaitons cibler. Vous devez remplacer
    'nom_de_la_route_souhaitée'
    par le nom de la route que vous souhaitez cibler. Si la condition est vraie (c'est-à-dire si la route actuelle correspond à la route souhaitée), nous exécutons le code à l'intérieur de cette condition.

    À l'intérieur de la condition, nous créons un tableau
    $description
    qui représente la balise meta que nous voulons ajouter. Dans cet exemple, la balise meta a un attribut
    name
    égal à "description" et un attribut
    content
    avec la valeur de la description que vous souhaitez afficher.

    Enfin, nous ajoutons la balise meta au tableau
    $page['#attached']['html_head']
    . Cela garantit que la balise meta sera ajoutée à la section
    <head>
    de la page HTML générée. La clé 'description' est utilisée pour identifier cette balise meta parmi les autres éléments de
    <head>
    , comme les balises
    <link>
    ou d'autres balises
    <meta>
    .
