Présentation du site web Cartel 2022

Le Cartel 2022 est une compétition sportive (décrite dans le site) que nous organisons cette année, et nous avions trouvé qu'il était pertinent
d'en réaliser le site web grâce à ce cours. Le but premier de ce site est de permettre à tous les participants de consulter le planning des matchs 
à venir et leurs scores, en offrant l'option de trier les matchs par école ou par sport.

Présentation des pages:
- Le site compte une page d'accueil, qui décrit la compétition
- La page carte utilise un plugin pour afficher une carte montrant les emplacements importants pendant la compétition
- La page contact résume les contacts utiles à joindre pendant la compétition
- La page ecole permet de sélectionner l'école à laquelle on appartient pour voir la liste des matchs où elle joue. Ces informations sont extraites 
  d'une API Rest
- La page partenaire décrit les partenaires qui ont fait confiance au Cartel, et qui le finance en partenaire
- La page planning affiche tous les matchs de la compétition. Ces informations sont extraites d'une API Rest
- La page sport permet de trier les matchs à venir par sport. Ces informations sont extraites d'une API Rest
- La page login permet aux arbitres de se connecter à une page protégée (les identifiants sont pour le moment admin-admin)
  Elle permet d'accèder à la page Edition de match, qui permet de modifier l'horaire et les scores des matchs. Ces informations sont ensuite
  envoyée à la base de données grâce à une API Rest