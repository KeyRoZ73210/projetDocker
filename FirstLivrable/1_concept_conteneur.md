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
<img src="./vue-ecran.png">

Taille de l'image optimisé : 43.24MB
<img src="./img-size.png">

#### Stack Multi-Service avec Docker

Voici l'application fonctionnelle sur l’url http://localhost:80 
<img src="./wordpress.png">
<img src="./multi-service.png">

Je configure les variables d’environnement en statiques et en fonction de ce que je veux faire, c'est-à-dire, je voulais me connecter à mariadb avec wordpress donc j'ai configurer mes variables en fonctions de la demande.

l’application wordpress communique avec mariadb grâce à la variable d'environnement "WORDPRESS_DB_HOST" qui lui indique de se connecter à mariadb.
Ensuite il y a les variables d'environnement comme "WORDPRESS_DB_NAME" qui nous donne le nom de la bdd, "WORDPRESS_DB_USER" qui nous donne le nom de l'utilisateur de la bdd et "WORDPRESS_DB_PASSWORD" qui nous donne le mdp pour s'y connecter

Voici le lien de version 1.0.3 de mon app : https://github.com/KeyRoZ73210/projetDocker/releases/tag/v1.0.3

#### Docker Registry

Il existe deux types de registry, celui plublic est plus simple à mettre en place cependant plus l'entreprise va grandir plus on aura besoin de sécurité sauf que celui public ne le permet pas, pour celui qui est privé, il offre une bonne sécurité.
C'est pourquoi l'interêt d'avoir un registry interne dans une entreprise, c'est qu'il offre le plus grand potentiel en matière de sécurité et de configuration sauf qu'il demande une gestion prudente et la garantie que l'infrastructure du registre et les contrôles d'accès restent au sein de l'entreprise.

<img src="./registry_vue.png">
<img src="./registrer.png">

Voici le lien de version 1.0.4 de mon app : https://github.com/KeyRoZ73210/projetDocker/releases/tag/v1.0.4

#### Dockerisation de votre projet personnel

Tous d'abord, il faut créer un dockerfile pour chaque dossier c'est-à-dire dans ce cas un pour le back et un autre pour le front
ensuite, il faut créer un docker-compose.yml pour connecter les dockerfiles comme ceci :

```bash
services:
  backend:
    container_name: DockerBack
    image: keyroz/backend
    build: 
      context: ./backend
      dockerfile: Dockerfile
    environment:
      MONGO_URI: mongodb://mongodb:27017
    ports:
      - 8081:8081
    depends_on:
      - mongodb
    networks:
      - mongodb_network
  
  frontend:
    container_name: DockerFront
    image: keyroz/frontend
    build: 
      context: ./frontend
      dockerfile: Dockerfile
    environment:
      VITE_GRAPHQL_URL: http://backend:8081/graphql
    links:
      - backend
    ports:
      - 4000:80
    depends_on:
      - backend
    networks:
      - mongodb_network
```

Une fois cela fait, on créer les images pour le back, front et mongodb:

```
version: '3'

services:
  backend:
    container_name: DockerBack
    image: keyroz/backend
    build: 
      context: ./backend
      dockerfile: Dockerfile
    environment:
      MONGO_URI: mongodb://mongodb:27017
    ports:
      - 8081:8081
    depends_on:
      - mongodb
    networks:
      - mongodb_network
  
  frontend:
    container_name: DockerFront
    image: keyroz/frontend
    build: 
      context: ./frontend
      dockerfile: Dockerfile
    environment:
      VITE_GRAPHQL_URL: http://backend:8081/graphql
    links:
      - backend
    ports:
      - 4000:80
    depends_on:
      - backend
    networks:
      - mongodb_network
  
  mongodb:
    container_name: MongoDB
    image: mongo:latest
    volumes:
      - mongodb_data:/var/lib/mongo
    ports:
      - 27017:27017
    networks:
      - mongodb_network

volumes:
  mongodb_data:

networks:
  mongodb_network:
    name: mongodb_network
    driver: bridge
```

On créer un volume qui va integrer les données de la bdd de mongodb 
On n'y rajoute les ports pour la connexion entre les différents fichiers pour que cela fonctionne

<img src="./dockerisation.png">

lien vers l'image back : https://hub.docker.com/layers/keyroz/backend/latest/images/sha256:e0df9969761e5f85e71347fe4be97fbc18b92c69bdd8846c38c0b6dbdef166a6?uuid=c9fcbea3-ee1a-4818-9996-75096a19c785%0A

lien vers l'image front : https://hub.docker.com/layers/keyroz/frontend/latest/images/sha256:e0df9969761e5f85e71347fe4be97fbc18b92c69bdd8846c38c0b6dbdef166a6?uuid=c9fcbea3-ee1a-4818-9996-75096a19c785%0A

lien vers le github : https://github.com/KeyRoZ73210/projetDocker/tree/main/API_GraphQL

# Partie : Un cluster de conteneurs

La clusterisation des conteneurs à plusieurs éléments comme :

Plan de contrôle : ensemble de processus qui contrôle les nœuds Kubernetes et assigne toutes les tâches.

Nœuds : machines qui exécutent les tâches qui leur sont assignées par le plan de contrôle.

Pod : un ou plusieurs conteneurs déployés sur un seul nœud. Le pod est l'objet Kubernetes le plus petit et le plus simple.

Service : méthode qui permet d'exposer une application exécutée sur un ensemble de pods en tant que service réseau. Le service dissocie la définition des tâches des pods.

Volume : répertoire contenant des données auxquelles les conteneurs d'un pod peuvent accéder. Un volume Kubernetes a la même durée de vie que le pod dans lequel il se trouve et cette durée de vie dépasse celle de n'importe quel conteneur exécuté dans le pod. Ainsi, les données sont conservées lorsqu'un conteneur redémarre.

Espace de noms : cluster virtuel. Les espaces de noms permettent à Kubernetes de gérer plusieurs clusters (pour plusieurs équipes ou projets) au sein d'un même cluster physique.

Un microservices désigne un style d'architecture utilisé dans le développement d'applications. Elle permet de décomposer une application volumineuse en composants indépendants, chaque élément ayant ses propres responsabilités.

Scalabilité :
La scalabilité c'est la capacité d'un système à s'ajuster à la croissance de la charge ou des demandes. Elle peut être horizontale avec l'ajout d'instances ou verticale avec l'augmentation des ressources d'une instance existante.

Availability ça concerne la capacité d'un système à rester opérationnel malgré les pannes. Les concepts clés incluent la redondance, la répartition de la charge et la clusterisation.

et pour le Load Balancing c'est L'équilibrage de charge consiste à distribuer équitablement la charge de travail entre plusieurs ressources pour optimiser les performances. Cela implique la répartition équilibrée du trafic, l'utilisation d'algorithmes spécifiques et le recours à des solutions matérielles ou logicielles.

Elle permet de répondre à ces problèmatiques car elle permet d'améliorer la scalabilité en ajoutant facilement des ressources, d'assurer la disponibilité en gérant les pannes de manière transparente, et d'optimiser les performances en équilibrant la charge entre les différentes parties du cluster.

Voici la liste de tous les outils permettant d'orchestrer un cluster de conteneurs sont :
  - Kubernetes
  - Docker Swarm
  - Amazon ECS
  - OpenShift
  - Nomad
  - Mesos
  - Rancher

#### Kubernet

Kubelet : Le Kubelet est un agent qui s'exécute sur chaque nœud du cluster. Il est responsable de l'exécution des conteneurs présents sur le nœud et de la communication avec le contrôle-plane (plan de contrôle) de Kubernetes.

Container Runtime : Il s'agit du moteur qui exécute les conteneurs. Docker, containerd et CRI-O sont des exemples de runtimes pris en charge par Kubernetes.

Kube Proxy : Kube Proxy est responsable de la gestion des règles de réseau sur le nœud. Il assure la communication réseau entre les services à l'intérieur du cluster et entre le cluster et l'extérieur.

Kube DNS : Kube DNS est un service qui assure la résolution des noms de service à l'intérieur du cluster. Il permet aux conteneurs de se référencer entre eux par des noms de service plutôt que par des adresses IP.

Pause Containers : Chaque nœud exécute un conteneur Pause, qui sert de conteneur parent aux autres conteneurs sur le nœud. Il facilite la gestion des conteneurs individuels par le Kubelet.

Node Status : Le nœud signale son statut au plan de contrôle de Kubernetes, indiquant s'il est prêt à recevoir des pods ou s'il est en cours de maintenance.

CAdvisor (Container Advisor) : CAdvisor collecte, agrège et exporte des informations sur les performances et la consommation des ressources des conteneurs en cours d'exécution sur le nœud.

Kubelet API Server : Le Kubelet expose une API que le plan de contrôle de Kubernetes peut utiliser pour gérer les conteneurs sur le nœud.

Superviseur de Ressources (Node Resource Manager) : Il surveille l'utilisation des ressources (CPU, mémoire, etc.) sur le nœud et s'assure que les limites spécifiées dans les pods sont respectées.

Gestionnaire de CGroup (Node CGroup Manager) : Il assure la gestion des groupes de contrôle (CGroups), une fonctionnalité du noyau Linux utilisée pour isoler, prioriser et mesurer l'utilisation des ressources.


<img src="./kubernet.svg">
