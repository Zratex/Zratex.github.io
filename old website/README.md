# Zratey's website
Tout mes projets seront exposés et expliqué ici. C'est la première fois que je fais un vrai site web, donc c'est normal que des tests y soient présents.

# Fonctionnement des dossiers
La page d'acceuil est à la racine du dépôt git nommé `index.html`.

Pour toutes les autres pages, elles seront nommés `index.html` mais stockés dans `etc/[nom de la page]/`. Donc pour y accéder, le `href` doit contenir : `="etc/[nom de la page]/`. Cependant pour accéder à la page d'accceuil, il faudrait mettre `="/"` dans le `href`.

## Dossier "includes"
Dans ce dossier sera stocké les contenus requis pour le bon chargement des pages.

Il y sera notamment stocké le menu des pages (dans `/includes/menu/`), et toutes les images/vidéos/gif des autres pages (dans `/includes/media/`)

Le dossier contiendra en sa racine le fichier `style.css`, qui sera le fichier CSS commun à la majorité des pages du site web.

### Media
`background.gif` sera le background commun à toutes les pages. Donc lors d'une mise à jour majeure, il suffira de juste changer son contenu (mais toujours avec le même nom) et ce changement s'effectuera sur toutes les pages. De ce fait, il se peux qu'un gif de background soit disponible en techniquement double dans le dépôt, mais out en ayant pas le même nom.

> videos

Les éléments vidéos utiles au site seront stockés dans ce dossier. En général cela contiendra les vidéos de background.
> images

Les éléments d'images utiles au site seront stockés dans ce dossier.

# Contenu des pages
La structuration **HTML** d'une page classique du site se déroule ainsi :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!--Titre de la page--></title>
    <link ...> <!--Importation du fichier css/js requis pour cette page-->
</head>
<body style="margin: 0;"> <!--Aucun magin pour que le menu s'intègre bien dans la page-->
    <header>
        <iframe src="/includes/menu/menu.html" frameborder="0" scrolling="no" style="width: 100%;"></iframe> <!--Intégration de la page du menu-->
    </header>
    <main style="margin: 5px;"> <!--Rajout du margin de base pour le reste de la page-->
        <!--Contenu de la page-->
    </main>
</body>
</html>
```
## Acceuil
`index.html` est la page de présentation du site en sa globalité.