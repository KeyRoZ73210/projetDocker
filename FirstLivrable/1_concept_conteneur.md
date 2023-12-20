# Partie 1 : Qu'est-ce que la conteneurisation ?

La conteneurisation est une approche informatique qui consiste à regrouper une application avec toutes ses dépendances logicielles et bibliothèques associées dans un environnement isolé appelé conteneur.

Cela permet de réduire les charges au démarrage et de supprimer la nécessité de configurer des systèmes d'exploitation invités distincts pour chaque application, car ils partagent tous un seul noyau de système d'exploitation

# Partie 2 : Les avantages

## Portabilité :

C'est un conteneur d'application crée un progiciel exécutable qui est isolé par rapport au système d'exploitation hôte. Donc, il ne dépend pas du système d'exploitation hôte et n'est pas lié à celui-ci, cela le rend portable et lui permet de s'exécuter de manière cohérente et uniforme sur n'importe quelle plate-forme ou cloud.

## Isolation :

La conteneurisation permet d'isoler une application et de la faire fonctionner de façon indépendante. C'est-à-dire si un conteneur est défaillant alors sa défaillance n'affecte pas le bon fonctionnement des autres.
Ce qui permet au développeur d'identifier le problèmes sans mettre à l'arrêt les autres.

## Efficacité :

les logiciels qui marche dans des environnements conteneurisés partagent le noyau du système d'exploitation de la machine hôte. Cela permet au développeurs de partager les couches d'application entre les différents conteneurs.
De plus les conteneurs, sont moins gros que les machines virtuelles, ce qui permet au développeur d'exécuter davantage de conteneurs sur la même capacité de calcul qu'une seule machine virtuelle.
Donc cela permet l'efficacité des serveurs est accrue et les coûts liés aux serveurs et aux licences sont diminués.

## Scalabilité :
(c'est le point que j'ai le plus de mal à comprendre)

La scalabilité des conteneurs permet au entreprise de déployer des applications sur un cluster de serveurs cloud. Ce qui leur permet d'augmenter ou de diminuer la capacité de ses applications en fonction des besoins.


# Partie 3 : Schéma

<img src="./schema_conteneur.jpg">

On peut voir plusieurs points communs entre une VM et un conteneur :

- Isolation
- Portabilité
- Automatisation

et aussi les différences :

- Simplicité
- Performance
- Scalabilité

Pour conclure, on peut facilement dire que les VM et les conteneurs sont deux technologies qui sont similaires même si on peut noter que les VM sont plus complexes et plus performantes, mais elles sont plus coûteuses à mettre en œuvre et à gérer.
Tandis que les conteneurs sont plus simple à mettre en place, plus performant.

# Partie 4 : Ligne de commande

1. `docker ps`  : Cela affiche la liste des conteneurs actuellement en cours d'exécution sur votre système.
2. `docker logs`  : Affiche les journaux (logs) d'un conteneur spécifié. 
3. `docker run` : Cette commande permet de créer et de démarrer un conteneur basé sur une image Docker spécifiée.
4. `docker create` : Ça crée un conteneur à partir d'une image spécifiée, mais ne le démarre pas.
5. `docker exec` : Utilisée pour exécuter des commandes à l'intérieur d'un conteneur en cours d'exécution.
EX: command docker exec -it <container name> /bin/bash : ouvre un shell interactif dans le conteneur spécifié.
6. `docker stop [container ID]` : Arrête le conteneur spécifié.
7. `docker rm [container ID]` : Supprime le conteneur spécifié. 
8. `docker inspect [container ID]` : Fournit des informations détaillées sur le conteneur spécifié
___
9. `docker images` : Affiche la liste des images Docker disponibles localement sur votre machine.
10. `docker push` : Envoie votre image vers le registre Docker, la rendant accessible à d'autres utilisateurs.
11. `docker pull` : Télécharge une image Docker depuis un registre.
12. `docker commit` : Crée une nouvelle image à partir des modifications apportées à un conteneur en cours d'exécution. 
13. `docker rmi` : Supprime une ou plusieurs images Docker.
___
14. `docker volume` : Permet de créer un volume Docker.
15. `docker network` : Utilisée pour créer un réseau Docker.
16. `docker build` : Cette commande est utilisée pour construire une nouvelle image Docker à partir d'un fichier Dockerfile.
17. `docker --version` : Cette commande est utilisée pour connaitre la version de docker.
18. `docker restart` : Redémarre le conteneur Docker avec l'ID de conteneur mentionné dans la commande.
19. `docker kill` : Arrête immédiatement le conteneur.

___
20. `docker login` : Cela permet de se connecter au hub docker.
21. `docker info` : Cela permet d'obtenir des informations détaillées sur le docker installé sur le système.


# Partie 5 : Lancer votre premier conteneur

<img src="./img_conteneur.png">

### Résumé des commandes

```bash
$ docker pull nginx
$ docker run -p 8080:80 -d a6bd71f48f6839d9faae1f29d3babef831e76bc213107682c5cc80f0cbb30866
$ docker images
```

# Partie 6 : Volumes Docker

<img src="./bdd.png">
<img src="./volume.png">
<img src="./command.png">

```bash
docker run --name mariadbtest -e MYSQL_ROOT_PASSWORD=mypass -p 3306:3306 -v mariadb_data:/var/lib/mysql -d docker
.io/library/mariadb
```

Volume Docker permet externalisez le stockage des données en les plaçant dans le volume. Donc, même si le conteneur est arrêté ou supprimé, les données persistent dans le volume.

Créer un volume est utile car cela permet facilité les sauvegardes ainsi que la restauration des données.
Cela permet aussi de partager les données entre les conteneurs, c'est-à-dire si on a plusieurs conteneurs nécessitant l'accès aux mêmes donnéesn on peut monter le même volume sur tous les conteneurs concernés.
Les volumes offrent une gestion des permissions plus flexible ce qui permet une meilleur isolation des données.

La différence entre une application statefull et stateless est que dans une application stateless, chaque requête est indépendante et ne dépend pas des requêtes précédentes, tandis que dans une application stateful, l'état des utilisateurs est conservé entre les requêtes ce qui permet une continuité d'information et une gestion de session plus riche.

# Partie 7 : Réseaux Docker

Voici la liste des réseaux et leur explication :
- Bridge Network
  - C'est le mode par défaut pour les conteneurs Docker. Chaque conteneur est connecté à un pont réseau interne, et les conteneurs peuvent communiquer entre eux et avec le réseau hôte. Les conteneurs peuvent avoir leur propre plage d'adresses IP.
- Host Network :
  - Les conteneurs partagent le même espace réseau que le système hôte. Ils n'ont pas d'adresse IP propre et utilisent directement l'interface réseau de l'hôte.
- Overlay Network :
  - Permet de connecter des conteneurs sur différentes machines physiques. C'est particulièrement utile dans les environnements de cluster ou de swarm.
- Macvlan Network :
  - Permet d'attribuer à chaque conteneur une adresse IP du réseau physique, ce qui les rend apparaître comme des dispositifs physiques sur le réseau.
- None Network :
  - Désactive l'interface réseau par défaut dans le conteneur, laissant le conteneur sans accès réseau par défaut.
- Custom Bridge Network :
  - Vous pouvez créer des ponts réseau personnalisés pour isoler des groupes spécifiques de conteneurs. Chaque pont a sa propre plage d'adresses IP.

### les différentes réseaux les plus utilisé

Les réseaux les plus utilisés sont le Bridge Network, le Host Network, l'Overlay Network et le Macvlan Network.

<img src="./network_list.png">

``` bash
$  docker network ls
```

<img src="./network.png">

``` bash
$ docker inspect --format '{{.HostConfig.NetworkMode}}' c2
$ docker inspect c2
```

# Partie 8 : Exercice Pratique

#### Faire un dockerfile / docker-compose.yml
Voici le lien de version 1.0.1 de mon app : https://github.com/KeyRoZ73210/projetDocker/releases/tag/v1.0.1

#### Optimiser une image
Voici le lien de version 1.0.2 de mon app : https://github.com/KeyRoZ73210/projetDocker/releases/tag/v1.0.2

Taille de l'image optimisé : 43.24MB

